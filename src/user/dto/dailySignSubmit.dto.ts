export type DailySignSubmitResponse = {
    errorInfoList: { code: any; message: string }[];
    result: boolean;
    msg?: any;
  };
  
  export type DailySignSubmitRequest = {
    dkdz: string;
    dkdzZb: string;
    dkly: string;
    zzdk_token: string;
    dkd: string;
    jzdValue: string;
    'jzdSheng.dm': string;
    'jzdShi.dm': string;
    'jzdXian.dm': string;
    jzdDz: string;
    jzdDz2: string;
    lxdh: string;
    sfzx: string;
    sfzx1: string;
    'twM.dm': string;
    tw1: string;
    'tw1M.dm': string;
    tw11: string;
    'tw2M.dm': string;
    tw12: string;
    'tw3M.dm': string;
    tw13: string;
    'yczk.dm': string;
    yczk1: string;
    fbrq: string;
    jzInd: string;
    jzYy: string;
    zdjg: string;
    fxrq: string;
    'brStzk.dm': string;
    brStzk1: string;
    'brJccry.dm': string;
    brJccry1: string;
    'jrStzk.dm': string;
    jrStzk1: string;
    'jrJccry.dm': string;
    jrJccry1: string;
    jkm: string;
    jkm1: string;
    xcm: string;
    xcm1: string;
    xgym: string;
    xgym1: string;
    hsjc: string;
    hsjc1: string;
    bz: string;
    operationType: string;
    dm: string;
  };
  

  