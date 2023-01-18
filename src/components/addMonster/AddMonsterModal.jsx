import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import MonsterModalBackdrop from './MonsterModalBackdrop';

const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 10,
            stiffness: 50,
        }
    },
    exit: {
        y: '100vh',
        opacity: 0,
        transition: {
            duration: 0.4,
        }
    },
}


const AddMonster = ({ handleClose, text }) => {


    const [monster, setMonster] = useState({
        name: "",
        slug: "",
        image: "",
        description: "",
        cr: "",
    })
    
    const handleChange = (event) => {
        setMonster({...monster, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`http://localhost:4000/monster`, monster)
            .then(() => {
            handleClose()
            })
            .then(() => {
                setTimeout(() => {
                 window.location.reload()   
                }, 500)
            })
    }

    return (
        <MonsterModalBackdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className='modal create-form'
                variants={dropIn}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                <form>
                    <div>
                        <label htmlFor="name"></label>
                        <input onChange={handleChange} type="text" id="name" placeholder="Name" />
                    </div>
                    <div>
                        <label htmlFor="slug"></label>
                        <textarea
                            onChange={handleChange} type="text" id="slug" placeholder="slug" />
                    </div>
                    <div>
                        <label htmlFor="image"></label>
                        <textarea
                            onChange={handleChange} type="text" id="image" placeholder="image" />
                    </div>
                    <div>
                        <label htmlFor="description"></label>
                        <textarea
                            onChange={handleChange} type="text" id="description" placeholder="description" />
                    </div>
                    <div>
                        <label htmlFor="cr"></label>
                        <textarea
                            onChange={handleChange} type="text" id="cr" placeholder="cr" />
                    </div>
                    <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='button'
                    onClick={handleSubmit}
                >
                    Save & Return
                </motion.button>
                </form>
                </motion.div>
        </MonsterModalBackdrop>
            
    );
};

export default AddMonster;