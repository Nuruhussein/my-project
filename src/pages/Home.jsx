import React from 'react'
import Carddeal from '../components/Carddeal';
import Feauter from '../components/Feauter';

// import Header from '../components/Header';
import Hero from '../components/Hero';
import Latestblogs from '../components/Latestblogs';

import Review from '../components/Review';
import Landing from '../components/Landing';
function Home() {
  return (
    <div>
      <Landing/>
      {/* <Header/> */}
      <Hero/>
        <Latestblogs/>
      <Feauter/>
      <Carddeal/>
       <Review/>
       
    </div>
  )
}

export default Home
