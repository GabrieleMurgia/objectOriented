import { MetaGoatMetric } from "./MetaGoatMetric";

export type PlayerMetricPointDto={
    footballPlayerId:number;
    footballPlayerName:string;
    footballPlayerLastName:string;
    footballPlayerPoints:number;
    metaGoatMetric:MetaGoatMetric;
    }