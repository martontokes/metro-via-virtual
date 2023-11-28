export default function LanguageButtons({ site }) {
  return (
    <>
      {site.language === 'english' ? (
        <>
          <button id="toChinese" className="languageButton noto" onClick={() => { site.setLanguage('chinese'); }}>廣東話</button>
        </>
      ) : (
        <>
          <button id="toEnglish" className="languageButton montserrat" onClick={() => { site.setLanguage('english'); }}>English</button>
        </>
      )}
    </>
  );
}
