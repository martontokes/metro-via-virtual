export default function Logo({site}) {

  return (

    <>

      {site.language === 'english' ? (

        <>
          <div id="headerTextContainer">


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