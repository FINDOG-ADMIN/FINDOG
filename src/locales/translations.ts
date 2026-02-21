import type { Locale } from "./languages";

export const EN_TRANSLATIONS = {
  "site.title": "FINDOG.NET",
  "site.description": "10 seconds to bring a friend back home.",
  "header.language": "Language",
  "language.searchPlaceholder": "Search languages…",
  "language.noResults": "No matches",
  "home.tagline": "10 seconds to bring a friend back home.",
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
    "site.description": "10 sekundi da vratite prijatelja kući.",
    "home.tagline": "10 sekundi da vratite prijatelja kući.",
    "home.foundButton": "NAŠAO/LA SAM PSA",
    "home.registerButton": "Registruj ljubimca",
    "footer.freeRegistry": "Besplatan međunarodni registar bezbednosti",
  },

  ru: {
    "site.description": "10 секунд, чтобы вернуть друга домой.",
    "home.tagline": "10 секунд, чтобы вернуть друга домой.",
    "home.foundButton": "Я НАШЕЛ СОБАКУ",
    "home.registerButton": "Зарегистрировать питомца",
    "footer.freeRegistry": "Бесплатный международный реестр безопасности",
  },

  es: {
    "site.description": "10 segundos para traer a un amigo de vuelta a casa.",
    "home.tagline": "10 segundos para traer a un amigo de vuelta a casa.",
    "home.foundButton": "ENCONTRÉ UN PERRO",
    "home.registerButton": "Registrar mascota",
    "footer.freeRegistry": "Registro internacional de seguridad gratuito",
  },

  fr: {
    "site.description": "10 secondes pour ramener un ami à la maison.",
    "home.tagline": "10 secondes pour ramener un ami à la maison.",
    "home.foundButton": "J'AI TROUVÉ UN CHIEN",
    "home.registerButton": "Enregistrer un animal",
    "footer.freeRegistry": "Registre international de sécurité gratuit",
  },

  de: {
    "site.description": "10 Sekunden, um einen Freund nach Hause zu bringen.",
    "home.tagline": "10 Sekunden, um einen Freund nach Hause zu bringen.",
    "home.foundButton": "HUND GEFUNDEN",
    "home.registerButton": "Haustier registrieren",
    "footer.freeRegistry": "Kostenloses internationales Sicherheitsregister",
  },

  it: {
    "site.description": "10 secondi per riportare un amico a casa.",
    "home.tagline": "10 secondi per riportare un amico a casa.",
    "home.foundButton": "HO TROVATO UN CANE",
    "home.registerButton": "Registra un animale",
    "footer.freeRegistry": "Registro internazionale di sicurezza gratuito",
  },

  tr: {
    "site.description": "Bir dostu eve getirmek için 10 saniye.",
    "home.tagline": "Bir dostu eve getirmek için 10 saniye.",
    "home.foundButton": "BİR KÖPEK BULDUM",
    "home.registerButton": "Evcil hayvan kaydet",
    "footer.freeRegistry": "Ücretsiz uluslararası güvenlik kaydı",
  },

  uk: {
    "site.description": "10 секунд, щоб повернути друга додому.",
    "home.tagline": "10 секунд, щоб повернути друга додому.",
    "home.foundButton": "Я ЗНАЙШОВ СОБАКУ",
    "home.registerButton": "Зареєструвати тварину",
    "footer.freeRegistry": "Безкоштовний міжнародний реєстр безпеки",
  },

  ar: {
    "site.description": "10 ثوانٍ لإعادة صديق إلى منزله.",
    "home.tagline": "10 ثوانٍ لإعادة صديق إلى منزله.",
    "home.foundButton": "لقد وجدت كلباً",
    "home.registerButton": "تسجيل حيوان أليف",
    "footer.freeRegistry": "سجل سلامة دولي مجاني",
  },

  zh: {
    "site.description": "10 秒钟带朋友回家。",
    "home.tagline": "10 秒钟带朋友回家。",
    "home.foundButton": "我找到了一只狗",
    "home.registerButton": "注册宠物",
    "footer.freeRegistry": "免费国际安全登记处",
  },

  hi: {
    "site.description": "एक दोस्त को घर वापस लाने के लिए 10 सेकंड।",
    "home.tagline": "एक दोस्त को घर वापस लाने के लिए 10 सेकंड।",
    "home.foundButton": "मुझे एक कुत्ता मिला है",
    "home.registerButton": "पालतू जानवर का पंजीकरण करें",
    "footer.freeRegistry": "मुफ्त अंतरराष्ट्रीय सुरक्षा रजिस्ट्री",
  },

  pl: {
    "site.description": "10 sekund, aby sprowadzić przyjaciela do domu.",
    "home.tagline": "10 sekund, aby sprowadzić przyjaciela do domu.",
    "home.foundButton": "ZNALAZŁEM PSA",
    "home.registerButton": "Zarejestruj zwierzaka",
    "footer.freeRegistry": "Bezpłatny międzynarodowy rejestr bezpieczeństwa",
  },

  sq: {
    "site.description": "10 sekonda për të kthyer një mik në shtëpi.",
    "home.tagline": "10 sekonda për të kthyer një mik në shtëpi.",
    "home.foundButton": "GJETA NJË QEN",
    "home.registerButton": "Regjistro kafshën",
    "footer.freeRegistry": "Regjistri ndërkombëtar i sigurisë falas",
  },

  hy: {
    "site.description": "10 վայրկյան ընկերոջը տուն վերադարձնելու համար:",
    "home.tagline": "10 վայրկյան ընկերոջը տուն վերադարձնելու համար:",
    "home.foundButton": "ԵՍ ՇՈՒՆ ԵՄ ԳՏԵԼ",
    "home.registerButton": "Գրանցել ընտանի կենդանուն",
    "footer.freeRegistry": "Անվտանգության անվճար միջազգային ռեեստր",
  },

  ka: {
    "site.description": "10 წამი მეგობრის სახლში დასაბრუნებლად.",
    "home.tagline": "10 წამი მეგობრის სახლში დასაბრუნებლად.",
    "home.foundButton": "ვიპოვე ძაღლი",
    "home.registerButton": "შინაური ცხოველის რეგისტრაცია",
    "footer.freeRegistry": "უსაფრთხოების უფასო საერთაშორისო რეესტრი",
  },

  kk: {
    "site.description": "Досыңызды үйге қайтару үшін 10 секунд.",
    "home.tagline": "Досыңызды үйге қайтару үшін 10 секунд.",
    "home.foundButton": "ИТ ТАПТЫМ",
    "home.registerButton": "Үй жануарын тіркеу",
    "footer.freeRegistry": "Тегін халықаралық қауіպсіздік тізілімі",
  },

  uz: {
    "site.description": "Do'stingizni uyga qaytarish uchun 10 soniya.",
    "home.tagline": "Do'stingizni uyga qaytarish uchun 10 soniya.",
    "home.foundButton": "IT TOPDIM",
    "home.registerButton": "Uy hayvonini ro'yxatdan o'tkazish",
    "footer.freeRegistry": "Bepul xalqaro xavfsizlik reyestri",
  },

  tg: {
    "site.description": "10 сония барои баргардонидани дӯст ба хона.",
    "home.tagline": "10 сония барои баргардонидани дӯст ба хона.",
    "home.foundButton": "МАН САГ ЁФТАМ",
    "home.registerButton": "Бақайдгирии ҳайвони хонагӣ",
    "footer.freeRegistry": "Феҳристи байналмилалии амнияти ройгон",
  },

  he: {
    "site.description": "10 שניות להחזיר חבר הביתה.",
    "home.tagline": "10 שניות להחזיר חבר הביתה.",
    "home.foundButton": "מצאתי כלב",
    "home.registerButton": "רישום חיית מחמד",
    "footer.freeRegistry": "מרשם בטיחות בינלאומי חינם",
  },

  ja: {
    "site.description": "友達を家に連れて帰るまで10秒。",
    "home.tagline": "友達を家に連れて帰るまで10秒。",
    "home.foundButton": "犬を見つけました",
    "home.registerButton": "ペットを登録する",
    "footer.freeRegistry": "無料の国際安全登録所",
  },

  ko: {
    "site.description": "친구를 집으로 데려오는 데 10초.",
    "home.tagline": "친구를 집으로 데려오는 데 10초.",
    "home.foundButton": "강아지를 찾았습니다",
    "home.registerButton": "반려동물 등록",
    "footer.freeRegistry": "무료 국제 안전 등록부",
  },

  vi: {
    "site.description": "10 giây để đưa người bạn về nhà.",
    "home.tagline": "10 giây để đưa người bạn về nhà.",
    "home.foundButton": "TÔI TÌM THẤY MỘT CHÚ CHÓ",
    "home.registerButton": "Đăng ký thú cưng",
    "footer.freeRegistry": "Sổ đăng ký an toàn quốc tế miễn phí",
  },

  id: {
    "site.description": "10 detik untuk membawa teman pulang.",
    "home.tagline": "10 detik untuk membawa teman pulang.",
    "home.foundButton": "SAYA MENEMUKAN ANJING",
    "home.registerButton": "Daftarkan hewan peliharaan",
    "footer.freeRegistry": "Pendaftaran keamanan internasional gratis",
  },

  th: {
    "site.description": "10 วินาทีในการพาสุนัขกลับบ้าน",
    "home.tagline": "10 วินาทีในการพาสุนัขกลับบ้าน",
    "home.foundButton": "ฉันพบสุนัข",
    "home.registerButton": "ลงทะเบียนสัตว์เลี้ยง",
    "footer.freeRegistry": "ทะเบียนความปลอดภัยระหว่างประเทศฟรี",
  },
  az: {
    "site.description": "Dostunuzu evə qaytarmaq üçün 10 saniyə.",
    "home.tagline": "Dostunuzu evə qaytarmaq üçün 10 saniyə.",
    "home.foundButton": "İT TAPMIŞAM",
    "home.registerButton": "Heyvanı qeydiyyatdan keçir",
    "footer.freeRegistry": "Pulsuz beynəlxalq təhlükəsizlik reyestri",
  },
  be: {
    "site.description": "10 секунд, каб вярнуць сябра дадому.",
    "home.tagline": "10 секунд, каб вярнуць сябра дадому.",
    "home.foundButton": "Я ЗНАЙШОЎ САБАКУ",
    "home.registerButton": "Зарэгістраваць гадаванца",
    "footer.freeRegistry": "Бясплатны міжнародны рэестр бяспекі",
  },
  fi: {
    "site.description": "10 sekuntia ystävän tuomiseksi kotiin.",
    "home.tagline": "10 sekuntia ystävän tuomiseksi kotiin.",
    "home.foundButton": "LÖYSIN KOIRAN",
    "home.registerButton": "Rekisteröi lemmikki",
    "footer.freeRegistry": "Ilmainen kansainvälinen turvarekisteri",
  },
  sv: {
    "site.description": "10 sekunder för att ta hem en vän.",
    "home.tagline": "10 sekunder för att ta hem en vän.",
    "home.foundButton": "JAG HAR HITTAT EN HUND",
    "home.registerButton": "Registrera husdjur",
    "footer.freeRegistry": "Gratis internationellt säkerhetsregister",
  },
  no: {
    "site.description": "10 sekunder for å bringe en venn hjem.",
    "home.tagline": "10 sekunder for å bringe en venn hjem.",
    "home.foundButton": "JEG HAR FUNNET EN HUND",
    "home.registerButton": "Registrer kjæledyr",
    "footer.freeRegistry": "Gratis internasjonalt sikkerhetsregister",
  },
  da: {
    "site.description": "10 sekunder til at bringe en ven hjem.",
    "home.tagline": "10 sekunder til at bringe en ven hjem.",
    "home.foundButton": "JEG HAR FUNDET EN HUND",
    "home.registerButton": "Registrer kæledyr",
    "footer.freeRegistry": "Gratis internationalt sikkerhedsregister",
  },
  nl: {
    "site.description": "10 seconden om een vriend weer thuis te brengen.",
    "home.tagline": "10 seconden om een vriend weer thuis te brengen.",
    "home.foundButton": "IK HEB EEN HOND GEVONDEN",
    "home.registerButton": "Huisdier registreren",
    "footer.freeRegistry": "Gratis internationaal veiligheidsregister",
  },
  hu: {
    "site.description": "10 másodperc, hogy hazahozz egy barátot.",
    "home.tagline": "10 másodperc, hogy hazahozz egy barátot.",
    "home.foundButton": "TALÁLTAM EGY KUTYÁT",
    "home.registerButton": "Kedvenc regisztrálása",
    "footer.freeRegistry": "Ingyenes nemzetközi biztonsági nyilvántartás",
  },
  ro: {
    "site.description": "10 secunde pentru a aduce un prieten înapoi acasă.",
    "home.tagline": "10 secunde pentru a aduce un prieten înapoi acasă.",
    "home.foundButton": "AM GĂSIT UN CÂINE",
    "home.registerButton": "Înregistrează un animal",
    "footer.freeRegistry": "Registru internațional de siguranță gratuit",
  },
  lt: {
    "site.description": "10 sekundžių sugrąžinti draugą namo.",
    "home.tagline": "10 sekundžių sugrąžinti draugą namo.",
    "home.foundButton": "RADAU ŠUNĮ",
    "home.registerButton": "Registruoti augintinį",
    "footer.freeRegistry": "Nemokamas tarptautinis saugos registras",
  },
  lv: {
    "site.description": "10 sekundes, lai atgrieztu draugu mājās.",
    "home.tagline": "10 sekundes, lai atgrieztu draugu mājās.",
    "home.foundButton": "ES ATRODU SUNĪTI",
    "home.registerButton": "Reģistrēt mājdzīvnieku",
    "footer.freeRegistry": "Bezmaksas starptautiskais drošības reģistrs",
  },
  et: {
    "site.description": "10 sekundit sõbra koju toomiseks.",
    "home.tagline": "10 sekundit sõbra koju toomiseks.",
    "home.foundButton": "LEIDSIN KOERA",
    "home.registerButton": "Registreeri lemmikloom",
    "footer.freeRegistry": "Tasuta rahvusvaheline ohutusregister",
  },eu: {
    "site.description": "10 segundo lagun bat etxera itzultzeko.",
    "home.tagline": "10 segundo lagun bat etxera itzultzeko.",
    "home.foundButton": "TXAKUR BAT AURKITU DUT",
    "home.registerButton": "Erregistratu maskota",
    "footer.freeRegistry": "Nazioarteko segurtasun erregistro doakoa",
  },
  bg: {
    "site.description": "10 секунди, за да върнете приятел у дома.",
    "home.tagline": "10 секунди, за да върнете приятел у дома.",
    "home.foundButton": "НАМЕРИХ КУЧЕ",
    "home.registerButton": "Регистрирай любимец",
    "footer.freeRegistry": "Безплатен международен регистър за безопасност",
  },
  ca: {
    "site.description": "10 segons per tornar un amic a casa.",
    "home.tagline": "10 segons per tornar un amic a casa.",
    "home.foundButton": "HE TROBAT UN GOS",
    "home.registerButton": "Registrar mascota",
    "footer.freeRegistry": "Registre internacional de seguretat gratuït",
  },
  cs: {
    "site.description": "10 sekund na návrat přítele domů.",
    "home.tagline": "10 sekund na návrat přítele domů.",
    "home.foundButton": "NAŠEL JSEM PSA",
    "home.registerButton": "Registrovat mazlíčka",
    "footer.freeRegistry": "Bezplatný mezinárodní bezpečnostní registr",
  },
    pt: {
    "site.description": "10 segundos para trazer um amigo de volta a casa.",
    "home.tagline": "10 segundos para trazer um amigo de volta a casa.",
    "home.foundButton": "ENCONTREI UM CÃO",
    "home.registerButton": "Registar animal",
    "footer.freeRegistry": "Registo internacional de segurança gratuito",
  },
  el: {
    "site.description": "10 δευτερόλεπτα για να φέρετε έναν φίλο πίσω στο σπίτι.",
    "home.tagline": "10 δευτερόλεπτα για να φέρετε έναν φίλο πίσω στο σπίτι.",
    "home.foundButton": "ΒΡΗΚΑ ΕΝΑΝ ΣΚΥΛΟ",
    "home.registerButton": "Καταχώρηση κατοικιδίου",
    "footer.freeRegistry": "Δωρεάν διεθνές μητρώο ασφαλείας",
  },
  is: {
    "site.description": "10 sekúnd til að koma vini aftur heim.",
    "home.tagline": "10 sekúnd til að koma vini aftur heim.",
    "home.foundButton": "ÉG FANN HUND",
    "home.registerButton": "Skrá gæludýr",
    "footer.freeRegistry": "Ókeypis alþjóðleg öryggisskrá",
  },
  mk: {
    "site.description": "10 секунди за враќање на пријателот дома.",
    "home.tagline": "10 секунди за враќање на пријателот дома.",
    "home.foundButton": "НАЈДОВ КУЧЕ",
    "home.registerButton": "Регистрирај миленик",
    "footer.freeRegistry": "Бесплатен меѓународен регистар за безбедност",
  },
  mo: {
    "site.description": "10 secunde pentru a aduce un prieten înapoi acasă.",
    "home.tagline": "10 secunde pentru a aduce un prieten înapoi acasă.",
    "home.foundButton": "AM GĂSIT UN CÂINE",
    "home.registerButton": "Înregistrează un animal",
    "footer.freeRegistry": "Registru internațional de siguranță gratuit",
  },
  sk: {
    "site.description": "10 sekúnd na návrat priateľa domov.",
    "home.tagline": "10 sekúnd na návrat priateľa domov.",
    "home.foundButton": "NAŠIEL SOM PSA",
    "home.registerButton": "Registrovať domáce zviera",
    "footer.freeRegistry": "Bezplatný medzinárodný bezpečnostný register",
  },
  sw: {
    "site.description": "Sekunde 10 kumrudisha rafiki nyumbani.",
    "home.tagline": "Sekunde 10 kumrudisha rafiki nyumbani.",
    "home.foundButton": "NIMEPATA MBWA",
    "home.registerButton": "Sajili mnyama",
    "footer.freeRegistry": "Sajili ya usalama ya kimataifa ya bure",
  },
  ms: {
    "site.description": "10 saat untuk membawa pulang rakan.",
    "home.tagline": "10 saat untuk membawa pulang rakan.",
    "home.foundButton": "SAYA JUMPA ANJING",
    "home.registerButton": "Daftar haiwan peliharaan",
    "footer.freeRegistry": "Pendaftaran keselamatan antarabangsa percuma",
  },
  mn: {
    "site.description": "Найзыгаа гэрт нь авчрахад 10 секунд.",
    "home.tagline": "Найзыгаа гэрт нь авчрахад 10 секунд.",
    "home.foundButton": "БИ НОХОЙ ОЛЛОО",
    "home.registerButton": "Гэрийн тэжээвэр амьтан бүртгэх",
    "footer.freeRegistry": "Олон улсын аюулгүй байдлын үнэ төлбөргүй бүртгэл",
  },
  zu: {
    "site.description": "Imizuzwana eyi-10 ukubuyisela umngane ekhaya.",
    "home.tagline": "Imizuzwana eyi-10 ukubuyisela umngane ekhaya.",
    "home.foundButton": "NGITHOLE INJA",
    "home.registerButton": "Bhalisa isilwane",
    "footer.freeRegistry": "Irejista yokuphepha yomhlaba wonke yamahhala",
  },
  am: {
    "site.description": "ጓደኛን ወደ ቤት ለመመለስ 10 ሰከንድ።",
    "home.tagline": "ጓደኛን ወደ ቤት ለመመለስ 10 ሰከንድ።",
    "home.foundButton": "ውሻ አግኝቻለሁ",
    "home.registerButton": "የቤት እንስሳ ይመዝገቡ",
    "footer.freeRegistry": "ነፃ ዓለም አቀፍ የደህንነት መዝገብ",
  },
  lo: {
    "site.description": "10 ວິນາທີເພື່ອພາເພື່ອນກັບບ້ານ.",
    "home.tagline": "10 ວິນາທີເພື່ອພາເພື່ອນກັບບ້ານ.",
    "home.foundButton": "ຂ້ອຍພົບໝາ",
    "home.registerButton": "ລົງທະບຽນສັດລ້ຽງ",
    "footer.freeRegistry": "ທະບຽນຄວາມປອດໄພສາກົນຟຣີ",
  },
  km: {
    "site.description": "10 វិនាទីដើម្បីនាំមិត្តភក្តិត្រឡប់មកផ្ទះវិញ។",
    "home.tagline": "10 វិនាទីเพื่อនាំមិត្តភក្តិត្រឡប់មកផ្ទះវិញ។",
    "home.foundButton": "ខ្ញុំបានរកឃើញឆ្កែមួយ",
    "home.registerButton": "ចុះឈ្មោះសត្វចិញ្ចឹម",
    "footer.freeRegistry": "បញ្ជីសុវត្ថិភាពអន្តរជាតិឥតគិតថ្លៃ",
  },tl: {
    "site.description": "10 segundo upang iuwi ang isang kaibigan.",
    "home.tagline": "10 segundo upang iuwi ang isang kaibigan.",
    "home.foundButton": "NAKAHANAP AKO NG ASO",
    "home.registerButton": "Ihistro ang alagang hayop",
    "footer.freeRegistry": "Libreng pandaigdigang rehistro ng kaligtasan",
  },
  my: {
    "site.description": "သူငယ်ချင်းတစ်ယောက်ကို အိမ်ပြန်ပို့ဖို့ ၁၀ စက္ကန့်။",
    "home.tagline": "သူငယ်ချင်းတစ်ယောက်ကို အိမ်ပြန်ပို့ဖို့ ၁၀ စက္ကန့်။",
    "home.foundButton": "ကျွန်ုပ် ခွေးတစ်ကောင်တွေ့ပြီ",
    "home.registerButton": "အိမ်မွေးတိရစ္ဆာန် မှတ်ပုံတင်ရန်",
    "footer.freeRegistry": "အခမဲ့ အပြည်ပြည်ဆိုင်ရာ ဘေးကင်းလုံခြုံရေး မှတ်ပုံတင်ဌာန",
  },
  ne: {
    "site.description": "साथीलाई घर फिर्ता ल्याउन १० सेकेन्ड।",
    "home.tagline": "साथीलाई घर फिर्ता ल्याउन १० सेकेन्ड।",
    "home.foundButton": "मैले कुकुर फेला पारें",
    "home.registerButton": "घरपालुवा जनावर दर्ता गर्नुहोस्",
    "footer.freeRegistry": "नि: शुल्क अन्तर्राष्ट्रिय सुरक्षा रजिस्ट्री",
  },
  te: {
    "site.description": "ఒక స్నేహితుడిని ఇంటికి తీసుకురావడానికి 10 సెకన్లు.",
    "home.tagline": "ఒక స్నేహితుడిని ఇంటికి తీసుకురావడానికి 10 సెకన్లు.",
    "home.foundButton": "నాకు కుక్క దొరికింది",
    "home.registerButton": "పెంపుడు జంతువును నమోదు చేయండి",
    "footer.freeRegistry": "ఉచిత అంతర్జాతీయ భద్రతా రిజిస్ట్రీ",
  },
  mg: {
    "site.description": "10 segondra hitondrana namana hody.",
    "home.tagline": "10 segondra hitondrana namana hody.",
    "home.foundButton": "NAHITA ALIKA AHO",
    "home.registerButton": "Misoratra anarana biby fiompy",
    "footer.freeRegistry": "Fisoratana anarana iraisam-pirenena momba ny fiarovana maimaim-poana",
  },fa: {
    "site.description": "۱۰ ثانیه برای بازگرداندن یک دوست به خانه.",
    "home.tagline": "۱۰ ثانیه برای بازگرداندن یک دوست به خانه.",
    "home.foundButton": "من یک سگ پیدا کردم",
    "home.registerButton": "ثبت نام حیوان خانگی",
    "footer.freeRegistry": "ثبت بین‌المللی ایمنی رایگان",
  },
  ky: {
    "site.description": "Досуңузду үйгө кайтаруу үчүн 10 секунд.",
    "home.tagline": "Досуңузду үйгө кайтаруу үчүн 10 секунд.",
    "home.foundButton": "ИТ ТАПТЫМ",
    "home.registerButton": "Үй жануарын каттоо",
    "footer.freeRegistry": "Акысыз эл аралык коопсуздук реестри",
  },
  tk: {
    "site.description": "Dostuňyzy öýüne gaýtarmak üçin 10 sekunt.",
    "home.tagline": "Dostuňyzy öýüne gaýtarmak üçin 10 sekunt.",
    "home.foundButton": "IT TAPDYM",
    "home.registerButton": "Öý haýwanyny каттоо",
    "footer.freeRegistry": "Mugt halkara howpsuzlyk reýestri",
  },
    jv: {
    "site.description": "10 detik kanggo nggawa kanca bali menyang omah.",
    "home.tagline": "10 detik kanggo nggawa kanca bali menyang omah.",
    "home.foundButton": "AKU NEMU ASU",
    "home.registerButton": "Daftar kewan",
    "footer.freeRegistry": "Pendaftaran keamanan internasional gratis",
  },};