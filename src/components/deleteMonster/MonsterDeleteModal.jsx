import axios from 'axios';
import { motion } from 'framer-motion';
import MonsterModalBackdrop from '../ModalBackdrop';
import { useNavigate, useParams } from 'react-router-dom';

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


const MonsterDeleteModal = ({ handleClose, text }) => {

    const { id } = useParams()
    const navigate = useNavigate()

    const handleDelete = () => {
        axios.delete(`http://localhost:4000/monster/${id}`)
            .then(() => {
            navigate('/')
            })
    }

    return (
        <MonsterModalBackdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className='delete-modal'
                variants={dropIn}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                <h1>Are you sure you would like to delete this monster?</h1>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='button'
                    onClick={handleDelete}>Delete</motion.button>
                </motion.div>
        </MonsterModalBackdrop>
            
    );
};

export default MonsterDeleteModal;