import axios from "axios";

export abstract class BaseHTTPRepo<TModel>{

    instance = axios.create({
        baseURL: 'https://metagoat-api-metagoat.apps.ocp4.aws.open.reply.it/api'
    });
   
    _setPathParams(url:string,pathParams?:Record<string,string>){
        let newUrl = url;
        if(!pathParams){
            return newUrl
        }
        for (const property in pathParams){
            if(newUrl.includes(`{${property}}`)){
             newUrl.replace(`{${property}}`,pathParams[property])
            }
           }
        return newUrl
    }

    get(url:string,params:Record<string,any>,pathParams?:Record<string,string>){
        return this.instance.get<TModel>(this._setPathParams(url),{
            params:params
        }).then(res=>{
            return res.data;
        })
    }

    remove(url:string,params:Record<string,any>,pathParams?:Record<string,string>){
        return this.instance.delete<TModel>(this._setPathParams(url),{params:params}).then(res=>res.data);
    }

    add(url:string,params:Record<string,any>,pathParams?:Record<string,string>){
        return this.instance.post<TModel>(this._setPathParams(url),params).then(res=>{
            return res.data;
        })
    }

    edit(url:string,params:Record<string,any>,pathParams?:Record<string,string>){
        return this.instance.put<TModel>(this._setPathParams(url),params).then(res=>{
            return res.data;
        })
    }
}