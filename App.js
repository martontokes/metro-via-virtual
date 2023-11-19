import { React, useState, useEffect } from 'react';

import WelcomeScreen from '@/WelcomeScreen';
import Exhibition from '@/Exhibition';


export default function App() {

  const [isWelcomeScreenOn, toggleWelcomeScreen] = useState(true);
  const [language, setLanguage] = useState('');
  const [activePage, setActivePage] = useState(0);

  const site = {language, setLanguage, activePage, setActivePage, toggleWelcomeScreen};

  return (

    <>

      { isWelcomeScreenOn ? <WelcomeScreen site={site} /> : <Exhibition site={site} /> }

    </>
    
  );

}
