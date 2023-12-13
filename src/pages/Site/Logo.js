export default function Logo({site}) {

  return (

    <>

      {site.language === 'english' ? (

        <>
          <div id="headerTextContainer">
            <h1 id="headerTitle" className="montserrat">metro via virtual</h1>
            <h2 id="headerSubtitle" className="noto">a virtual exhibition from Hong Kong</h2>
          </div>
        </>

      ) : (

        <>
          <div id="logoContainer">
            <h1 id="headerTitle" className="noto">虛擬都會</h1>
            <h2 id="headerSubtitle" className="noto">來自香港的線上展覽</h2>
          </div>
        </>

      )}

    </>
  );
}