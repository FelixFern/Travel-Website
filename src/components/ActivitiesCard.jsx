import React from 'react'
import './activitiescard.scss'

const ActivitiesCard = ({item}) => {
    return (
        <div className='activities-card-parent'>
            <img src={item.source} alt={item.title} />
            <div className="title">
                <h3><span>Bintan</span></h3>
                <h3>{item.title}</h3>
            </div>
        </div>
    )
}

export default ActivitiesCard