import Loginfrom from 'pages/login/component/loginfrom';
import React from 'react';
import Header from 'shared/component/header';

export default function loginPage() {
  return (
    <div>
      <Header />
      <Loginfrom />
    </div>
  );
}
