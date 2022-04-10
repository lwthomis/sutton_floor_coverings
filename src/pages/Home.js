import React from 'react'
import Layout from '../layout'
import bgImage from '../images/bgImage.png';

function Home() {
  return (
    <Layout>
    <div className='homepage-wrapper' 
      style={{ 
        backgroundImage:`url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' 
      }}>
      <div className='banner-text-wrapper' >
        <div className='banner-text'>
          <div className='banner-header'>
            <div className='headline' >Paducah's Local Flooring Installer</div>
            <div className='intro'>
              Specializing in Commercial &amp; Residential Flooring Installation Since 2005
            </div>

          </div>
          <div className='banner-request'>
            <div className='request-button'>
              <a>Check out our <br></br>favorite installs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Home