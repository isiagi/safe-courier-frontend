import React, {useEffect} from 'react'
import { Link} from 'react-router-dom'
import photo from '../images/1.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Nav from '../Navbar/Navbar'
import './Home.css'

function Home() {
    const sty = {padding:'15px', backgroundColor: '#150E56', color:'#fff', borderRadius: "5px"}
const link = {textDecoration: 'none',
    color: '#fff'}

    const admin = JSON.stringify({adminEmail:'admin@mail.com', adminPassword: "admin1234"})

    useEffect(() => {
        return alert(admin)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
        <Nav />
           <div className='home__container'>
            <div className="text_section">
                
                <Carousel autoPlay showStatus={false} infiniteLoop interval={5000} showIndicators={false}>
                <div>
                <h3 style={{fontSize: '40px', color: '#1597BB'}}>Welcome to Safe Courier</h3>
                <h5 style={{fontSize: '20px', color: '#8FD6E1'}}>We are the leading and most trusted company in moving Parcels</h5>

                </div>
                <div>
                <h3 style={{fontSize: '35px', color: '#1597BB'}}>Login to start moving your Parcels</h3>
                <button style={sty}><Link to='/login' style={link}>Get Started</Link></button>     
                </div>
            </Carousel>
            </div>
            <div className="img_section">
                <img src={photo} alt="parcel" />
            </div>
           </div> 
        </>
    )
}

export default Home
