import React from 'react'
import nice from '../images/nice.jpeg'
import test from '../images/test.jpeg'
import welcome from '../images/welcome.jpeg'
import FadeTransition from './fade'

function NewsUpdates() {
  return (
    <div className='news'>
        <div className='newshead'>
            <p>NEWS AND UPDATES</p>
            <h3>Company News and Updates</h3>
        </div>
        <div className='news-col'>
            <div className='news-col-1'>
                {/* <FadeTransition> */}
                <img src={test}></img>
                {/* </FadeTransition> */}
                <FadeTransition>
                <h2>Otic Education Suite</h2>
                <p>
                The automation of school reporting systems through the utilization of
                 technology plays a pivotal role in enhancing efficiency, accuracy, and overall effectiveness.
                  In today's rapidly evolving educational landscape, the importance of streamlined and automated processes
                 cannot be overstated. OTIC Education Suite levarages technoology to digitize school operations
                </p>
                <i><strong>BY NESTA KATENDE 5 JANUARY 2021</strong></i>
                </FadeTransition>
            </div>
            <div className='news-col-2'>
                {/* <FadeTransition> */}
                <img src={nice}></img>
                {/* </FadeTransition> */}
                <FadeTransition>
                <h2>Otic Banking Suite</h2>
                <p>
                Automated banking systems enable faster transactions,
                 secure online banking, real-time data analysis, and personalized services.
                  The integration of technology empowers banks to meet the evolving needs of
                   customers, drive innovation, and stay competitive in the dynamic financial landscape.
                </p>
                <i><strong>BY NESTA KATENDE 5 JANUARY 2021</strong></i>
                </FadeTransition>
         
            </div>
            <div className='news-col-3'>
                {/* <FadeTransition> */}
                <img src={welcome}></img>
                {/* </FadeTransition> */}
                <FadeTransition>
                <h2>Otic Insurance Suite</h2>
                <p>
                By leveraging advanced algorithms and data analytics, technology enhances
                 risk assessment and fraud detection capabilities. Automation also facilitates
                  personalized customerexperiences, streamlined communication,
                   and faster claims settlement.
                </p>
                <i><strong>BY NESTA KATENDE 5 JANUARY 2021</strong></i>
                </FadeTransition>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default NewsUpdates