import es from "@i18n/es.json";
import en from "@i18n/en.json";

const translations = { es, en };
type Locale = keyof typeof translations;

export function useTranslate(locale: Locale) {
    return function t(key: keyof (typeof translations)[Locale]) {
        return translations[locale][key] ?? key;
    };
}
