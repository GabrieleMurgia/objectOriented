import { FootballTeam } from "./FootballTeam"

enum STATUS {
   OPEN="OPEN",
   CLOSED="CLOSED"
}
export type FootballMatch={
   homeFootballTeam:FootballTeam;
   awayFootballTeam:FootballTeam;
   matchDate:string;
   kickOff:string;
   result:string;
   status:STATUS;
   }