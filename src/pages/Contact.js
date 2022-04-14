import React from 'react'
import Layout from '../layout'

import contactImg from '../images/bgImage.png';

function Contact() {
  return (
    <Layout>
      <div className='contact-wrapper'>
        <div className='left-side-wrapper'>
          {/* <img src={contactImg} alt='sidebar image'/> */}
        </div>
        <div className='right-side-wrapper'>
          <div className='contact-wrapper'>
            <h1 className='contact-header'>Contact Me</h1>
            <div className='bullet'>(270) 508-0383</div>
            <div className='bullet'>matt@email.com</div>
            <div className='bullet'>Paducah, KY</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact