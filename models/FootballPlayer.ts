import { EnumType } from "typescript";

enum STATUS {
   p="p",
   d="d",
   c="c",
   a="a"
}
export type FootballPlayer={
   id:number;
   name:string;
   lastName:string;
   iconLink:string;
   birthDate:string;
   gender:string;
   role:STATUS;
   jersey:number;
}