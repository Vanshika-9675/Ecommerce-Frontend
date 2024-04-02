import React from 'react'
import Products from '../components/Products'
import Navbar from '../components/Navbar'

function Home() {

  return (
    <div className='area'>
      <Navbar/>
       <section>
        <h3>Products</h3>
        <Products/>
       </section>
    </div>
  )
}

export default Home