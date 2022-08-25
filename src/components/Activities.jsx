import React from 'react'
import ActivitiesCard from './ActivitiesCard'
import AOS from 'aos';

import 'aos/dist/aos.css';
import './activities.scss'

const Activities = () => {
    
    const activitiesList = [
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
            title: "GUNUNG BINTAN TREKKING", 
            source: "assets/gunung-b.jpg"
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