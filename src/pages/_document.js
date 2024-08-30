import { Html, Head, Main, NextScript } from 'next/document'

import { useEffect } from 'react'

export default function Document() {

  return (

    <Html lang="en">
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>
<link
  rel="stylesheet"
  href="https://video-react.github.io/assets/video-react.css"
/>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script src="https://www.youtube.com/iframe_api"></script>





        <Head />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=yes"></meta>
        <title>metro via virtual</title>
        <Main />
        <NextScript />
    </Html>
    
  )
}
