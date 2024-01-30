export type signFormData = {
    /**
     * 打开所在详细地址，汉字表述
     * @example 湖南省郴州市北湖区五岭大道9号
     * @link DailySignSubmitRequest.dkdz
     */
    address?: string;
    /**
     * 经纬度坐标
     * 百度火星坐标
     * @example 113.014999,25.7706
     * @link DailySignSubmitRequest.dkdzZb
     */
    position?: string;
    /**
   * 打开所在县
   * @example 湖南省郴州市
   * @link DailySignSubmitRequest.dkd
   */
    signAddress?: string;
};