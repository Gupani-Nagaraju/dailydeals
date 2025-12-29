import React from 'react'
import { mobileData } from '../../stores/data/mobiles'
import { computerData } from '../../stores/data/computers'
import { menData } from '../../stores/data/men'
import { womanData } from '../../stores/data/woman'
import { watchData } from '../../stores/data/watch'
import "./Categorygrid.css"

const Categorygrid = () => {
  return (
    <>
      <div className='Main-sectioncategory'>

        {/* Mobiles */}
        <div className='category'>
          <h2 className='category-title'>Mobiles</h2>
          <div className='mobiles-grid'>
            {mobileData.slice(0, 5).map((item, index) => (
              <div className='product-card' key={index}>
                <div className='imgbox'>
                  <img src={item.image} alt={item.name} className='pro-image' />
                </div>
                <h4 className='product-name'>company:{item.company}</h4>
                <p className='product-price'>price:₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Computers */}
        <div className='category'>
          <h2 className='category-title'>Computers</h2>
          <div className='mobiles-grid'>
            {computerData.slice(0, 5).map((item, index) => (
              <div className='product-card' key={index}>
                <div className='imgbox'>
                  <img src={item.image} alt={item.name} className='pro-image' />
                </div>
                <h4 className='product-name'>company:{item.company}</h4>
                <p className='product-price'>price:₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Men */}
        <div className='category'>
          <h2 className='category-title'>Men Collection</h2>
          <div className='mobiles-grid'>
            {menData.slice(0, 5).map((item, index) => (
              <div className='product-card' key={index}>
                <div className='imgbox'>
                  <img src={item.image} alt={item.name} className='pro-image' />
                </div>
                <h4 className='product-name'>{item.company}</h4>
                <p className='product-price'>price:₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Women */}
        <div className='category'>
          <h2 className='category-title'>Women Collection</h2>
          <div className='mobiles-grid'>
            {womanData.slice(0, 5).map((item, index) => (
              <div className='product-card' key={index}>
                <div className='imgbox'>
                  <img src={item.image} alt={item.name} className='pro-image' />
                </div>
                <h4 className='product-name'>{item.company}</h4>
                <p className='product-price'>price:₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Watches */}
        <div className='category'>
          <h2 className='category-title'>Watches</h2>
          <div className='mobiles-grid'>
            {watchData.slice(0, 5).map((item, index) => (
              <div className='product-card' key={index}>
                <div className='imgbox'>
                  <img src={item.image} alt={item.name} className='pro-image' />
                </div>
                <h4 className='product-name'>{item.company}</h4>
                <p className='product-price'> price:₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

export default Categorygrid
