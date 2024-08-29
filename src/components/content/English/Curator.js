import { Scrollbars } from 'react-custom-scrollbars-2';

export default function Curator() {

  return (

    <>
       <Scrollbars style={{right: "8px"}}>
    <div id="artwork_page">

      <h3>About the Curator</h3>
      <p>Zeng Hong is an academic, curator and visual artist.<br />
      <a className="curatorEmail" style={{marginTop: '24px', fontSize: "14.76px"}} href="mailto:hong.zeng@yale.edu">hong.zeng@yale.edu</a><br></br><br></br>

      She is the Yale-China Arts Fellow in 2020, funded by the Council on East Asian Studies at Yale University.<br /><br />
      She received an M.A. in Cinema Studies and a Ph.D. in Visual Art Studies. <br /><br />Her research  interests lie in contemporary art in Hong Kong and the Pearl River Delta region in China, as well as gender politics in film. <br /><br />
      She published articles in refereed journals Continuum: Journal of Media and Cultural Studies, Journal of Visual Art Practice, and Asian Cinema. <br /><br />She curated exhibitions Hong Kong in Poor Images (United States, 2020) and Blown Away – Art, Science and Extreme Weather (Hong Kong, 2019). 
      Her art project focuses on the mechanism of identity politics and their elaboration through images and narratives. <br /><br />
      She previously taught classes in film and visual art at the School of Creative Media, City University of Hong Kong, and the Academy of Visual Arts, Hong Kong Baptist University. <br /><br />
      </p>
      
    </div>
    </Scrollbars>

    </>
      
  )

}