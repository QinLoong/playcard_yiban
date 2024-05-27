export type SubmitSignResponse = {
    result: boolean;
    msg: string;
  };
  export type SubmitSignRequest = {
    pathFile: string;
    /**
     * 签到ID
     * @example 16632903199821049443
     */
    dm: string;

  };
  
  export function getSubmitSignRequest(
    obj: Partial<SubmitSignRequest>,
  ): SubmitSignRequest {
    return Object.assign(
      {
        pathFile: '',
        dm: '',
        sjdm: '',
        zb: '112.944,27.8296',
        wz: '',
        ly: 'yiban',
        qdwzZt: '',
        fwwDistance: '',
        operationType: 'Update',
      },
      obj,
    );
  }
  