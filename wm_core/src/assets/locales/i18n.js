import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//import LanguageDetector from "i18next-browser-languagedetector"

// ruta a los archivos de idiomas
import common_en from "./en/translation.json";
import common_es from "./es/translation.json";
import common_fr from "./fr/translation.json";

const resources = {
  en: {
    translation: common_en,
  },
  es: {
    translation: common_es,
  },
  fr: {
    translation: common_fr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
