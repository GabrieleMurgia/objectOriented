enum STATUS {
   OPEN="OPEN",
   CLOSED="CLOSED"
 }

export type MetaGoatCompetition={
    id:number;
    competitionName:string;
    competitionCountry:string;
    season:string;
    iconLink:string;
    status:STATUS;
}