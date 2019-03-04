import translation from './translations.json'

const language = localStorage.getItem("language") === "en" ? translation["en"] : 
                    localStorage.getItem("language") === "lt" ? translation["lt"] :
                    translation["ru"];

export default language;