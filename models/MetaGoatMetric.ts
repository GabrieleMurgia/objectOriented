enum STATUS {
    P="P",
    D="D",
    C="C",
    A="A",
    P_D="P_D",
    P_C="P_C",
    P_A="P_A",
    P_D_C="P_D_C",
    P_D_A="P_D_A",
    P_C_A="P_C_A",
    D_C="D_C",
    D_A="D_A",
    D_C_A="D_C_A",
    C_A="C_A",
    P_D_C_A="P_D_C_A"
}

export type MetaGoatMetric={
    id:number;
    assignableRoles:STATUS;
    metricName:string;
    displayDescription:string;
    valueDescription:string;
 }