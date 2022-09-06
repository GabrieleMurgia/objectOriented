import { UserInCompetition } from "./UserInCompetition";

export type MetaGoatGame={
   id:number;
   userInCompetition:UserInCompetition;
   footballMatchWeekId:number;
   selectedOpponentId:string;
   randomOpponent:boolean;
}