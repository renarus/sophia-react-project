import React from 'react'
const Home = () => {
  return (
    <div className='home'>
        <div className="home-first">
            <div className="circle">
              <div className="home-text">
              <h4>Sophia</h4><br />
                <h3>The Power Of Nature</h3><hr/>
                <a href="https://www.wix.com/demone2/cosmetic-oils/hair-and-skin">Shop Now </a>
              </div>
            </div>
        </div>
        <div className="home-second">
          <div className="boxes container">
          <div className="boxfirstandtwo">
          <div className="boxes-first">
          <div className="big-box">
          <div className="little-box">
            <h3>All Natural & Organic <br />
                Skin & Hair Care</h3>
                <hr style={{'width':'50px','color':'white'}} />
                <a href="">Read More</a>
          </div>
          </div>
          </div>
          <div className="box-two">
            <div className="circle-2">
              <h5>BEAUTY BOOST</h5>
            </div>
            <img src="https://static.wixstatic.com/media/9c608a_101857fd102445c0969db2482a8f27f1.jpg/v1/fill/w_319,h_387,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9c608a_101857fd102445c0969db2482a8f27f1.jpg" alt="" />
            <h6>Treat yourself to the luxury of nature</h6>
            <a href="">Shop All Skincare</a>
          </div>
          </div>
          <div className="box-circle-3">
          <div className="box-three-big">
          <div className="box-three">
            <img src="https://static.wixstatic.com/media/9c608a_a67bbfe88000419ea0aa0260b3954abc.jpg/v1/fill/w_347,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9c608a_a67bbfe88000419ea0aa0260b3954abc.jpg" alt="" />
            <h3>NEW WINTER FRAGRANCES</h3>
            <h6>cinnamon, spice and everything nice</h6>
            <a href="">Stock Up Now </a>
          </div>
          </div>
          <div className="circle-3">
            <h3>FREE <br /> SHOPPING</h3> <hr style={{'width':'50px','color':'white'}} />
            <h5>All orders <br /> $25 or more</h5>
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Home