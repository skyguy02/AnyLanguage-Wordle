import { CONFIG } from './config'

export const VALIDGUESSES = [
 'سفينة',
  'مكنسة',
  'تعبان',
  'اتجوز',
  'سلالم',
  'بوابة',
  'سلحفة',
  'سحلية',
  'تفاحة',
  'عربية',
  'فلافل',
  'مدرسة',
  'صرصار',
  'مهذاء',
  'قزازة',
  'عشرين',
  'ميدان',
  'بتجاز',
  'ضفضعة',
  'تلاجة',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
