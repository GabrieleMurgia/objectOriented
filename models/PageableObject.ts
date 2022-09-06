import { Sort } from "./Sort"

export type PageableObject={
   sort:Sort;
   paged:boolean;
   unpaged:boolean;
   pageNumber:number;
   pageSize:number;
   offset:number;
  }