import React from 'react'
import Banner from '../Core/Banner'
import Catagory from '../Core/Catagory'
import Women from '../Core/Women'
import WeekDeal from '../Core/WeekDeal'
import Men from '../Core/Men'
import Imggallery from '../Core/Imggallery'
import Blog from '../Core/Blog'

const Home = () => {
  return (
    <>
      <div class="scrollbar" id="style-6">
        <Banner />
        <Catagory />
        <Women />
        <WeekDeal />
        <Men />
        <Imggallery/>
        <Blog/>
      </div>
    </>
  )
}

export default Home
