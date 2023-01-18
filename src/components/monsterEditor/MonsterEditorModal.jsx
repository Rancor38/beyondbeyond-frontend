import { motion } from 'framer-motion'
import EditorBackdrop from './EditorBackdrop';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

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



const MonsterEditorModal = ({ handleClose, monster, setMonster }) => {

    const { id } = useParams()
    const navigate = useNavigate()

    const handleChange = (event) => {
        setMonster({ ...monster, [event.target.id]: event.target.value })
        }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:4000/monster/${id}`, monster)
            .then(navigate('/'))
            // .then(() => {
            //     setTimeout(() => {
            //      window.location.reload()   
            //     }, 500)
            // })
    }

    return (
        <EditorBackdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className='modal edit-form'
                variants={dropIn}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                <form 
                    onSubmit={handleSubmit}>
                    <div>
                    <label className='edit-label' htmlFor='name'></label>
                        <input onChange={handleChange}
                        id='name'
                        value={monster.name} />
                    </div>
                    <div>
                        <label className='edit-label'
                        htmlFor='monster'>
                    </label>
                    <textarea className='textarea'
                            onChange={handleChange}
                            id='description'
                            value={monster.description}
                        />
                    </div>
                    <div>
                    <label className='edit-label' htmlFor='image'></label>
                        <input onChange={handleChange}
                        id='name'
                        value={monster.image} />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type='submit'
                    >
                        Save & Return
                    </motion.button>
                    </form>
                
            </motion.div>
        </EditorBackdrop>
    );
};

export default MonsterEditorModal;