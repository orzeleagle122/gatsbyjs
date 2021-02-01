import React from "react"
import GlobalStyles from "../assets/styles/GlobalStyles";

import Nagivation from "../components/Navigation/Navigation";


const MainLayout = ({children}) => (
  <>
    <GlobalStyles/>
    <Nagivation/>
    {children}
  </>
)

export default MainLayout;
