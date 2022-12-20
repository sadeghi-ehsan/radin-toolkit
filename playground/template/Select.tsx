import { useState } from "react";
import { OptionCoreData } from "rc-select/lib/interface";
import { Select as SBTSelect, Typography } from "../../src";
import { empty } from "../../src";

export const options = [
  { value: "آبان دخت", label: "آبان دخت" },
  { value: "آبتين", label: "آبتين" },
  { value: "آتوسا", label: "آتوسا" },
  { value: "آفر", label: "آفر" },
  { value: "آفره دخت", label: "آفره دخت" },
  { value: "آذرنوش", label: "آذرنوش" },
  { value: "آذين", label: "آذين" },
  { value: "آراه", label: "آراه" },
  { value: "آرزو", label: "آرزو" },
  { value: "آرش", label: "آرش" },
  { value: "آرتین", label: "آرتین" },
  { value: "آرتام", label: "آرتام" },
  { value: "آرتمن", label: "آرتمن" },
  { value: "آرشام", label: "آرشام" },
  { value: "آرمان", label: "آرمان" },
  { value: "آرمين", label: "آرمين" },
  { value: "آرميتا", label: "آرميتا" },
  { value: "آريا فر", label: "آريا فر" },
  { value: "آريا", label: "آريا" },
  { value: "آريا مهر", label: "آريا مهر" },
  { value: "آرين", label: "آرين" },
  { value: "آزاده", label: "آزاده" },
  { value: "آزرم", label: "آزرم" },
  { value: "آزرمدخت", label: "آزرمدخت" },
  { value: "آزيتا", label: "آزيتا" },
  { value: "آناهيتا", label: "آناهيتا" },
  { value: "آونگ", label: "آونگ" },
  { value: "آهو", label: "آهو" },
  { value: "آيدا", label: "آيدا" },
  { value: "اتسز", label: "اتسز" },
  { value: "اختر", label: "اختر" },
  { value: "ارد", label: "ارد" },
  { value: "ارد شير", label: "ارد شير" },
  { value: "اردوان", label: "اردوان" },
  { value: "ارژن", label: "ارژن" },
  { value: "ارژنگ", label: "ارژنگ" },
  { value: "ارسلان", label: "ارسلان" },
  { value: "ارغوان", label: "ارغوان" },
  { value: "ارمغان", label: "ارمغان" },
  { value: "ارنواز", label: "ارنواز" },
  { value: "اروانه", label: "اروانه" },
  { value: "استر", label: "استر" },
  { value: "اسفنديار", label: "اسفنديار" },
  { value: "اشکان", label: "اشکان" },
  { value: "اشکبوس", label: "اشکبوس" },
  { value: "افسانه", label: "افسانه" },
  { value: "افسون", label: "افسون" },
  { value: "افشين", label: "افشين" },
  { value: "اميد", label: "اميد" },
  { value: "انوش ( آنوشا )", label: "انوش ( آنوشا )" },
  { value: "انوشروان", label: "انوشروان" },
  { value: "اورنگ", label: "اورنگ" },
  { value: "اوژن", label: "اوژن" },
  { value: "اوستا", label: "اوستا" },
  { value: "اهورا", label: "اهورا" },
  { value: "اياز", label: "اياز" },
  { value: "ايران", label: "ايران" },
  { value: "ايراندخت", label: "ايراندخت" },
  { value: "ايرج", label: "ايرج" },
  { value: "ايزديار", label: "ايزديار" },
  { value: "بابک", label: "بابک" },
  { value: "باپوک", label: "باپوک" },
  { value: "باربد", label: "باربد" },
  { value: "بارمان", label: "بارمان" },
  { value: "بامداد", label: "بامداد" },
  { value: "بامشاد", label: "بامشاد" },
  { value: "بانو", label: "بانو" },
  { value: "بختيار", label: "بختيار" },
  { value: "برانوش", label: "برانوش" },
  { value: "برديا", label: "برديا" },
  { value: "برزو", label: "برزو" },
  { value: "برزويه", label: "برزويه" },
  { value: "برزين", label: "برزين" },
  { value: "برمک", label: "برمک" },
  { value: "بزرگمهر", label: "بزرگمهر" },
  { value: "بنفشه", label: "بنفشه" },
  { value: "بوژان", label: "بوژان" },
  { value: "بويان", label: "بويان" },
  { value: "بهار", label: "بهار" },
  { value: "بهارک", label: "بهارک" },
  { value: "بهاره", label: "بهاره" },
  { value: "بهتاش", label: "بهتاش" },
  { value: "بهداد", label: "بهداد" },
  { value: "بهرام", label: "بهرام" },
  { value: "بهديس", label: "بهديس" },
  { value: "بهرخ", label: "بهرخ" },
  { value: "بهرنگ", label: "بهرنگ" },
  { value: "بهروز", label: "بهروز" },
  { value: "بهزاد", label: "بهزاد" },
  { value: "بهشاد", label: "بهشاد" },
  { value: "بهمن", label: "بهمن" },
  { value: "بهناز", label: "بهناز" },
  { value: "بهنام", label: "بهنام" },
  { value: "بهنود", label: "بهنود" },
  { value: "بهنوش", label: "بهنوش" },
  { value: "بيتا", label: "بيتا" },
  { value: "بيژن", label: "بيژن" },
  { value: "پارسا", label: "پارسا" },
  { value: "پاکان", label: "پاکان" },
  { value: "پاکتن", label: "پاکتن" },
  { value: "پاکدخت", label: "پاکدخت" },
  { value: "پانته آ", label: "پانته آ" },
  { value: "پدرام", label: "پدرام" },
  { value: "پرتو", label: "پرتو" },
  { value: "پرشنگ", label: "پرشنگ" },
  { value: "پرتو", label: "پرتو" },
  { value: "پرستو", label: "پرستو" },
  { value: "پرويز", label: "پرويز" },
  { value: "پرديس", label: "پرديس" },
  { value: "پرهام", label: "پرهام" },
  { value: "پژمان", label: "پژمان" },
  { value: "پژوا", label: "پژوا" },
  { value: "پرنيا", label: "پرنيا" },
  { value: "پشنگ", label: "پشنگ" },
  { value: "پروانه", label: "پروانه" },
  { value: "پروين", label: "پروين" },
  { value: "پري", label: "پري" },
  { value: "پريچهر", label: "پريچهر" },
  { value: "پريدخت", label: "پريدخت" },
  { value: "پريسا", label: "پريسا" },
  { value: "پرناز", label: "پرناز" },
  { value: "پريوش", label: "پريوش" },
  { value: "پريا", label: "پريا" },
  { value: "پوپک", label: "پوپک" },
  { value: "پوران", label: "پوران" },
  { value: "پوراندخت", label: "پوراندخت" },
  { value: "پوريا", label: "پوريا" },
  { value: "پولاد", label: "پولاد" },
  { value: "پويا", label: "پويا" },
  { value: "پونه", label: "پونه" },
  { value: "پيام", label: "پيام" },
  { value: "پيروز", label: "پيروز" },
  { value: "پيمان", label: "پيمان" },
  { value: "تابان", label: "تابان" },
  { value: "تاباندخت", label: "تاباندخت" },
  { value: "تاجي", label: "تاجي" },
  { value: "تارا", label: "تارا" },
  { value: "تاويار", label: "تاويار" },
  { value: "ترانه", label: "ترانه" },
  { value: "تناز", label: "تناز" },
  { value: "توران", label: "توران" },
  { value: "توراندخت", label: "توراندخت" },
  { value: "تورج", label: "تورج" },
  { value: "تورتک", label: "تورتک" },
  { value: "توفان", label: "توفان" },
  { value: "توژال", label: "توژال" },
  { value: "تير داد", label: "تير داد" },
  { value: "تينا", label: "تينا" },
  { value: "تينو", label: "تينو" },
  { value: "جابان", label: "جابان" },
  { value: "جامين", label: "جامين" },
  { value: "جاويد", label: "جاويد" },
  { value: "جريره", label: "جريره" },
  { value: "جمشيد", label: "جمشيد" },
  { value: "جوان", label: "جوان" },
  { value: "جويا", label: "جويا" },
  { value: "جهان", label: "جهان" },
  { value: "جهانبخت", label: "جهانبخت" },
  { value: "جهانبخش", label: "جهانبخش" },
  { value: "جهاندار", label: "جهاندار" },
  { value: "جهانگير", label: "جهانگير" },
  { value: "جهان بانو", label: "جهان بانو" },
  { value: "جهاندخت", label: "جهاندخت" },
  { value: "جهان ناز", label: "جهان ناز" },
  { value: "جيران", label: "جيران" },
  { value: "چابک", label: "چابک" },
  { value: "چالاک", label: "چالاک" },
  { value: "چاوش", label: "چاوش" },
  { value: "چترا", label: "چترا" },
  { value: "چوبين", label: "چوبين" },
  { value: "چهرزاد", label: "چهرزاد" },
  { value: "خاوردخت", label: "خاوردخت" },
  { value: "خداداد", label: "خداداد" },
  { value: "خدايار", label: "خدايار" },
  { value: "خرم", label: "خرم" },
  { value: "خرمدخت", label: "خرمدخت" },
  { value: "خسرو", label: "خسرو" },
  { value: "خشايار", label: "خشايار" },
  { value: "خورشيد", label: "خورشيد" },
  { value: "دادمهر", label: "دادمهر" },
  { value: "دارا", label: "دارا" },
  { value: "داراب", label: "داراب" },
  { value: "داريا", label: "داريا" },
  { value: "داريوش", label: "داريوش" },
  { value: "دانوش", label: "دانوش" },
  { value: "داور", label: "داور" },
  { value: "دايان", label: "دايان" },
  { value: "دريا", label: "دريا" },
  { value: "دل آرا", label: "دل آرا" },
  { value: "دل آويز", label: "دل آويز" },
  { value: "دلارام", label: "دلارام" },
  { value: "دل انگيز", label: "دل انگيز" },
  { value: "دلبر", label: "دلبر" },
  { value: "دلبند", label: "دلبند" },
  { value: "دلربا", label: "دلربا" },
  { value: "دلشاد", label: "دلشاد" },
  { value: "دلکش", label: "دلکش" },
  { value: "دلناز", label: "دلناز" },
  { value: "دلنواز", label: "دلنواز" },
  { value: "دورشاسب", label: "دورشاسب" },
  { value: "دنيا", label: "دنيا" },
  { value: "ديااکو", label: "ديااکو" },
  { value: "ديانوش", label: "ديانوش" },
  { value: "ديبا", label: "ديبا" },
  { value: "ديبا دخت", label: "ديبا دخت" },
  { value: "رابو", label: "رابو" },
  { value: "رابين", label: "رابين" },
  { value: "رادبانو", label: "رادبانو" },
  { value: "رادمان ( رادمن )", label: "رادمان ( رادمن )" },
  { value: "رازبان", label: "رازبان" },
  { value: "راژانه", label: "راژانه" },
  { value: "راسا", label: "راسا" },
  { value: "رامتين", label: "رامتين" },
  { value: "رامش", label: "رامش" },
  { value: "رامشگر", label: "رامشگر" },
  { value: "رامونا", label: "رامونا" },
  { value: "راميار", label: "راميار" },
  { value: "راميلا", label: "راميلا" },
  { value: "رامين", label: "رامين" },
  { value: "راويار", label: "راويار" },
  { value: "رژينا", label: "رژينا" },
  { value: "رخپاک", label: "رخپاک" },
  { value: "رخسار", label: "رخسار" },
  { value: "رخشانه", label: "رخشانه" },
  { value: "رخشنده", label: "رخشنده" },
  { value: "رزميار", label: "رزميار" },
  { value: "رستم", label: "رستم" },
  { value: "رکسانا", label: "رکسانا" },
  { value: "روبينا", label: "روبينا" },
  { value: "رودابه", label: "رودابه" },
  { value: "روزبه", label: "روزبه" },
  { value: "روشنک", label: "روشنک" },
  { value: "روناک", label: "روناک" },
  { value: "رهام", label: "رهام" },
  { value: "رهي", label: "رهي" },
  { value: "ريبار", label: "ريبار" },
  { value: "راسپينا", label: "راسپينا" },
  { value: "زادبخت", label: "زادبخت" },
  { value: "زاد به", label: "زاد به" },
  { value: "زاد چهر", label: "زاد چهر" },
  { value: "زاد فر", label: "زاد فر" },
  { value: "زال", label: "زال" },
  { value: "زادماسب", label: "زادماسب" },
  { value: "زاوا", label: "زاوا" },
  { value: "زردشت", label: "زردشت" },
  { value: "زرنگار", label: "زرنگار" },
  { value: "زري", label: "زري" },
  { value: "زرين", label: "زرين" },
  { value: "زرينه", label: "زرينه" },
  { value: "زمانه", label: "زمانه" },
  { value: "زونا", label: "زونا" },
  { value: "زيبا", label: "زيبا" },
  { value: "زيبار", label: "زيبار" },
  { value: "زيما", label: "زيما" },
  { value: "زينو", label: "زينو" },
  { value: "ژاله", label: "ژاله" },
  { value: "ژالان", label: "ژالان" },
  { value: "ژيار", label: "ژيار" },
  { value: "ژينا", label: "ژينا" },
  { value: "ژيوار", label: "ژيوار" },
  { value: "سارا", label: "سارا" },
  { value: "سارک", label: "سارک" },
  { value: "سارنگ", label: "سارنگ" },
  { value: "ساره", label: "ساره" },
  { value: "ساسان", label: "ساسان" },
  { value: "ساغر", label: "ساغر" },
  { value: "سام", label: "سام" },
  { value: "سامان", label: "سامان" },
  { value: "سانا", label: "سانا" },
  { value: "ساناز", label: "ساناز" },
  { value: "سانيار", label: "سانيار" },
  { value: "ساويز", label: "ساويز" },
  { value: "ساهي", label: "ساهي" },
  { value: "ساينا", label: "ساينا" },
  { value: "سايه", label: "سايه" },
  { value: "سپنتا", label: "سپنتا" },
  { value: "سپند", label: "سپند" },
  { value: "سپهر", label: "سپهر" },
  { value: "سپهرداد", label: "سپهرداد" },
  { value: "سپيدار", label: "سپيدار" },
  { value: "سپيد بانو", label: "سپيد بانو" },
  { value: "سپيده", label: "سپيده" },
  { value: "ستاره", label: "ستاره" },
  { value: "ستي", label: "ستي" },
  { value: "سرافراز", label: "سرافراز" },
  { value: "سرور", label: "سرور" },
  { value: "سروش", label: "سروش" },
  { value: "سرور", label: "سرور" },
  { value: "سوبا", label: "سوبا" },
  { value: "سوبار", label: "سوبار" },
  { value: "سنبله", label: "سنبله" },
  { value: "سودابه", label: "سودابه" },
  { value: "سوري", label: "سوري" },
  { value: "سورن", label: "سورن" },
  { value: "سورنا", label: "سورنا" },
  { value: "سوزان", label: "سوزان" },
  { value: "سوزه", label: "سوزه" },
  { value: "سوسن", label: "سوسن" },
  { value: "سومار", label: "سومار" },
  { value: "سولان", label: "سولان" },
  { value: "سولماز", label: "سولماز" },
  { value: "سوگند", label: "سوگند" },
  { value: "سهراب", label: "سهراب" },
  { value: "سهره", label: "سهره" },
  { value: "سهند", label: "سهند" },
  { value: "سيامک", label: "سيامک" },
  { value: "سياوش", label: "سياوش" },
  { value: "سيبوبه", label: "سيبوبه" },
  { value: "سيما", label: "سيما" },
  { value: "سيمدخت", label: "سيمدخت" },
  { value: "سينا", label: "سينا" },
  { value: "سيمين", label: "سيمين" },
  { value: "سيمين دخت", label: "سيمين دخت" },
  { value: "شاپرک", label: "شاپرک" },
  { value: "شادي", label: "شادي" },
  { value: "شادمهر", label: "شادمهر" },
  { value: "شاران", label: "شاران" },
  { value: "شاهپور", label: "شاهپور" },
  { value: "شاهدخت", label: "شاهدخت" },
  { value: "شاهرخ", label: "شاهرخ" },
  { value: "شاهين", label: "شاهين" },
  { value: "شاهيندخت", label: "شاهيندخت" },
  { value: "شايسته", label: "شايسته" },
  { value: "شباهنگ", label: "شباهنگ" },
  { value: "شب بو", label: "شب بو" },
  { value: "شبديز", label: "شبديز" },
  { value: "شبنم", label: "شبنم" },
  { value: "شراره", label: "شراره" },
  { value: "شرمين", label: "شرمين" },
  { value: "شروين", label: "شروين" },
  { value: "شکوفه", label: "شکوفه" },
  { value: "شکفته", label: "شکفته" },
  { value: "شمشاد", label: "شمشاد" },
  { value: "شمين", label: "شمين" },
  { value: "شوان", label: "شوان" },
  { value: "شميلا", label: "شميلا" },
  { value: "شورانگيز", label: "شورانگيز" },
  { value: "شوري", label: "شوري" },
  { value: "شهاب", label: "شهاب" },
  { value: "شهبار", label: "شهبار" },
  { value: "شهباز", label: "شهباز" },
  { value: "شهبال", label: "شهبال" },
  { value: "شهپر", label: "شهپر" },
  { value: "شهداد", label: "شهداد" },
  { value: "شهرآرا", label: "شهرآرا" },
  { value: "شهرام", label: "شهرام" },
  { value: "شهربانو", label: "شهربانو" },
  { value: "شهرزاد", label: "شهرزاد" },
  { value: "شهرناز", label: "شهرناز" },
  { value: "شهرنوش", label: "شهرنوش" },
  { value: "شهره", label: "شهره" },
  { value: "شهريار", label: "شهريار" },
  { value: "شهرزاد", label: "شهرزاد" },
  { value: "شهلا", label: "شهلا" },
  { value: "شهنواز", label: "شهنواز" },
  { value: "شهين", label: "شهين" },
  { value: "شيبا", label: "شيبا" },
  { value: "شيدا", label: "شيدا" },
  { value: "شيده", label: "شيده" },
  { value: "شيردل", label: "شيردل" },
  { value: "شيرزاد", label: "شيرزاد" },
  { value: "شيرنگ", label: "شيرنگ" },
  { value: "شيرو", label: "شيرو" },
  { value: "شيرين دخت", label: "شيرين دخت" },
  { value: "شيما", label: "شيما" },
  { value: "شينا", label: "شينا" },
  { value: "شيرين", label: "شيرين" },
  { value: "شيوا", label: "شيوا" },
  { value: "طوس", label: "طوس" },
  { value: "طوطي", label: "طوطي" },
  { value: "طهماسب", label: "طهماسب" },
  { value: "طهمورث", label: "طهمورث" },
  { value: "غوغا", label: "غوغا" },
  { value: "غنچه", label: "غنچه" },
  { value: "فتانه", label: "فتانه" },
  { value: "فدا", label: "فدا" },
  { value: "فراز", label: "فراز" },
  { value: "فرامرز", label: "فرامرز" },
  { value: "فرانک", label: "فرانک" },
  { value: "فراهان", label: "فراهان" },
  { value: "فربد", label: "فربد" },
  { value: "فربغ", label: "فربغ" },
  { value: "فرجاد", label: "فرجاد" },
  { value: "فرخ", label: "فرخ" },
  { value: "فرخ پي", label: "فرخ پي" },
  { value: "فرخ داد", label: "فرخ داد" },
  { value: "فرخ رو", label: "فرخ رو" },
  { value: "فرخ زاد", label: "فرخ زاد" },
  { value: "فرخ لقا", label: "فرخ لقا" },
  { value: "فرخ مهر", label: "فرخ مهر" },
  { value: "فرداد", label: "فرداد" },
  { value: "فرديس", label: "فرديس" },
  { value: "فرين", label: "فرين" },
  { value: "فرزاد", label: "فرزاد" },
  { value: "فرزام", label: "فرزام" },
  { value: "فرزان", label: "فرزان" },
  { value: "فرزانه", label: "فرزانه" },
  { value: "فرزين", label: "فرزين" },
  { value: "فرشاد", label: "فرشاد" },
  { value: "فرشته", label: "فرشته" },
  { value: "فرشيد", label: "فرشيد" },
  { value: "فرمان", label: "فرمان" },
  { value: "فرناز", label: "فرناز" },
  { value: "فرنگيس ( فري گيس )", label: "فرنگيس ( فري گيس )" },
  { value: "فرنود", label: "فرنود" },
  { value: "فرنوش", label: "فرنوش" },
  { value: "فرنيا", label: "فرنيا" },
  { value: "فروتن", label: "فروتن" },
  { value: "فرود", label: "فرود" },
  { value: "فروز", label: "فروز" },
  { value: "فروزان", label: "فروزان" },
  { value: "فروزش", label: "فروزش" },
  { value: "فروزنده", label: "فروزنده" },
  { value: "فروغ", label: "فروغ" },
  { value: "فرهاد", label: "فرهاد" },
  { value: "فرهنگ", label: "فرهنگ" },
  { value: "فرهود", label: "فرهود" },
  { value: "فربار", label: "فربار" },
  { value: "فريبا", label: "فريبا" },
  { value: "فريد", label: "فريد" },
  { value: "فريدخت", label: "فريدخت" },
  { value: "فريدون", label: "فريدون" },
  { value: "فريمان", label: "فريمان" },
  { value: "فريناز", label: "فريناز" },
  { value: "فرينوش", label: "فرينوش" },
  { value: "فريوش", label: "فريوش" },
  { value: "فيروز", label: "فيروز" },
  { value: "فيروزه", label: "فيروزه" },
  { value: "قابوس", label: "قابوس" },
  { value: "قباد", label: "قباد" },
  { value: "قدسي", label: "قدسي" },
  { value: "کابان", label: "کابان" },
  { value: "کابوک", label: "کابوک" },
  { value: "کارا", label: "کارا" },
  { value: "کارو", label: "کارو" },
  { value: "کاراکو", label: "کاراکو" },
  { value: "کامبخت", label: "کامبخت" },
  { value: "کامبخش", label: "کامبخش" },
  { value: "کامبيز", label: "کامبيز" },
  { value: "کامجو", label: "کامجو" },
  { value: "کامدين", label: "کامدين" },
  { value: "کامران", label: "کامران" },
  { value: "کامراوا", label: "کامراوا" },
  { value: "کامک", label: "کامک" },
  { value: "کامنوش", label: "کامنوش" },
  { value: "کاميار", label: "کاميار" },
  { value: "کانيار", label: "کانيار" },
  { value: "کاووس", label: "کاووس" },
  { value: "کاوه", label: "کاوه" },
  { value: "کتايون", label: "کتايون" },
  { value: "کرشمه", label: "کرشمه" },
  { value: "کسري", label: "کسري" },
  { value: "کلاله", label: "کلاله" },
  { value: "کمبوجيه", label: "کمبوجيه" },
  { value: "کوشا", label: "کوشا" },
  { value: "کهبد", label: "کهبد" },
  { value: "کهرام", label: "کهرام" },
  { value: "کهزاد", label: "کهزاد" },
  { value: "کيارش", label: "کيارش" },
  { value: "کيان", label: "کيان" },
  { value: "کيانا", label: "کيانا" },
  { value: "کيانچهر", label: "کيانچهر" },
  { value: "کياندخت", label: "کياندخت" },
  { value: "کيانوش", label: "کيانوش" },
  { value: "کياوش", label: "کياوش" },
  { value: "کيخسرو", label: "کيخسرو" },
  { value: "کيقباد", label: "کيقباد" },
  { value: "کيکاووس", label: "کيکاووس" },
  { value: "کيوان", label: "کيوان" },
  { value: "کيوان دخت", label: "کيوان دخت" },
  { value: "کيومرث", label: "کيومرث" },
  { value: "کيهان", label: "کيهان" },
  { value: "کياندخت", label: "کياندخت" },
  { value: "کيهانه", label: "کيهانه" },
  { value: "گرد آفريد", label: "گرد آفريد" },
  { value: "گردان", label: "گردان" },
  { value: "گرشا", label: "گرشا" },
  { value: "گرشاسب", label: "گرشاسب" },
  { value: "گرشين", label: "گرشين" },
  { value: "گرگين", label: "گرگين" },
  { value: "گزل", label: "گزل" },
  { value: "گشتاسب", label: "گشتاسب" },
  { value: "گشسب", label: "گشسب" },
  { value: "گشسب بانو", label: "گشسب بانو" },
  { value: "گل", label: "گل" },
  { value: "گل آذين", label: "گل آذين" },
  { value: "گل آرا", label: "گل آرا" },
  { value: "گلاره", label: "گلاره" },
  { value: "گل افروز", label: "گل افروز" },
  { value: "گلاله", label: "گلاله" },
  { value: "گل اندام", label: "گل اندام" },
  { value: "گلاويز", label: "گلاويز" },
  { value: "گلباد", label: "گلباد" },
  { value: "گلبار", label: "گلبار" },
  { value: "گلبام", label: "گلبام" },
  { value: "گلبان", label: "گلبان" },
  { value: "گلبانو", label: "گلبانو" },
  { value: "گلبرگ", label: "گلبرگ" },
  { value: "گلبو", label: "گلبو" },
  { value: "گلبهار", label: "گلبهار" },
  { value: "گلبيز", label: "گلبيز" },
  { value: "گلپاره", label: "گلپاره" },
  { value: "گلپر", label: "گلپر" },
  { value: "گلپري", label: "گلپري" },
  { value: "گلپوش", label: "گلپوش" },
  { value: "گل پونه", label: "گل پونه" },
  { value: "گلچين", label: "گلچين" },
  { value: "گلدخت", label: "گلدخت" },
  { value: "گلديس", label: "گلديس" },
  { value: "گلربا", label: "گلربا" },
  { value: "گلرخ", label: "گلرخ" },
  { value: "گلرنگ", label: "گلرنگ" },
  { value: "گلرو", label: "گلرو" },
  { value: "گلشن", label: "گلشن" },
  { value: "گلريز", label: "گلريز" },
  { value: "گلزاد", label: "گلزاد" },
  { value: "گلزار", label: "گلزار" },
  { value: "گلسا", label: "گلسا" },
  { value: "گلشيد", label: "گلشيد" },
  { value: "گلنار", label: "گلنار" },
  { value: "گلناز", label: "گلناز" },
  { value: "گلنسا", label: "گلنسا" },
  { value: "گلنواز", label: "گلنواز" },
  { value: "گلنوش", label: "گلنوش" },
  { value: "گلي", label: "گلي" },
  { value: "گودرز", label: "گودرز" },
  { value: "گوماتو", label: "گوماتو" },
  { value: "گهر چهر", label: "گهر چهر" },
  { value: "گوهر ناز", label: "گوهر ناز" },
  { value: "گيتي", label: "گيتي" },
  { value: "گيسو", label: "گيسو" },
  { value: "گيلدا", label: "گيلدا" },
  { value: "گيو", label: "گيو" },
  { value: "لادن", label: "لادن" },
  { value: "لاله", label: "لاله" },
  { value: "لاله رخ", label: "لاله رخ" },
  { value: "لاله دخت", label: "لاله دخت" },
  { value: "لبخند", label: "لبخند" },
  { value: "لقاء", label: "لقاء" },
  { value: "لومانا", label: "لومانا" },
  { value: "لهراسب", label: "لهراسب" },
  { value: "مارال", label: "مارال" },
  { value: "ماري", label: "ماري" },
  { value: "مازيار", label: "مازيار" },
  { value: "ماکان", label: "ماکان" },
  { value: "مامک", label: "مامک" },
  { value: "مانا", label: "مانا" },
  { value: "ماندانا", label: "ماندانا" },
  { value: "مانوش", label: "مانوش" },
  { value: "ماني", label: "ماني" },
  { value: "مانيا", label: "مانيا" },
  { value: "ماهان", label: "ماهان" },
  { value: "ماهاندخت", label: "ماهاندخت" },
  { value: "ماه برزين", label: "ماه برزين" },
  { value: "ماه جهان", label: "ماه جهان" },
  { value: "ماهچهر", label: "ماهچهر" },
  { value: "ماهدخت", label: "ماهدخت" },
  { value: "ماهور", label: "ماهور" },
  { value: "ماهرخ", label: "ماهرخ" },
  { value: "ماهزاد", label: "ماهزاد" },
  { value: "مردآويز", label: "مردآويز" },
  { value: "مرداس", label: "مرداس" },
  { value: "مرزبان", label: "مرزبان" },
  { value: "مرمر", label: "مرمر" },
  { value: "مزدک", label: "مزدک" },
  { value: "مژده", label: "مژده" },
  { value: "مژگان", label: "مژگان" },
  { value: "مستان", label: "مستان" },
  { value: "مستانه", label: "مستانه" },
  { value: "مشکاندخت", label: "مشکاندخت" },
  { value: "مشکناز", label: "مشکناز" },
  { value: "مشکين دخت", label: "مشکين دخت" },
  { value: "منيژه", label: "منيژه" },
  { value: "منوچهر", label: "منوچهر" },
  { value: "مهبانو", label: "مهبانو" },
  { value: "مهبد", label: "مهبد" },
  { value: "مه داد", label: "مه داد" },
  { value: "مهتاب", label: "مهتاب" },
  { value: "مهديس", label: "مهديس" },
  { value: "مه جبين", label: "مه جبين" },
  { value: "مه دخت", label: "مه دخت" },
  { value: "مهر آذر", label: "مهر آذر" },
  { value: "مهر آرا", label: "مهر آرا" },
  { value: "مهر آسا", label: "مهر آسا" },
  { value: "مهر آفاق", label: "مهر آفاق" },
  { value: "مهر افرين", label: "مهر افرين" },
  { value: "مهرآب", label: "مهرآب" },
  { value: "مهرداد", label: "مهرداد" },
  { value: "مهر افزون", label: "مهر افزون" },
  { value: "مهرام", label: "مهرام" },
  { value: "مهران", label: "مهران" },
  { value: "مهراندخت", label: "مهراندخت" },
  { value: "مهرانديش", label: "مهرانديش" },
  { value: "مهرانفر", label: "مهرانفر" },
  { value: "مهرانگيز", label: "مهرانگيز" },
  { value: "مهرداد", label: "مهرداد" },
  { value: "مهر دخت", label: "مهر دخت" },
  { value: "مهرزاده", label: "مهرزاده" },
  { value: "مهرناز", label: "مهرناز" },
  { value: "مهرنوش", label: "مهرنوش" },
  { value: "مهرنکار", label: "مهرنکار" },
  { value: "مهرنيا", label: "مهرنيا" },
  { value: "مهروز", label: "مهروز" },
  { value: "مهري", label: "مهري" },
  { value: "مهريار", label: "مهريار" },
  { value: "مهسا", label: "مهسا" },
  { value: "مهستي", label: "مهستي" },
  { value: "مه سيما", label: "مه سيما" },
  { value: "مهشاد", label: "مهشاد" },
  { value: "مهشيد", label: "مهشيد" },
  { value: "مهنام", label: "مهنام" },
  { value: "مهناز", label: "مهناز" },
  { value: "مهنوش", label: "مهنوش" },
  { value: "مهوش", label: "مهوش" },
  { value: "مهيار", label: "مهيار" },
  { value: "مهين", label: "مهين" },
  { value: "مهين دخت", label: "مهين دخت" },
  { value: "ميترا", label: "ميترا" },
  { value: "ميخک", label: "ميخک" },
  { value: "مينا", label: "مينا" },
  { value: "مينا دخت", label: "مينا دخت" },
  { value: "مينو", label: "مينو" },
  { value: "مينودخت", label: "مينودخت" },
  { value: "مينو فر", label: "مينو فر" },
  { value: "نادر", label: "نادر" },
  { value: "ناز آفرين", label: "ناز آفرين" },
  { value: "نازبانو", label: "نازبانو" },
  { value: "نازپرور", label: "نازپرور" },
  { value: "نازچهر", label: "نازچهر" },
  { value: "نازفر", label: "نازفر" },
  { value: "نازلي", label: "نازلي" },
  { value: "نازي", label: "نازي" },
  { value: "نازيدخت", label: "نازيدخت" },
  { value: "نامور", label: "نامور" },
  { value: "ناهيد", label: "ناهيد" },
  { value: "ندا", label: "ندا" },
  { value: "نرسي", label: "نرسي" },
  { value: "نرگس", label: "نرگس" },
  { value: "نرمک", label: "نرمک" },
  { value: "نرمين", label: "نرمين" },
  { value: "نريمان", label: "نريمان" },
  { value: "نسترن", label: "نسترن" },
  { value: "نسرين", label: "نسرين" },
  { value: "نسرين دخت", label: "نسرين دخت" },
  { value: "نسرين نوش", label: "نسرين نوش" },
  { value: "نکيسا", label: "نکيسا" },
  { value: "نگار", label: "نگار" },
  { value: "نگاره", label: "نگاره" },
  { value: "نگارين", label: "نگارين" },
  { value: "نگين", label: "نگين" },
  { value: "نوا", label: "نوا" },
  { value: "نوش ( انوش )", label: "نوش ( انوش )" },
  { value: "نوش آذر", label: "نوش آذر" },
  { value: "نوش آور", label: "نوش آور" },
  { value: "نوشا", label: "نوشا" },
  { value: "نوش آفرين", label: "نوش آفرين" },
  { value: "نوشدخت", label: "نوشدخت" },
  { value: "نوشروان ( انوشيروان )", label: "نوشروان ( انوشيروان )" },
  { value: "نوشفر", label: "نوشفر" },
  { value: "نوشناز", label: "نوشناز" },
  { value: "نوشين", label: "نوشين" },
  { value: "نويد", label: "نويد" },
  { value: "نوين", label: "نوين" },
  { value: "نوين دخت", label: "نوين دخت" },
  { value: "نيش ا", label: "نيش ا" },
  { value: "نيک بين", label: "نيک بين" },
  { value: "نيک پي", label: "نيک پي" },
  { value: "نيک چهر", label: "نيک چهر" },
  { value: "نيک خواه", label: "نيک خواه" },
  { value: "نيکداد", label: "نيکداد" },
  { value: "نيکدخت", label: "نيکدخت" },
  { value: "نيکدل", label: "نيکدل" },
  { value: "نيکزاد", label: "نيکزاد" },
  { value: "نيلوفر", label: "نيلوفر" },
  { value: "نيما", label: "نيما" },
  { value: "وامق", label: "وامق" },
  { value: "ورجاوند", label: "ورجاوند" },
  { value: "وريا", label: "وريا" },
  { value: "وشمگير", label: "وشمگير" },
  { value: "وهرز", label: "وهرز" },
  { value: "وهسودان", label: "وهسودان" },
  { value: "ويدا", label: "ويدا" },
  { value: "ويس", label: "ويس" },
  { value: "ويشتاسب", label: "ويشتاسب" },
  { value: "ويگن", label: "ويگن" },
  { value: "هژير", label: "هژير" },
  { value: "هخامنش", label: "هخامنش" },
  { value: "هربد( هيربد )", label: "هربد( هيربد )" },
  { value: "هرمز", label: "هرمز" },
  { value: "همايون", label: "همايون" },
  { value: "هما", label: "هما" },
  { value: "همادخت", label: "همادخت" },
  { value: "همدم", label: "همدم" },
  { value: "همراز", label: "همراز" },
  { value: "همراه", label: "همراه" },
  { value: "هنگامه", label: "هنگامه" },
  { value: "هوتن", label: "هوتن" },
  { value: "هور", label: "هور" },
  { value: "هورتاش", label: "هورتاش" },
  { value: "هورچهر", label: "هورچهر" },
  { value: "هورداد", label: "هورداد" },
  { value: "هوردخت", label: "هوردخت" },
  { value: "هورزاد", label: "هورزاد" },
  { value: "هورمند", label: "هورمند" },
  { value: "هوروش", label: "هوروش" },
  { value: "هوشنگ", label: "هوشنگ" },
  { value: "هوشيار", label: "هوشيار" },
  { value: "هومان", label: "هومان" },
  { value: "هومن", label: "هومن" },
  { value: "هونام", label: "هونام" },
  { value: "هويدا", label: "هويدا" },
  { value: "هيتاسب", label: "هيتاسب" },
  { value: "هيرمند", label: "هيرمند" },
  { value: "هيما", label: "هيما" },
  { value: "هيوا", label: "هيوا" },
  { value: "يادگار", label: "يادگار" },
  { value: "ياسمن ( ياسمين )", label: "ياسمن ( ياسمين )" },
  { value: "ياشار", label: "ياشار" },
  { value: "ياور", label: "ياور" },
  { value: "يزدان", label: "يزدان" },
  { value: "يگانه", label: "يگانه" },
  { value: "يوشيتا", label: "يوشيتا" }
] as OptionCoreData[];
// export const options = [
//   { value: "آبان دخت", label: "آبان دخت" },
//   { value: "آبتين", label: "آبتين" },
//   { value: "آتوسا", label: "آتوسا" },
//   { value: "آفر", label: "آفر" },
//   { value: "آفره دخت", label: "آفره دخت" },
//   { value: "نامور", label: "نامور" },
//   { value: "ناهيد", label: "ناهيد" },
//   { value: "ندا", label: "ندا" },
//   { value: "نرسي", label: "نرسي" },
//   { value: "نرگس", label: "نرگس" },
//   { value: "نرمک", label: "نرمک" },
//   { value: "نرمين", label: "نرمين" },
//   { value: "نريمان", label: "نريمان" },
//   { value: "نسترن", label: "نسترن" },
//   { value: "نسرين", label: "نسرين" },
//   { value: "نسرين دخت", label: "نسرين دخت" },
//   { value: "نسرين نوش", label: "نسرين نوش" },
//   { value: "نکيسا", label: "نکيسا" },
//   { value: "نگار", label: "نگار" },
//   { value: "نگاره", label: "نگاره" },
//   { value: "نگارين", label: "نگارين" },
//   { value: "نگين", label: "نگين" },
//   { value: "نوا", label: "نوا" },
//   { value: "نوش ( انوش )", label: "نوش ( انوش )" }
// ] as OptionCoreData[];

