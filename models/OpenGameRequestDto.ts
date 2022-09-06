import { OpenGameLineUpSelection } from "./OpenGameLineUpSelection";

export type OpenGameRequestDto={
    avatarJson:string;
    avatarImage:string;
    openGameLineUpSelections:OpenGameLineUpSelection
    randomOpponent:boolean;
    selectedOpponentId:string;
}