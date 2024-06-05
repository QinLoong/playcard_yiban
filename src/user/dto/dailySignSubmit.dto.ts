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
  
  export function getDailySignRequestParam(
    obj: Partial<DailySignSubmitRequest>,
  ): Omit<DailySignSubmitRequest, 'zzdk_token'> {
    return Object.assign(
      {
        /**
         * 打卡位置
         */
        dkdz: '湖南省 湘潭市 岳塘区 至善路 154号 靠近明德公寓1栋学生公寓 ',
        dkdzZb: '112.934325,27.84791',
        /**
         * 打卡依赖
         */
        dkly: 'yiban',
      
      },
      obj,
    );
  }
  
  export type SignLogRequest = {
    bSortable_0: false;
    bSortable_1: true;
    iSortingCols: 1;
    iDisplayStart: 0;
    iDisplayLength: 12;
    iSortCol_0: 1;
    sSortDir_0: 'desc';
    _t_s_: number;
  };
  
  export type SignLogResponse = {
    sEcho: number;
    iDisplayStart: number;
    iDisplayLength: number;
    iSortColList: number[];
    sSortDirList: string[];
    iTotalRecords: number;
    iTotalDisplayRecords: number;
    aaData: RootObjectAaData[];
  };
  type RootObjectAaData = {
    REDFLAG: string;
    TW: string;
    DKRQ: string;
    DQZT: string;
    DKCS: number;
    DM: string;
    UPDATE_TIME: string;
    DKD: string;
    DONE_IND: string;
  };
  