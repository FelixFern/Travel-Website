import React from 'react'
import ActivitiesCard from './ActivitiesCard'
import AOS from 'aos';

import 'aos/dist/aos.css';
import './activities.scss'

const Activities = () => {
    
    const activitiesList = [
        {
            title: "Seafood", 
            source: "assets/seafood.jpg"
        },
        {
            title: "Snorkeling Tour", 
            source: "assets/snorkeling.jpg"
        },
        {
            title: "Mangrove Tour", 
            source: "assets/hutan-m.jpg"
        },
        {
            title: "Spa & Message", 
            source: "assets/spa.webp"
        },
        {
            title: "City Tour", 
            source: "assets/city.jpeg"
        },
        {
            title: "Hotel", 
            source: "assets/hotel.jpeg"
        },
        {
            title: "Fireflies", 
            source: "assets/firefly.webp"
        },
        {
            title: "Fishing Tour", 
            source: "assets/fishing.jpg"
        },
        {
            title: "Gunung Bintan Trekking", 
            source: "assets/gunung-b.jpg"
        },
        {
			title: 'Sleeping Buddha',
			source: './assets/sleeping-buddha.jpg'
		},
		{
			title: 'Trans Studio Garden',
			source: './assets/trans-studio.jpg'
		},
		{
			title: 'White Sand Island',
			source: './assets/white-sand.jpg'
		}, 
		{
			title: 'Treasure Bay',
			source: './assets/treasure-bay.jpg'
		}, 
        {
			title: 'Lagoi Bay',
			source: './assets/lagoi-bay.jpg'
		},{
			title: 'Lohan Temple',
			source: './assets/lohan.jpg'
		},
    ]
    return (
        <div className='activities-parent'>
            {activitiesList.map((val, i) => {
                return (
                    <ActivitiesCard
                        key={i}
                        item={val}
                    ></ActivitiesCard>
                )
            })}
            
            
        </div>
    )
}

export default Activities