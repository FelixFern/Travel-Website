import React, { useContext } from 'react'
import { imgModalContext } from '../global/global-states'
import './activitiescard.scss'

const ActivitiesCard = ({item}) => {
    
    const { modal, setModal } = useContext(imgModalContext)
    
    return (
        <div className='activities-card-parent' onClick={() => {
            setModal({'show': true, 'source': item.source, 'title': item.title})
        }}>
            <img src={item.source} alt={item.title} />
            <div className="title">
                <h3><span>Bintan</span></h3>
                <h3>{item.title}</h3>
            </div>
        </div>
    )
}

export default ActivitiesCard