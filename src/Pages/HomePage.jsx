import React from 'react'
import SectionOne from '../Components/Sections/SectionOne'
import SectionTwo from '../Components/Sections/SectionTwo'
import SectionThree from '../Components/Sections/SectionThree'
import SectionFour from '../Components/Sections/SectionFour'
import SectionFive from '../Components/Sections/SectionFive'
import SectionSix from '../Components/Sections/SectionSix'
import SectionFooter from '../Components/Sections/SectionFooter'
import FooterSimple from '../Components/FooterSimple/FooterSimple'


const HomePage = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionFooter/>
      <FooterSimple/>
    </div>
  )
}

export default HomePage