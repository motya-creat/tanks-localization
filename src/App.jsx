import { useTranslation } from 'react-i18next'
import './App.css';
import { Tank } from './tanks';


function App() {

  const { i18n, t } = useTranslation("header", "about")

  const handleChangeLanguage = async () => {
    try {
      const newLanguage = i18n.language === 'ru' ? 'en' : 'ru'
      await i18n.changeLanguage(newLanguage)
    }catch(err) {
      console.log(`Произошла ошибка в смене языка: ${err}`)
    }
  }

  return (
    <>
      <div className="container">
        <h1>{t("header.title")}</h1>
            <div className="main-description">
                {t("header.description")}
            </div>
            <div className="change-language">
                <button onClick={handleChangeLanguage}>{t("changeLang")}</button>
            </div>
      </div>
        <Tank />
    </>
  )
}
export default App
