import { FootballMatchWeek } from "./FootballMatchWeek";
import { EnumType } from "typescript";
import { PlayerMetricPointDto } from "./PlayerMetricPointDto";

export type MetaGoatGameResultDto={
    gameResultId:number;
    footballMatchWeek:FootballMatchWeek;
    metaGoatAvatarLink:string;
    metaGoatPoints:number;
    status:EnumType;
    sn4iFunPoints:number;
    sn4iFunCoins:number;
    playerSelections:PlayerMetricPointDto;
    opponentUserNickName:string;
    opponentMetaGoatPoints:number;
    opponentPlayerSelections:PlayerMetricPointDto
    }
    