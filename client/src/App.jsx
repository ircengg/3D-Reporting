import Table from './UI/Table'
import Layout from './UI/Layout'

import { useEffect, useState } from "react";
import { RecoilRoot, useRecoilState } from "recoil"

import { alertState, appState, waitLoaderState } from "./Recoil/atom";


function AppInit() {
  const [options, setOptions] = useRecoilState(appState);
  const [loader, setLoader] = useRecoilState(waitLoaderState);
  const [alert_, setAlert] = useRecoilState(alertState);



  if (process.env.NODE_ENV === 'development') {
    console.log('Happy developing!');
  }

  return (    
    <Layout />
  )
}





function App() {
  return (
    <RecoilRoot>
      <AppInit />
    </RecoilRoot>
  )
}

export default App