const Select = () => {
  const [value, setValue] = useState("");

  const handleChange = (...args) => console.log(args);

  const loadOptions = (inputValue, callback) =>
    setTimeout(
      () =>
        callback(
          empty(inputValue)
            ? options
            : options.filter(
                opt =>
                  (opt.label as string).search(inputValue) !== -1 || (opt.value as string).search(inputValue) !== -1
              )
        ),
      1000
    );

  const loadOptionsPaginate = async (inputValue, loadedOptions, additional) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      options: empty(inputValue)
        ? options
        : options.filter(
            opt => (opt.label as string).search(inputValue) !== -1 || (opt.value as string).search(inputValue) !== -1
          ),
      hasMore: false
    };
  };

  return (
    <div className="">
      <Typography variant="heading7">Normal:</Typography>
      <SBTSelect
        defaultMenuIsOpen
        type="default"
        name="jobs"
        placeholder="انتخاب کنید..."
        label="مشاغل"
        // error
        options={options}
        onChange={handleChange}
      />

      <div className="flex">
        <div className="w-full">
          <Typography variant="heading7" className="mt-3">
            Searchable:
          </Typography>
          <SBTSelect
            defaultMenuIsOpen
            type="default"
            name="jobs"
            placeholder="انتخاب کنید..."
            label="مشاغل"
            options={options}
            onChange={handleChange}
            searchable
          />
        </div>
        <div className="w-full mr-3">
          <Typography variant="heading7" className="mt-3">
            Searchable & multi:
          </Typography>
          <SBTSelect
            defaultMenuIsOpen
            type="default"
            name="jobs2"
            placeholder="انتخاب کنید..."
            label="مشاغل"
            options={options}
            onChange={handleChange}
            searchable
            multi
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-full">
          <Typography variant="heading7" className="mt-3">
            Creatable:
          </Typography>
          <SBTSelect
            defaultMenuIsOpen
            name="jobs3"
            placeholder="انتخاب کنید..."
            label="مشاغل"
            options={options}
            onChange={handleChange}
            type="creatable"
          />
        </div>
        <div className="w-full mr-3">
          <Typography variant="heading7" className="mt-3">
            Creatable & Multi:
          </Typography>
          <SBTSelect
            defaultMenuIsOpen
            name="jobs3"
            placeholder="انتخاب کنید..."
            label="مشاغل"
            options={options}
            onChange={handleChange}
            type="creatable"
            multi
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-full">
          <Typography variant="heading7" className="mt-3">
            Async:
          </Typography>
          <SBTSelect
            defaultMenuIsOpen
            name="jobs3"
            placeholder="انتخاب کنید..."
            label="مشاغل"
            defaultOptions
            onChange={handleChange}
            loadOptions={loadOptions}
            type="async"
          />
        </div>
        <div className="w-full mr-3">
          <Typography variant="heading7" className="mt-3">
            Async & Multi:
          </Typography>
          <SBTSelect
            defaultMenuIsOpen
            name="jobs3"
            placeholder="انتخاب کنید..."
            label="مشاغل"
            defaultOptions
            onChange={handleChange}
            loadOptions={loadOptions}
            type="async"
            multi
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-full">
          <Typography variant="heading7" className="mt-3">
            AsyncCreatable:
          </Typography>
          <SBTSelect
            defaultMenuIsOpen
            name="jobs3"
            placeholder="انتخاب کنید..."
            label="مشاغل"
            defaultOptions
            onChange={handleChange}
            loadOptions={loadOptions}
            type="asyncCreatable"
          />
        </div>
        <div className="w-full mr-3">
          <Typography variant="heading7" className="mt-3">
            AsyncCreatable & Multi:
          </Typography>
          <SBTSelect
            defaultMenuIsOpen
            name="jobs3"
            placeholder="انتخاب کنید..."
            label="مشاغل"
            defaultOptions
            onChange={handleChange}
            loadOptions={loadOptions}
            type="asyncCreatable"
            multi
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-full">
          <Typography variant="heading7" className="mt-3">
            AsyncPaginate:
          </Typography>
          <SBTSelect
            defaultMenuIsOpen
            name="jobs3"
            placeholder="انتخاب کنید..."
            label="مشاغل"
            defaultOptions
            onChange={handleChange}
            loadOptions={loadOptionsPaginate}
            type="asyncPaginate"
          />
        </div>
        <div className="w-full mr-3">
          <Typography variant="heading7" className="mt-3">
            AsyncPaginate & Multi:
          </Typography>
          <SBTSelect
            defaultMenuIsOpen
            name="jobs3"
            placeholder="انتخاب کنید..."
            label="مشاغل"
            defaultOptions
            onChange={handleChange}
            loadOptions={loadOptionsPaginate}
            type="asyncPaginate"
            multi
          />
        </div>
      </div>
    </div>
  );
};

export default Select;
