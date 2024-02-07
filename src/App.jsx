import React from 'react'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import Page4 from './Components/Page4'
import Page5 from './Components/Page5'
import Page6 from './Components/Page6'
import Page7 from './Components/Page7'
import MobilePage1 from './Components/MobilePage1'
import './App.css'
import MobilePage2 from './Components/MobilePage2'
import MobilePage3 from './Components/MobilePage3'
import MobilePage4 from './Components/MobilePage4'
import { Element } from 'react-scroll';
import ScrollableContent from './Components/ScrollableContent'

const App = () => {
  return (
    <div >
      <div className="screenwidth1080">
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
      </div>
     <div className="screenwidth700">
      <ScrollableContent>
      <MobilePage1/>
      <MobilePage2/>
      <MobilePage3/>
      <MobilePage4/>
      </ScrollableContent>
     
     </div>
    </div>
  )
}

export default App
