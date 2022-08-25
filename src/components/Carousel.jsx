import React, { useContext, useEffect, useState } from 'react'
import { slideContext } from '../global/global-states'
import './carousel.scss'

const Carousel = ({items}) => {

    const { currentSlide, setCurrentSlide } = useContext(slideContext)
    const [ currentOffset, setCurrentOffset ] = useState(0)

    const slideRight = () => {
        if(currentSlide <= items.length - 2) {
            setCurrentSlide(currentSlide + 1)
            setCurrentOffset(currentOffset - 270)
        } else {
            setCurrentSlide(0)
            setCurrentOffset(0)
        }
    }
    
    const slideLeft = () => {
        if(currentSlide >= 1) {
            setCurrentSlide(currentSlide - 1)
            setCurrentOffset(currentOffset + 270)
        } else {
            setCurrentSlide(items.length - 1)
            setCurrentOffset(- 270 * (items.length - 1))
        }
        
    }

    return (
        <div className='carousel-parent'>
            <div className="carousel-card-parent" style={{ transform: `translateX(${currentOffset}px)`}}>
                {
                    items.map((val, i) => {
                        return (
                            <div key={i} className={ currentSlide == i ? "carousel-card": "carousel-card darken"}>
                                <img src={val.source}></img>
                                <h3>{val.title}</h3>
                            </div>
                        )
                    })
                }
                {
                    items.map((val, i) => {
                        return (
                            <div key={i} className="carousel-card darken">
                                <div className='blank'></div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='slider'>
                <h2> <span>{currentSlide + 1}</span> / {items.length}</h2>
                <div className="slider-btn">
                    <div className="btn" onClick={() => slideLeft()}>
                        <h3>{'<'}</h3>
                    </div>
                    <div className="btn" onClick={() => slideRight()}>
                        <h3>{'>'}</h3>
                    </div>
                </div>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Carousel