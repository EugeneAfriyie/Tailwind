import { useState } from "react"
import AnimatedSection from "./Components/AnimatedSection"
import Nav from "./Components/Nav"
import CustomerReviews from "./section/CustomerReviews"
import Footer from "./section/Footer"
import Hero from "./section/Hero"
import PopularProduct from "./section/PopularProduct"
import Services from "./section/Services"
import SpecialOffer from "./section/SpecialOffer"
import Subscribe from "./section/Subscribe"
import SuperQuality from "./section/SuperQuality"
import { navLinks } from "./Constants"
import { headerLogo } from "./assets/images"

const App = () => {

  const [menuClicked,setmenuClicked] = useState(false)

  return (
    <>
    <main className="relative">

      <Nav menuClicked={menuClicked} setmenuClicked={setmenuClicked}/>


      <AnimatedSection>
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero/>
      </section>
      </AnimatedSection>

      <AnimatedSection>
      <section className="padding">
          <PopularProduct/>
        </section>
      </AnimatedSection>

      <AnimatedSection>
      <section className="padding">
         <SuperQuality/>
        </section>
      </AnimatedSection>

      <AnimatedSection>
      <section className="padding-x py-10">
          <Services/>
        </section>
      </AnimatedSection>
      
      <AnimatedSection>
      <section className="padding">
          <SpecialOffer />
        </section>
      </AnimatedSection>

      <AnimatedSection>
      <section className="padding bg-pale-blue">
          <CustomerReviews  />
        </section>
      </AnimatedSection>

      <AnimatedSection>
      <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe/>
        </section>
      </AnimatedSection>

      <AnimatedSection>
      <section className="padding bg-black padding-x padding-t pb-8">
         <Footer/>
        </section>
      </AnimatedSection>

    </main>
    
    <div className={`fixed top-0 xl:hidden bg-white w-[50%]  bottom-0 z-50
     ${menuClicked ? 'right-0': 'right-[-100%]'} transition-all duration-1000 ease-in-out mt-4
    `}>


      <div className="flex justify-between items-center px-4">
        <img src={headerLogo} alt="logo" className=""/>
        <button className="text-3xl"  onClick={() => setmenuClicked(false)}>x</button>
      </div>


      <ul className="flex flex-col justify-center items-start gap-0 mt-2  font-bold">

      {navLinks.map(({href,label}) => (

        <li className=" border-gray-900 w-full p-2 hover:bg-red-400 hover:text-white px-4 rounded-xl  text-slate-gray ">
          <a href={href} className="font-montserrat text-2xl    ">{label}</a>
        </li>
      ))}
  
      </ul>
    </div>

    <div className={`fixed backdrop-blur-sm 0 top-0 left-0 right-0 bottom-0 z-49 ${!menuClicked ? 'hidden' :''}`} onClick={() => setmenuClicked(false)}></div>


    
    </>
  )
}

export default App