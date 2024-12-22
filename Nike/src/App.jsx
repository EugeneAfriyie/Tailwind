import Nav from "./Components/Nav"
import CustomerReviews from "./section/CustomerReviews"
import Footer from "./section/Footer"
import Hero from "./section/Hero"
import PopularProduct from "./section/PopularProduct"
import Services from "./section/Services"
import SpecialOffer from "./section/SpecialOffer"
import Subscribe from "./section/Subscribe"
import SuperQuality from "./section/SuperQuality"

const App = () => {
  return (
    <>
    <main className="relative">

      <Nav/>



      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero/>
      </section>
        


        <section className="padding">
          <PopularProduct/>
        </section>

        <section className="padding">
         <SuperQuality/>
        </section>

        <section className="padding-x py-10">
          <Services/>
        </section>

        <section className="padding">
          <SpecialOffer />
        </section>

        <section className="padding bg-pale-blue">
          <CustomerReviews  />
        </section>

        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe/>
        </section>

        <section className="padding bg-black padding-x padding-t pb-8">
         <Footer/>
        </section>

    </main>
    
    
    
    </>
  )
}

export default App