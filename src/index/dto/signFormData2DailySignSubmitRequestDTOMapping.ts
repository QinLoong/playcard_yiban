import { DailySignSubmitRequest } from '../../user/dto/dailySignSubmit.dto'; // 导入DailySignSubmitRequest类型
import { signFormData } from './signConfigDTO'; // 导入signFormData类型
// 创建一个类型，表示signFormData的字段名称
type signFormDataKey = keyof signFormData;