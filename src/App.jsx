import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import './styles/App.scss'

function App() {
	const carouselItems = [
		{
			title: 'LOCAL SEAFOOD RESTAURANT',
			source: './assets/kelong.jpg'
		},
		{
			title: 'LOCAL SEAFOOD RESTAURANT',
			source: './assets/kelong.jpg'
		},
		{
			title: 'LOCAL SEAFOOD RESTAURANT',
			source: './assets/kelong.jpg'
		},
		{
			title: 'LOCAL SEAFOOD RESTAURANT',
			source: './assets/kelong.jpg'
		},
		{
			title: 'LOCAL SEAFOOD RESTAURANT',
			source: './assets/kelong.jpg'
		},
	]
	return (
		<>
			<div className="navbar">
				<Navbar></Navbar>
			</div>
			<div className="content">
				<div className="landing">
					<div className="landing-bg">
						<div className="darken"></div>
						<img src="assets/kelong.jpg" alt="" />
					</div>
					<div className="landing-content">
						<div className="left">
							<h1>BINTAN</h1>
							<h2>Travel through Bintan with excitements!</h2>
							<a href="#" className='orange-btn'><h3>Explore {'>'}</h3></a>
						</div>
						<div className="right">
							<Carousel
								items={carouselItems}
							></Carousel>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
