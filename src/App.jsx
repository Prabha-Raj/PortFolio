import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSec from "./Components/HeroSec";
import AboutSec from "./Components/AboutSec";
import Card from "./Components/WhatIDoSec";
import ResumeSec from "./Components/ResumeSec";
import SkillsSec from "./Components/SkillsSec";
import HireMeSec from "./Components/HireMeSec";
import FAQsSec from "./Components/FAQsSec";
import ReviewSec from "./Components/ReviewSec";
import ContactSec from "./Components/ContactSec";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
export default function App() {
  const  [bgColor, setBgColor] = useState("white")
  const  [textColor, setTextColor] = useState("black")
  useEffect(()=>{

  })
  
  return (
    <>
    <Navbar setBgColor={setBgColor} bgColor={bgColor} setTextColor={setTextColor} textColor={textColor}/>
    <HeroSec/>
    <AboutSec/>
    <Card/>
    <ResumeSec/>
    <SkillsSec/>
    <HireMeSec/>  
    <FAQsSec/>
    <ReviewSec/>
    <ContactSec/>
    <Footer/>
    </>
  )
}