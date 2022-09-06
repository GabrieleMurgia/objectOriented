import { FootballMatch } from "./FootballMatch";

enum prova {
  OPEN,
  NEEDS_CALCULATION,
  CLOSED,
}
export type CalendarDayDto={
    matchWeek:number;
    footballMatchWeekDescription:string;
    startsDate:string;
    status:prova ;
    footballMatches:FootballMatch
  }