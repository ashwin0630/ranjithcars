import React from 'react'
import Hero from './Hero'
import Content from './Content'
import Fotter from './Fotter'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <Hero/>
        <Content/>
        <Fotter/>
    </div>
        
    
  )
}

export default Home