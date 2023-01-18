import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react';
import AddMonster from './AddMonsterModal';

const AddMonsterButton = () => {
    const [addMonsterOpen, setAddMonsterOpen] = useState(false)
    
    const close = () => setAddMonsterOpen(false)
    const open = () => setAddMonsterOpen(true)

    return (
        <h1>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='button'
                    onClick={() => (addMonsterOpen ? close() : open())}
                >
                    Add Monster
            </motion.button>
            
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {addMonsterOpen && <AddMonster addMonsterOpen={addMonsterOpen} handleClose={close} />}
            </AnimatePresence>


            
        </h1>
    );
};

export default AddMonsterButton;