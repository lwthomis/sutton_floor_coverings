import React from 'react'
import Layout from '../layout'
import bathOne from '../images/work/bath_tile1.png'
import bathTwo from '../images/work/bath_tile2.png'
import ctOne from '../images/work/com_ct1.png'
import ctTwo from '../images/work/com_ct2.png'
import ctVpOne from '../images/work/com_vp-ct.png'
import lvtOne from '../images/work/com_lvt1.png'
import lvtTwo from '../images/work/com_lvt2.png'
import lvtThree from '../images/work/com_lvt3.png'
import vpOne from '../images/work/com_vp1.png'
import vpTwo from '../images/work/com_vp2.png'
import resHwOne from '../images/work/res_hw1.png'
import resTileOne from '../images/work/res_tile1.png'





function Showcase() {
  return (
    <Layout>
    <div className='showcase-wrapper'>
      <div className='showcase-imgs-wrapper'>
        <div className='showcase-img-wrapper'>
          <img src={bathOne} alt='bathroom tile' />
        </div>
        <div className='showcase-img-wrapper'>
          <img src={lvtThree} alt='living tile' />
        </div>
        <div className='showcase-img-wrapper'>
          <img src={bathTwo} alt='bathroom tile' />
        </div>
        <div className='showcase-img-wrapper'>
          <img src={ctOne} alt='commercial tile' />
        </div>
        <div className='showcase-img-wrapper'>
          <img src={ctTwo} alt='commercial tile' />
        </div>
        <div className='showcase-img-wrapper'>
          <img src={ctVpOne} alt='commercial tile' />
        </div>
        <div className='showcase-img-wrapper'>
          <img src={lvtOne} alt='living tile' />
        </div>
        <div className='showcase-img-wrapper'>
          <img src={lvtTwo} alt='living tile' />
        </div>

        <div className='showcase-img-wrapper'>
          <img src={vpOne} alt='living tile' />
        </div>
        <div className='showcase-img-wrapper'>
          <img src={vpTwo} alt='living tile' />
        </div>
        <div className='showcase-img-wrapper'>
          <img src={resHwOne} alt='living tile' />
        </div>
        <div className='showcase-img-wrapper'>
          <img src={resTileOne} alt='living tile' />
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Showcase