import React from 'react';

import Header from '../../shared/component/header';
import Loginfrom from './component/loginfrom';

// import Unit from '../../hook/unit'

export default function loginPage() {
  //  const { getUnits, units } = Unit();

  return (
    <div>
      <Header />
      <Loginfrom />
    </div>
  );
}
