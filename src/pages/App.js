import React, { useState } from 'react';

import WelcomeScreen from 'pages/WelcomeScreen/WelcomeScreen';
import Exhibition from 'pages/Exhibition/Exhibition';

export default function App() {

  const [isWelcomeScreenOn, toggleWelcomeScreen] = useState(true);
  const [language, setLanguage] = useState('');
  const [activePage, setActivePage] = useState(''); // string

  const site = { language, setLanguage, activePage, setActivePage, toggleWelcomeScreen };

  return (

    <>

      { isWelcomeScreenOn ? <WelcomeScreen site={site} /> : <Exhibition site={site} /> }

    </>

  )

}