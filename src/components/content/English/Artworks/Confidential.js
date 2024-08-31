import { useEffect } from "react"

export default function Confidential({incrementLoad}) {

  return (

    <>

      <div className="contentContainer">
        <h3>Confidential Records: <br />Dual Metropolitans (2016 - 2018)</h3>
        <div className="artistsBox">
          <h4>Vvzela Kook</h4>
          <a href="https://www.vvzela.co" target="_blank">www.vvzela.co</a>
        </div>
        </div>
   
        <div id="confidentialContainer">
        <p>Confidential Records: Dual Metropolitans utilizes 3D animation to reconstruct the cyberspace of Kowloon Walled City and imagine what it would be like in the future governed by artificial intelligence.<br /><br />In reality, as an enclave inside Hong Kong during British colonization, Kowloon Walled City developed into a huge and comprehensive urban system.<br /><br />Ungoverned and outlandish, it has long served as an inspiration for cyberpunk-themed artworks.<br /><br />Kook’s project combines history, myth, and sci-fi narratives with digital media to dig into the aesthetics and architecture of dystopia.
        <br /><br />Vvzela Kook is a new media artist who mainly works in audiovisual mediums, including performance, theater, generative art and drawing.<br /><br />Kook’s works combine technology with her artistic practice to reproduce and convert urban cityscapes into an integrated virtual experience, guiding the audience on a cybernetic journey.<br /><br />Kook has participated and shown her works in Kathmandu Triennial, MoCA Taipei, Microwave International Media Festival (Hong Kong), PuSh Performing Art Festival (Vancouver), and Mill6 Foundation (Hong Kong).</p>

        </div>  
        {(true) ? <iframe id="confidentialiframe"
          src="https://player.vimeo.com/video/297653544?h=4ccbbb86fe"
          width={"100%"}
          onLoad={() => {incrementLoad(n => n + 1);}}
          frameBorder={0}
          webkitallowfullscreen
          allowfullscreen
          allowFullScreen={true}/> : null }
          <p>You may need to visit Vimeo to watch the video on fullpage on some devices.</p>
  </>
  )
}
