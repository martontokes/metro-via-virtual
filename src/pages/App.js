import React, { useState } from 'react';

import WelcomeScreen from 'pages/WelcomeScreen/WelcomeScreen';
import Site from 'pages/Site/Site';

export default function App() {

  const [isWelcomeScreenOn, toggleWelcomeScreen] = useState(true);
  const [language, setLanguage] = useState('');
  const [activePage, setActivePage] = useState('');

  // Remove activePage //

  const site = { language, setLanguage, activePage, setActivePage, toggleWelcomeScreen };

  return (

    <>

      { isWelcomeScreenOn ? <WelcomeScreen site={site} /> : <Site site={site} /> }
      
    </>

  )

}