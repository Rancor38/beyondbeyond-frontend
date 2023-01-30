import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react';
import AddMonster from './AddMonsterModal';

const AddMonsterButton = () => {
    const [addMonsterOpen, setAddMonsterOpen] = useState(false)
    
    const close = () => setAddMonsterOpen(false)
    const open = () => setAddMonsterOpen(true)

    return (
        <div className='add-monster-button'>
                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
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
            


            
        </div>
    );
};

export default AddMonsterButton;