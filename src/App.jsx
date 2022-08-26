import { useEffect, useState } from 'react';
import { slideContext } from './global/global-states';
import { FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Activities from './components/Activities';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import AOS from 'aos';

import './styles/App.scss'
import 'aos/dist/aos.css';

function App() {
	const carouselItems = [
		{
			title: 'LOCAL SEAFOOD RESTAURANT',
			source: './assets/kelong.jpg'
		},
		{
			title: 'GUNUNG BINTAN TREKKING',
			source: './assets/gunung-b.jpg'
		},
		{
			title: 'MANGROVE TOUR',
			source: './assets/hutan-m.jpg'
		},
		{
			title: 'LOHAN TEMPLE',
			source: './assets/lohan.jpg'
		},
		{
			title: 'BLUE LAKE AND BINTAN DESSERT',
			source: './assets/blue-lake.jpg'
		}
	]
	const [ currentSlide, setCurrentSlide ] = useState(0)
	const [ name, setName ] = useState('')
	const [ mobile, setMobile ] = useState('')
	const [ tujuan, setTujuan ] = useState('')
	const [ tanggal, setTanggal ] = useState('')
	const [ orang, setOrang ] = useState('')
	
	useEffect(() => {
		AOS.init()
	},[])
	const handleSubmit = () => {
		let templateWA = "===%20Booking%20===%0ANama:%20"+name+"%0ANo.Hp:%20"+mobile+"%0ATujuan:%20"+tujuan+"%0ATanggal:%20"+tanggal.toString()+"%0AJumlah%20Orang:%20"+orang.toString()
		console.log(templateWA)
		window.open("https://wa.me/+6281277327309?text="+templateWA)
	}
	
	return (
		<slideContext.Provider value={{ currentSlide, setCurrentSlide }}>
			<div className="navbar">
				<Navbar></Navbar>
			</div>
			<div className="content">
				<div className="landing">
					<div className="landing-bg">
						<div className="darken"></div>
						<img src={carouselItems[currentSlide].source} alt="" />
					</div>
					<div className="landing-content" data-aos='fade-up'>
						<div className="left">
							<h1>BINTAN</h1>
							<h2>Travel through Bintan with excitements!</h2>
							<a href="#activities" className='orange-btn'><h3>Explore {'>'}</h3></a>
						</div>
						<div className="right">
							<Carousel
								items={carouselItems}
							></Carousel>
						</div>
					</div>
				</div>
				<div className="activities" id="activities" >
					<h2 data-aos="fade-right">Bintan Activities</h2>
					<Activities></Activities>
				</div>
				<div className="booking" id="book">
					<div className="booking-content">
						<div className="booking-title" data-aos="fade-right">
							<div className="title">
								<h2>
									Travelling to <br/> Bintan ?
								</h2>
								<p>
									Book Now!
								</p>
							</div>
							<div className="contacts">
								<div className="contact">
									<div className="contact-bubble">
										<MdEmail className='icon'></MdEmail>
										<h3>Email</h3>
									</div>
									<p>sinagamrd6@gmail.com</p>
								</div>
								<div className="contact">
									<div className="contact-bubble">
										<FaWhatsapp className='icon'></FaWhatsapp>
										<h3>Whatsapp</h3>
									</div>
									<p>+62-812-7732-7309</p>
								</div>
							</div>
						</div>
						<div className="booking-part">
							<div data-aos='fade-up' className="car">
								<img src="assets/car.png" alt="" />
							</div>
							<div className="booking-form">
								<h2 data-aos='fade-right'>Booking</h2>
								<input data-aos='fade-right' type="text" placeholder='Nama' onChange={(e) => {setName(e.target.value)}}/>
								<input data-aos='fade-right' type="text" placeholder='No. Hp' onChange={(e) => {setMobile(e.target.value)}}/>
								<input data-aos='fade-right' type="text" placeholder='Lokasi Tujuan' onChange={(e) => {setTujuan(e.target.value)}}/>
								<input data-aos='fade-right' type="date" placeholder='Tanggal' onChange={(e) => {setTanggal(e.target.value)}}/>
								<input data-aos='fade-right' type="number" placeholder='Jumlah Orang' onChange={(e) => {setOrang(e.target.value)}}/>
								<h3 data-aos='fade-right' className='blue-btn' onClick={() => handleSubmit()}>Book via WA</h3>
							</div>
						</div>
					</div>
				</div>
				<div className='footer'>
					<p>Travel and Taxi Naga Bintan © 2022</p>
				</div>
			</div>
		</slideContext.Provider>
	);
}

export default App;
