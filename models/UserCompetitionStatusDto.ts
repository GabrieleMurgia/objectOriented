import { CurrentOpenFootballMatchWeekInfo } from "./CurrentOpenFootballMatchWeekInfo";

export type UserCompetitionStatusDto={
   openGame:boolean;
   availableToPlay:boolean;
   availableGameResultsRewards:number;
   currentOpenFootballMatchWeekInfo:CurrentOpenFootballMatchWeekInfo
}