import { motion } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import MonsterModalBackdrop from '../ModalBackdrop';

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
            .then(() => { handleClose() })
            // .then(() => {
            //     setTimeout(() => {
            //      window.location.reload()   
            //     }, 500)
            // })
    }

    return (
        <MonsterModalBackdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className='edit-modal'
                variants={dropIn}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                <form 
                    onSubmit={handleSubmit}>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='name'>name</label>
                        <input onChange={handleChange}
                        id='name'
                        value={monster.name} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='slug'>slug</label>
                        <input onChange={handleChange}
                        id='slug'
                        value={monster.slug} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='image'>image</label>
                        <input onChange={handleChange}
                        id='name'
                        value={monster.image} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='size'>size</label>
                        <input onChange={handleChange}
                        id='size'
                        value={monster.size} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='type'>type</label>
                        <input onChange={handleChange}
                        id='type'
                        value={monster.type} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='alignment'>alignment</label>
                        <input onChange={handleChange}
                        id='alignment'
                        value={monster.alignment} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='ac'>ac</label>
                        <input onChange={handleChange}
                        id='ac'
                        value={monster.ac} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='hp'>hp</label>
                        <input onChange={handleChange}
                        id='hp'
                        value={monster.hp} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='speed'>speed</label>
                        <input onChange={handleChange}
                        id='speed'
                        value={monster.speed} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='burrowSpeed'>burrowSpeed</label>
                        <input onChange={handleChange}
                        id='burrowSpeed'
                        value={monster.burrowSpeed} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='climbSpeed'>climbSpeed</label>
                        <input onChange={handleChange}
                        id='climbSpeed'
                        value={monster.climbSpeed} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='flySpeed'>flySpeed</label>
                        <input onChange={handleChange}
                        id='flySpeed'
                        value={monster.flySpeed} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='swimSpeed'>swimSpeed</label>
                        <input onChange={handleChange}
                        id='swimSpeed'
                        value={monster.swimSpeed} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='str'>str</label>
                        <input onChange={handleChange}
                        id='str'
                        value={monster.str} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='dex'>dex</label>
                        <input onChange={handleChange}
                        id='dex'
                        value={monster.dex} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='con'>con</label>
                        <input onChange={handleChange}
                        id='con'
                        value={monster.con} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='int'>int</label>
                        <input onChange={handleChange}
                        id='int'
                        value={monster.int} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='wis'>wis</label>
                        <input onChange={handleChange}
                        id='wis'
                        value={monster.wis} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='cha'>cha</label>
                        <input onChange={handleChange}
                        id='cha'
                        value={monster.cha} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='savingThrows'>savingThrows</label>
                        <input onChange={handleChange}
                        id='savingThrows'
                        value={monster.savingThrows} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='skills'>skills</label>
                        <input onChange={handleChange}
                        id='skills'
                        value={monster.skills} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='skills'>skills</label>
                        <input onChange={handleChange}
                        id='skills'
                        value={monster.skills} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='resistances'>resistances</label>
                        <input onChange={handleChange}
                        id='resistances'
                        value={monster.resistances} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='damageImmunities'>damageImmunities</label>
                        <input onChange={handleChange}
                        id='damageImmunities'
                        value={monster.damageImmunities} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='conditionImmunities'>conditionImmunities</label>
                        <input onChange={handleChange}
                        id='conditionImmunities'
                        value={monster.conditionImmunities} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='vulnerabilities'>vulnerabilities</label>
                        <input onChange={handleChange}
                        id='vulnerabilities'
                        value={monster.vulnerabilities} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='senses'>senses</label>
                        <input onChange={handleChange}
                        id='senses'
                        value={monster.senses} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='languages'>languages</label>
                        <input onChange={handleChange}
                        id='languages'
                        value={monster.languages} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='cr'>cr</label>
                        <input onChange={handleChange}
                        id='cr'
                        value={monster.cr} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='proficiencyBonus'>proficiencyBonus</label>
                        <input onChange={handleChange}
                        id='proficiencyBonus'
                        value={monster.proficiencyBonus} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='abilityOne'>abilityOne</label>
                        <input onChange={handleChange}
                        id='abilityOne'
                        value={monster.abilityOne} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='abilityTwo'>abilityTwo</label>
                        <input onChange={handleChange}
                        id='abilityTwo'
                        value={monster.abilityTwo} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='abilityThree'>abilityThree</label>
                        <input onChange={handleChange}
                        id='abilityThree'
                        value={monster.abilityThree} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='abilityFour'>abilityFour</label>
                        <input onChange={handleChange}
                        id='abilityFour'
                        value={monster.abilityFour} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='abilityFive'>abilityFive</label>
                        <input onChange={handleChange}
                        id='abilityFive'
                        value={monster.abilityFive} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='actionOne'>actionOne</label>
                        <input onChange={handleChange}
                        id='actionOne'
                        value={monster.actionOne} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='actionTwo'>actionTwo</label>
                        <input onChange={handleChange}
                        id='actionTwo'
                        value={monster.actionTwo} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='actionThree'>actionThree</label>
                        <input onChange={handleChange}
                        id='actionThree'
                        value={monster.actionThree} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='actionFour'>actionFour</label>
                        <input onChange={handleChange}
                        id='actionFour'
                        value={monster.actionFour} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='actionFive'>actionFive</label>
                        <input onChange={handleChange}
                        id='actionFive'
                        value={monster.actionFive} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='bonusActionOne'>bonusActionOne</label>
                        <input onChange={handleChange}
                        id='bonusActionOne'
                        value={monster.bonusActionOne} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='bonusActionTwo'>bonusActionTwo</label>
                        <input onChange={handleChange}
                        id='bonusActionTwo'
                        value={monster.bonusActionTwo} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='bonusActionThree'>bonusActionThree</label>
                        <input onChange={handleChange}
                        id='bonusActionThree'
                        value={monster.bonusActionThree} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='bonusActionFour'>bonusActionFour</label>
                        <input onChange={handleChange}
                        id='bonusActionFour'
                        value={monster.bonusActionFour} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='bonusActionFive'>bonusActionFive</label>
                        <input onChange={handleChange}
                        id='bonusActionFive'
                        value={monster.bonusActionFive} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='reactionOne'>reactionOne</label>
                        <input onChange={handleChange}
                        id='reactionOne'
                        value={monster.reactionOne} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='reactionTwo'>reactionTwo</label>
                        <input onChange={handleChange}
                        id='reactionTwo'
                        value={monster.reactionTwo} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='reactionThree'>reactionThree</label>
                        <input onChange={handleChange}
                        id='reactionThree'
                        value={monster.reactionThree} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='reactionFour'>reactionFour</label>
                        <input onChange={handleChange}
                        id='reactionFour'
                        value={monster.reactionFour} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='reactionFive'>reactionFive</label>
                        <input onChange={handleChange}
                        id='reactionFive'
                        value={monster.reactionFive} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='legendaryActionOne'>legendaryActionOne</label>
                        <input onChange={handleChange}
                        id='legendaryActionOne'
                        value={monster.legendaryActionOne} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='legendaryActionTwo'>legendaryActionTwo</label>
                        <input onChange={handleChange}
                        id='legendaryActionTwo'
                        value={monster.legendaryActionTwo} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='legendaryActionThree'>legendaryActionThree</label>
                        <input onChange={handleChange}
                        id='legendaryActionThree'
                        value={monster.legendaryActionThree} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='legendaryActionFour'>legendaryActionFour</label>
                        <input onChange={handleChange}
                        id='legendaryActionFour'
                        value={monster.legendaryActionFour} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='legendaryActionFive'>legendaryActionFive</label>
                        <input onChange={handleChange}
                        id='legendaryActionFive'
                        value={monster.legendaryActionFive} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='lairActionOne'>lairActionOne</label>
                        <input onChange={handleChange}
                        id='lairActionOne'
                        value={monster.lairActionOne} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='lairActionTwo'>lairActionTwo</label>
                        <input onChange={handleChange}
                        id='lairActionTwo'
                        value={monster.lairActionTwo} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='lairActionThree'>lairActionThree</label>
                        <input onChange={handleChange}
                        id='lairActionThree'
                        value={monster.lairActionThree} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='lairActionFour'>lairActionFour</label>
                        <input onChange={handleChange}
                        id='lairActionFour'
                        value={monster.lairActionFour} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='lairActionFive'>lairActionFive</label>
                        <input onChange={handleChange}
                        id='lairActionFive'
                        value={monster.lairActionFive} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='mythicActionOne'>mythicActionOne</label>
                        <input onChange={handleChange}
                        id='mythicActionOne'
                        value={monster.mythicActionOne} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='mythicActionTwo'>mythicActionTwo</label>
                        <input onChange={handleChange}
                        id='mythicActionTwo'
                        value={monster.mythicActionTwo} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='mythicActionThree'>mythicActionThree</label>
                        <input onChange={handleChange}
                        id='mythicActionThree'
                        value={monster.mythicActionThree} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='mythicActionFour'>mythicActionFour</label>
                        <input onChange={handleChange}
                        id='mythicActionFour'
                        value={monster.mythicActionFour} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='mythicActionFive'>mythicActionFive</label>
                        <input onChange={handleChange}
                        id='mythicActionFive'
                        value={monster.mythicActionFive} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='regionalAbilityOne'>regionalAbilityOne</label>
                        <input onChange={handleChange}
                        id='regionalAbilityOne'
                        value={monster.regionalAbilityOne} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='regionalAbilityTwo'>regionalAbilityTwo</label>
                        <input onChange={handleChange}
                        id='regionalAbilityTwo'
                        value={monster.regionalAbilityTwo} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='regionalAbilityThree'>regionalAbilityThree</label>
                        <input onChange={handleChange}
                        id='regionalAbilityThree'
                        value={monster.regionalAbilityThree} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='regionalAbilityFour'>regionalAbilityFour</label>
                        <input onChange={handleChange}
                        id='regionalAbilityFour'
                        value={monster.regionalAbilityFour} />
                    </div>
                    <div className='edit-form-input'>
                    <label className='edit-label' htmlFor='regionalAbilityFive'>regionalAbilityFive</label>
                        <input onChange={handleChange}
                        id='regionalAbilityFive'
                        value={monster.regionalAbilityFive} />
                    </div>
                    <div className='edit-form-input'>
                        <label className='edit-label'
                        htmlFor='monster'>
                    </label>
                    <textarea className='monster-textarea'
                            onChange={handleChange}
                            id='description'
                            value={monster.description}
                        />
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
        </MonsterModalBackdrop>
    );
};

export default MonsterEditorModal;