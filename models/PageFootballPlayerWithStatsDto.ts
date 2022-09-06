import { FootballPlayerWithStatsDto } from "./FootballPlayerWithStatsDto";
import { PageableObject } from "./PageableObject";
import { Sort } from "./Sort";
export type PageFootballPlayerWithStatsDto={
   totalElements:number;
   totalPages:number;
   sort:Sort
    first:boolean;
    last:boolean;
    number:number;
    numberOfElements:number;
    pageable:PageableObject;
    size:number;
    content:FootballPlayerWithStatsDto;
    empty:boolean;
  }