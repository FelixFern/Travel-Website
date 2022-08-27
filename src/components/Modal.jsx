import React, { useContext } from 'react'
import { imgModalContext } from '../global/global-states'
import './modal.scss'

const Modal = () => {
    
    const { modal, setModal } = useContext(imgModalContext)

    return (
        <div className={modal.show ? "modal-parent show" : "modal-parent hide"}> 
            <div className="close-btn" >
                <h1 onClick={() =>{setModal({'show': false})}}>X</h1>
            </div>
            <div className='modal-content'>
                <img src={modal.source} alt="" />
                <h2>{modal.title}</h2>
            </div>
        </div>
    )
}

export default Modal