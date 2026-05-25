import React from "react";
import Homelandpage from "./components/homelandpage";
import HomeaboutPgae from "./components/homeaboutPgae";
import Homeservicepage from "./components/homeservicepage";
import Homeprojectpage from "./components/homeprojectpage";
import Hometrustpage from "./components/hometrustpage";
import Homedetailpage from "./components/homedetailpage";



export default function Contact() {
  return (
    <main>
      <div className=""><Homelandpage /></div>
      <div><HomeaboutPgae /></div>
      <div><Homeservicepage /></div>
      <div><Homeprojectpage /></div>
      <div><Hometrustpage /></div>
      <div><Homedetailpage /></div>
      
    </main>
  )
}