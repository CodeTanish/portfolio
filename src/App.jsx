import Content from "./Component/Content"
import Intro from "./Component/Intro"
import Navbar from "./Component/Navbar"
import Skill from "./Component/Skill"
import ContactUs from "./Component/ContactUs"

function App() {

  return (
    <>
      <Navbar/>
      
        <Content/>
        <Intro />
        <Skill />
        <ContactUs/>
    </>
  )
}

export default App
