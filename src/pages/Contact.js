import React from 'react'
import Layout from '../layout'

import contactImg from '../images/bgImage.png';

function Contact() {
  return (
    <Layout>
      <div className='contact-wrapper'>
        <div className='left-side-wrapper'>
          <img src={contactImg} alt='sidebar image'/>
        </div>
        <div className='right-side-wrapper'>
          <div className='contact-wrapper'>
            <div className='contact-header'>Contact Me</div>
            <div className='contact-phone'>(270) 508-0383</div>
            <div className='contact-email'>matt@email.com</div>
            <div className='contact-address'>Paducah, KY</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact