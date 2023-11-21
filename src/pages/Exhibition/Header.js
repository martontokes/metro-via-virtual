export default function Header({site}) {

  return (

    <>

      {site.language === 'english' ? (

        <>
          <div id="header">
            <h1 id="headerTitle" className="montserrat">metro via virtual</h1>
            <h2 id="headerSubtitle" className="montserrat">a virtual exhibition from Hong Kong</h2>
          </div>
        </>

      ) : (

        <>
          <div id="header">
            <h1 id="headerTitle" className="noto">虛擬都會</h1>
            <h2 id="headerSubtitle" className="noto">來自香港的線上展覽</h2>
          </div>
        </>

      )}

    </>
  );
}