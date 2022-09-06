import { MetaGoatCompetition } from "./MetaGoatCompetition";
import { EnumType } from "typescript";

enum STATUS {
    OPEN="OPEN",
    NEEDS_CALCULATION="NEEDS_CALCULATION",
    CLOSED="CLOSED",
}

export type FootballMatchWeek={
    id:number;
    metaGoatCompetition:MetaGoatCompetition;
    matchWeek:number;
    startDate:string;
    endsDate:string;
    kickOff:string;
    description:string;
    status:STATUS;
   }