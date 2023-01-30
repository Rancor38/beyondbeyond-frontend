import { motion } from 'framer-motion'

const MonsterModalBackdrop = ({ children, onClick }) => {
    
    return (
        <motion.div
            className='modal-backdrop'
            onClick={onClick
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}

        </motion.div>
    );
};

export default MonsterModalBackdrop;