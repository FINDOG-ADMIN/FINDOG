import type { Locale } from "./languages";

export const EN_TRANSLATIONS = {
  "site.title": "FINDOG.NET",
  "site.description": "",
  "header.language": "Language",
  "language.searchPlaceholder": "Search languages…",
  "language.noResults": "No matches",
  "home.tagline": "",
  "home.foundButton": "I FOUND A DOG",
  "home.registerButton": "Register a pet",
  "footer.freeRegistry": "Free international safety registry",
  "footer.version": "v.0.1.0 Beta • Novi Sad Edition 🇷🇸",
  "found.title": "Found a dog",
  "register.title": "Register a pet",
  "contact.title": "Contact",
} as const;

export type TranslationKey = keyof typeof EN_TRANSLATIONS;
export type Translations = Partial<Record<TranslationKey, string>>;

export const TRANSLATIONS: Record<string, Translations> = {
  en: EN_TRANSLATIONS,

  "sr-Latn": {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "NAŠAO/LA SAM PSA",
    "home.registerButton": "Registruj ljubimca",
    "footer.freeRegistry": "Besplatan međunarodni registar bezbednosti",
  },

  ru: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "Я НАШЕЛ СОБАКУ",
    "home.registerButton": "Зарегистрировать питомца",
    "footer.freeRegistry": "Бесплатный международный реестр безопасности",
  },

  es: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "ENCONTRÉ UN PERRO",
    "home.registerButton": "Registrar mascota",
    "footer.freeRegistry": "Registro internacional de seguridad gratuito",
  },

  fr: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "J'AI TROUVÉ UN CHIEN",
    "home.registerButton": "Enregistrer un animal",
    "footer.freeRegistry": "Registre international de sécurité gratuit",
  },

  de: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "HUND GEFUNDEN",
    "home.registerButton": "Haustier registrieren",
    "footer.freeRegistry": "Kostenloses internationales Sicherheitsregister",
  },

  it: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "HO TROVATO UN CANE",
    "home.registerButton": "Registra un animale",
    "footer.freeRegistry": "Registro internazionale di sicurezza gratuito",
  },

  tr: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "BİR KÖPEK BULDUM",
    "home.registerButton": "Evcil hayvan kaydet",
    "footer.freeRegistry": "Ücretsiz uluslararası güvenlik kaydı",
  },

  uk: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "Я ЗНАЙШОВ СОБАКУ",
    "home.registerButton": "Зареєструвати тварину",
    "footer.freeRegistry": "Безкоштовний міжнародний реєстр безпеки",
  },

  ar: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "لقد وجدت كلباً",
    "home.registerButton": "تسجيل حيوان أليف",
    "footer.freeRegistry": "سجل سلامة دولي مجاني",
  },

  zh: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "我找到了一只狗",
    "home.registerButton": "注册宠物",
    "footer.freeRegistry": "免费国际安全登记处",
  },

  hi: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "मुझे एक कुत्ता मिला है",
    "home.registerButton": "पालतू जानवर का पंजीकरण करें",
    "footer.freeRegistry": "मुफ्त अंतरराष्ट्रीय सुरक्षा रजिस्ट्री",
  },

  pl: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "ZNALAZŁEM PSA",
    "home.registerButton": "Zarejestruj zwierzaka",
    "footer.freeRegistry": "Bezpłatny międzynarodowy rejestr bezpieczeństwa",
  },

  sq: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "GJETA NJË QEN",
    "home.registerButton": "Regjistro kafshën",
    "footer.freeRegistry": "Regjistri ndërkombëtar i sigurisë falas",
  },

  hy: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "ԵՍ ՇՈՒՆ ԵՄ ԳՏԵԼ",
    "home.registerButton": "Գրանցել ընտանի կենդանուն",
    "footer.freeRegistry": "Անվտանգության անվճար միջազգային ռեեստր",
  },

  ka: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "ვიპოვე ძაღლი",
    "home.registerButton": "შინაური ცხოველის რეგისტრაცია",
    "footer.freeRegistry": "უსაფრთხოების უფასო საერთაშორისო რეესტრი",
  },

  kk: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "ИТ ТАПТЫМ",
    "home.registerButton": "Үй жануарын тіркеу",
    "footer.freeRegistry": "Тегін халықаралық қауіпсіздік тізілімі",
  },

  uz: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "IT TOPDIM",
    "home.registerButton": "Uy hayvonini ro'yxatdan o'tkazish",
    "footer.freeRegistry": "Bepul xalqaro xavfsizlik reyestri",
  },

  tg: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "МАН САГ ЁФТАМ",
    "home.registerButton": "Бақайдгирии ҳайвони хонагӣ",
    "footer.freeRegistry": "Феҳристи байналмилалии амнияти ройгон",
  },

  he: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "מצאתי כלב",
    "home.registerButton": "רישום חיית מחמד",
    "footer.freeRegistry": "מרשם בטיחות בינלאומי חינם",
  },

  ja: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "犬を見つけました",
    "home.registerButton": "ペットを登録する",
    "footer.freeRegistry": "無料の国際安全登録所",
  },

  ko: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "강아지를 찾았습니다",
    "home.registerButton": "반려동물 등록",
    "footer.freeRegistry": "무료 국제 안전 등록부",
  },

  vi: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "TÔI TÌM THẤY MỘT CHÚ CHÓ",
    "home.registerButton": "Đăng ký thú cưng",
    "footer.freeRegistry": "Sổ đăng ký an toàn quốc tế miễn phí",
  },

  id: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "SAYA MENEMUKAN ANJING",
    "home.registerButton": "Daftarkan hewan peliharaan",
    "footer.freeRegistry": "Pendaftaran keamanan internasional gratis",
  },

  th: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "ฉันพบสุนัข",
    "home.registerButton": "ลงทะเบียนสัตว์เลี้ยง",
    "footer.freeRegistry": "ทะเบียนความปลอดภัยระหว่างประเทศฟรี",
  },
  az: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "İT TAPMIŞAM",
    "home.registerButton": "Heyvanı qeydiyyatdan keçir",
    "footer.freeRegistry": "Pulsuz beynəlxalq təhlükəsizlik reyestri",
  },
  be: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "Я ЗНАЙШОЎ САБАКУ",
    "home.registerButton": "Зарэгістраваць гадаванца",
    "footer.freeRegistry": "Бясплатны міжнародны рэестр бяспекі",
  },
  fi: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "LÖYSIN KOIRAN",
    "home.registerButton": "Rekisteröi lemmikki",
    "footer.freeRegistry": "Ilmainen kansainvälinen turvarekisteri",
  },
  sv: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "JAG HAR HITTAT EN HUND",
    "home.registerButton": "Registrera husdjur",
    "footer.freeRegistry": "Gratis internationellt säkerhetsregister",
  },
  no: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "JEG HAR FUNNET EN HUND",
    "home.registerButton": "Registrer kjæledyr",
    "footer.freeRegistry": "Gratis internasjonalt sikkerhetsregister",
  },
  da: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "JEG HAR FUNDET EN HUND",
    "home.registerButton": "Registrer kæledyr",
    "footer.freeRegistry": "Gratis internationalt sikkerhedsregister",
  },
  nl: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "IK HEB EEN HOND GEVONDEN",
    "home.registerButton": "Huisdier registreren",
    "footer.freeRegistry": "Gratis internationaal veiligheidsregister",
  },
  hu: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "TALÁLTAM EGY KUTYÁT",
    "home.registerButton": "Kedvenc regisztrálása",
    "footer.freeRegistry": "Ingyenes nemzetközi biztonsági nyilvántartás",
  },
  ro: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "AM GĂSIT UN CÂINE",
    "home.registerButton": "Înregistrează un animal",
    "footer.freeRegistry": "Registru internațional de siguranță gratuit",
  },
  lt: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "RADAU ŠUNĮ",
    "home.registerButton": "Registruoti augintinį",
    "footer.freeRegistry": "Nemokamas tarptautinis saugos registras",
  },
  lv: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "ES ATRODU SUNĪTI",
    "home.registerButton": "Reģistrēt mājdzīvnieku",
    "footer.freeRegistry": "Bezmaksas starptautiskais drošības reģistrs",
  },
  et: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "LEIDSIN KOERA",
    "home.registerButton": "Registreeri lemmikloom",
    "footer.freeRegistry": "Tasuta rahvusvaheline ohutusregister",
  },eu: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "TXAKUR BAT AURKITU DUT",
    "home.registerButton": "Erregistratu maskota",
    "footer.freeRegistry": "Nazioarteko segurtasun erregistro doakoa",
  },
  bg: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "НАМЕРИХ КУЧЕ",
    "home.registerButton": "Регистрирай любимец",
    "footer.freeRegistry": "Безплатен международен регистър за безопасност",
  },
  ca: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "HE TROBAT UN GOS",
    "home.registerButton": "Registrar mascota",
    "footer.freeRegistry": "Registre internacional de seguretat gratuït",
  },
  cs: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "NAŠEL JSEM PSA",
    "home.registerButton": "Registrovat mazlíčka",
    "footer.freeRegistry": "Bezplatný mezinárodní bezpečnostní registr",
  },
    pt: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "ENCONTREI UM CÃO",
    "home.registerButton": "Registar animal",
    "footer.freeRegistry": "Registo internacional de segurança gratuito",
  },
  el: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "ΒΡΗΚΑ ΕΝΑΝ ΣΚΥΛΟ",
    "home.registerButton": "Καταχώρηση κατοικιδίου",
    "footer.freeRegistry": "Δωρεάν διεθνές μητρώο ασφαλείας",
  },
  is: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "ÉG FANN HUND",
    "home.registerButton": "Skrá gæludýr",
    "footer.freeRegistry": "Ókeypis alþjóðleg öryggisskrá",
  },
  mk: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "НАЈДОВ КУЧЕ",
    "home.registerButton": "Регистрирај миленик",
    "footer.freeRegistry": "Бесплатен меѓународен регистар за безбедност",
  },
  mo: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "AM GĂSIT UN CÂINE",
    "home.registerButton": "Înregistrează un animal",
    "footer.freeRegistry": "Registru internațional de siguranță gratuit",
  },
  sk: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "NAŠIEL SOM PSA",
    "home.registerButton": "Registrovať domáce zviera",
    "footer.freeRegistry": "Bezplatný medzinárodný bezpečnostný register",
  },
  sw: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "NIMEPATA MBWA",
    "home.registerButton": "Sajili mnyama",
    "footer.freeRegistry": "Sajili ya usalama ya kimataifa ya bure",
  },
  ms: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "SAYA JUMPA ANJING",
    "home.registerButton": "Daftar haiwan peliharaan",
    "footer.freeRegistry": "Pendaftaran keselamatan antarabangsa percuma",
  },
  mn: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "БИ НОХОЙ ОЛЛОО",
    "home.registerButton": "Гэрийн тэжээвэр амьтан бүртгэх",
    "footer.freeRegistry": "Олон улсын аюулгүй байдлын үнэ төлбөргүй бүртгэл",
  },
  zu: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "NGITHOLE INJA",
    "home.registerButton": "Bhalisa isilwane",
    "footer.freeRegistry": "Irejista yokuphepha yomhlaba wonke yamahhala",
  },
  am: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "ውሻ አግኝቻለሁ",
    "home.registerButton": "የቤት እንስሳ ይመዝገቡ",
    "footer.freeRegistry": "ነፃ ዓለም አቀፍ የደህንነት መዝገብ",
  },
  lo: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "ຂ້ອຍພົບໝາ",
    "home.registerButton": "ລົງທະບຽນສັດລ້ຽງ",
    "footer.freeRegistry": "ທະບຽນຄວາມປອດໄພສາກົນຟຣີ",
  },
  km: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "ខ្ញុំបានរកឃើញឆ្កែមួយ",
    "home.registerButton": "ចុះឈ្មោះសត្វចិញ្ចឹម",
    "footer.freeRegistry": "បញ្ជីសុវត្ថិភាពអន្តរជាតិឥតគិតថ្លៃ",
  },tl: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "NAKAHANAP AKO NG ASO",
    "home.registerButton": "Ihistro ang alagang hayop",
    "footer.freeRegistry": "Libreng pandaigdigang rehistro ng kaligtasan",
  },
  my: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "ကျွန်ုပ် ခွေးတစ်ကောင်တွေ့ပြီ",
    "home.registerButton": "အိမ်မွေးတိရစ္ဆာန် မှတ်ပုံတင်ရန်",
    "footer.freeRegistry": "အခမဲ့ အပြည်ပြည်ဆိုင်ရာ ဘေးကင်းလုံခြုံရေး မှတ်ပုံတင်ဌာန",
  },
  ne: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "मैले कुकुर फेला पारें",
    "home.registerButton": "घरपालुवा जनावर दर्ता गर्नुहोस्",
    "footer.freeRegistry": "नि: शुल्क अन्तर्राष्ट्रिय सुरक्षा रजिस्ट्री",
  },
  te: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "నాకు కుక్క దొరికింది",
    "home.registerButton": "పెంపుడు జంతువును నమోదు చేయండి",
    "footer.freeRegistry": "ఉచిత అంతర్జాతీయ భద్రతా రిజిస్ట్రీ",
  },
  mg: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "NAHITA ALIKA AHO",
    "home.registerButton": "Misoratra anarana biby fiompy",
    "footer.freeRegistry": "Fisoratana anarana iraisam-pirenena momba ny fiarovana maimaim-poana",
  },fa: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "من یک سگ پیدا کردم",
    "home.registerButton": "ثبت نام حیوان خانگی",
    "footer.freeRegistry": "ثبت بین‌المللی ایمنی رایگان",
  },
  ky: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "ИТ ТАПТЫМ",
    "home.registerButton": "Үй жануарын каттоо",
    "footer.freeRegistry": "Акысыз эл аралык коопсуздук реестри",
  },
  tk: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "IT TAPDYM",
    "home.registerButton": "Öý haýwanyny каттоо",
    "footer.freeRegistry": "Mugt halkara howpsuzlyk reýestri",
  },
    jv: {
    "site.description": "",
    "home.tagline": "",
    "home.foundButton": "AKU NEMU ASU",
    "home.registerButton": "Daftar kewan",
    "footer.freeRegistry": "Pendaftaran keamanan internasional gratis",
  },};