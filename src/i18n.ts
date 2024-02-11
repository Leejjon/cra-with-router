import i18n from "i18next";
import {initReactI18next} from "react-i18next";

const locale = window.location.hostname.endsWith('mysite.nl') ? 'nl' : 'en';

export const resources = {
    en: {
        translation: {
            DESCRIPTION_ABOUT: "About us.",
            DESCRIPTION_HOME: "Home sweet home.",
            DESCRIPTION_NEWS: "The latest news.",
            LOADING: "Loading...",
            TITLE_ABOUT: "About",
            TITLE_HOME: "Home",
            TITLE_NEWS: "News",
        }
    },
    nl: {
        translation: {
            DESCRIPTION_ABOUT: "Over ons.",
            DESCRIPTION_HOME: "Fijn thuis.",
            DESCRIPTION_NEWS: "Het laatste niews.",
            LOADING: "Laden...",
            TITLE_ABOUT: "Over ons",
            TITLE_HOME: "Thuis",
            TITLE_NEWS: "News",
        }
    }
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: locale,
        returnNull: false,
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });
