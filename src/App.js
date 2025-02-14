import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Destinations from './components/Destinations'
import Search from './components/Search'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import CruiseCards from './components/CruiseCards'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carousel />
      <CruiseCards />
      <Destinations />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
