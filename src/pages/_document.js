import { Html, Head, Main, NextScript } from 'next/document'

import { useEffect } from 'react'

export default function Document() {

// useEffect(() => {
//   const panorama = new PANOLENS.ImagePanorama( '@/public/butterflies/0104b/media/butterflies.mp4' );
// const viewer = new PANOLENS.Viewer();
// viewer.add( panorama );
// }, []);

  return (

    <Html lang="en">
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>






        <Head />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=yes"></meta>
        <meta name="color-scheme" content="light only"></meta>
        <title>metro via virtual</title>
        <Main />
        <NextScript />
        {/* <div id="bg"></div> */}
    </Html>
    
  )
}
