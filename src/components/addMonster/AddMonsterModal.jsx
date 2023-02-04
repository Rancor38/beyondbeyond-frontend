import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
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


const AddMonster = ({ handleClose, text }) => {


    const [monster, setMonster] = useState({
        name: "",
        slug: "",
        image: "",
        size: "",
        type: "",
        alignment: "",
        ac: "",
        hp: "",
        speed: "",
        burrowSpeed: "",
        climbSpeed: "",
        flySpeed: "",
        swimSpeed: "",
        str: "",
        dex: "",
        con: "",
        int: "",
        wis: "",
        cha: "",
        savingThrows: "",
        skills: "",
        resistances: "",
        damageImmunities: "",
        conditionImmunities: "",
        vulnerabilities: "",
        senses: "",
        languages: "",
        cr: "",
        proficiencyBonus: "",
        abilityOne: "",
        abilityTwo: "",
        abilityThree: "",
        abilityFour: "",
        abilityFive: "",
        abilitySix: "",
        abilitySeven: "",
        abilityEight: "",
        abilityNine: "",
        abilityTen: "",
        actionOne: "",
        actionTwo: "",
        actionThree: "",
        actionFour: "",
        actionFive: "",
        actionSix: "",
        actionSeven: "",
        actionEight: "",
        actionNine: "",
        actionTen: "",
        bonusActionOne: "",
        bonusActionTwo: "",
        bonusActionThree: "",
        bonusActionFour: "",
        bonusActionFive: "",
        bonusActionSix: "",
        bonusActionSeven: "",
        bonusActionEight: "",
        bonusActionNine: "",
        bonusActionTen: "",
        reactionOne: "",
        reactionTwo: "",
        reactionThree: "",
        reactionFour: "",
        reactionFive: "",
        reactionSix: "",
        reactionSeven: "",
        reactionEight: "",
        reactionNine: "",
        reactionTen: "",
        legendaryActionOne: "",
        legendaryActionTwo: "",
        legendaryActionThree: "",
        legendaryActionFour: "",
        legendaryActionFive: "",
        legendaryActionSix: "",
        legendaryActionSeven: "",
        legendaryActionEight: "",
        legendaryActionNine: "",
        legendaryActionTen: "",
        lairActionOne: "",
        lairActionTwo: "",
        lairActionThree: "",
        lairActionFour: "",
        lairActionFive: "",
        lairActionSix: "",
        lairActionSeven: "",
        lairActionEight: "",
        lairActionNine: "",
        lairActionTen: "",
        mythicActionOne: "",
        mythicActionTwo: "",
        mythicActionThree: "",
        mythicActionFour: "",
        mythicActionFive: "",
        mythicActionSix: "",
        mythicActionSeven: "",
        mythicActionEight: "",
        mythicActionNine: "",
        mythicActionTen: "",
        regionalAbilityOne: "",
        regionalAbilityTwo: "",
        regionalAbilityThree: "",
        regionalAbilityFour: "",
        regionalAbilityFive: "",
        regionalAbilitySix: "",
        regionalAbilitySeven: "",
        regionalAbilityEight: "",
        regionalAbilityNine: "",
        regionalAbilityTen: "",
        description: ""
    })
    
    const handleChange = (event) => {
        setMonster({...monster, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`https://beyondbeyond.up.railway.app/monster`, monster)
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
                className='add-modal'
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
                        <label htmlFor="size"></label>
                        <textarea
                            onChange={handleChange} type="text" id="size" placeholder="size" />
                    </div>
                    <div>
                        <label htmlFor="type"></label>
                        <textarea
                            onChange={handleChange} type="text" id="type" placeholder="type" />
                    </div>
                    <div>
                        <label htmlFor="alignment"></label>
                        <textarea
                            onChange={handleChange} type="text" id="alignment" placeholder="alignment" />
                    </div>
                    <div>
                        <label htmlFor="ac"></label>
                        <textarea
                            onChange={handleChange} type="text" id="ac" placeholder="ac" />
                    </div>
                    <div>
                        <label htmlFor="hp"></label>
                        <textarea
                            onChange={handleChange} type="text" id="hp" placeholder="hp" />
                    </div>
                    <div>
                        <label htmlFor="speed"></label>
                        <textarea
                            onChange={handleChange} type="text" id="speed" placeholder="speed" />
                    </div>
                    <div>
                        <label htmlFor="burrowSpeed"></label>
                        <textarea
                            onChange={handleChange} type="text" id="burrowSpeed" placeholder="burrowSpeed" />
                    </div>
                    <div>
                        <label htmlFor="climbSpeed"></label>
                        <textarea
                            onChange={handleChange} type="text" id="climbSpeed" placeholder="climbSpeed" />
                    </div>
                    <div>
                        <label htmlFor="flySpeed"></label>
                        <textarea
                            onChange={handleChange} type="text" id="flySpeed" placeholder="flySpeed" />
                    </div>
                    <div>
                        <label htmlFor="swimSpeed"></label>
                        <textarea
                            onChange={handleChange} type="text" id="swimSpeed" placeholder="swimSpeed" />
                    </div>
                    <div>
                        <label htmlFor="str"></label>
                        <textarea
                            onChange={handleChange} type="text" id="str" placeholder="str" />
                    </div>
                    <div>
                        <label htmlFor="dex"></label>
                        <textarea
                            onChange={handleChange} type="text" id="dex" placeholder="dex" />
                    </div>
                    <div>
                        <label htmlFor="con"></label>
                        <textarea
                            onChange={handleChange} type="text" id="con" placeholder="con" />
                    </div>
                    <div>
                        <label htmlFor="int"></label>
                        <textarea
                            onChange={handleChange} type="text" id="int" placeholder="int" />
                    </div>
                    <div>
                        <label htmlFor="wis"></label>
                        <textarea
                            onChange={handleChange} type="text" id="wis" placeholder="wis" />
                    </div>
                    <div>
                        <label htmlFor="cha"></label>
                        <textarea
                            onChange={handleChange} type="text" id="cha" placeholder="cha" />
                    </div>
                    <div>
                        <label htmlFor="savingThrows"></label>
                        <textarea
                            onChange={handleChange} type="text" id="savingThrows" placeholder="savingThrows" />
                    </div>
                    <div>
                        <label htmlFor="skills"></label>
                        <textarea
                            onChange={handleChange} type="text" id="skills" placeholder="skills" />
                    </div>
                    <div>
                        <label htmlFor="resistances"></label>
                        <textarea
                            onChange={handleChange} type="text" id="resistances" placeholder="resistances" />
                    </div>
                    <div>
                        <label htmlFor="damageImmunities"></label>
                        <textarea
                            onChange={handleChange} type="text" id="damageImmunities" placeholder="damageImmunities" />
                    </div>
                    <div>
                        <label htmlFor="conditionImmunities"></label>
                        <textarea
                            onChange={handleChange} type="text" id="conditionImmunities" placeholder="conditionImmunities" />
                    </div>
                    <div>
                        <label htmlFor="vulnerabilities"></label>
                        <textarea
                            onChange={handleChange} type="text" id="vulnerabilities" placeholder="vulnerabilities" />
                    </div>
                    <div>
                        <label htmlFor="senses"></label>
                        <textarea
                            onChange={handleChange} type="text" id="senses" placeholder="senses" />
                    </div>
                    <div>
                        <label htmlFor="languages"></label>
                        <textarea
                            onChange={handleChange} type="text" id="languages" placeholder="languages" />
                    </div>
                    <div>
                        <label htmlFor="cr"></label>
                        <textarea
                            onChange={handleChange} type="text" id="cr" placeholder="cr" />
                    </div>
                    <div>
                        <label htmlFor="proficiencyBonus"></label>
                        <textarea
                            onChange={handleChange} type="text" id="proficiencyBonus" placeholder="proficiencyBonus" />
                    </div>
                    <div>
                        <label htmlFor="abilityOne"></label>
                        <textarea
                            onChange={handleChange} type="text" id="abilityOne" placeholder="abilityOne" />
                    </div>
                    <div>
                        <label htmlFor="abilityTwo"></label>
                        <textarea
                            onChange={handleChange} type="text" id="abilityTwo" placeholder="abilityTwo" />
                    </div>
                    <div>
                        <label htmlFor="abilityThree"></label>
                        <textarea
                            onChange={handleChange} type="text" id="abilityThree" placeholder="abilityThree" />
                    </div>
                    <div>
                        <label htmlFor="abilityFour"></label>
                        <textarea
                            onChange={handleChange} type="text" id="abilityFour" placeholder="abilityFour" />
                    </div>
                    <div>
                        <label htmlFor="abilityFive"></label>
                        <textarea
                            onChange={handleChange} type="text" id="abilityFive" placeholder="abilityFive" />
                    </div>
                    <div>
                        <label htmlFor="actionOne"></label>
                        <textarea
                            onChange={handleChange} type="text" id="actionOne" placeholder="actionOne" />
                    </div>
                    <div>
                        <label htmlFor="actionTwo"></label>
                        <textarea
                            onChange={handleChange} type="text" id="actionTwo" placeholder="actionTwo" />
                    </div>
                    <div>
                        <label htmlFor="actionThree"></label>
                        <textarea
                            onChange={handleChange} type="text" id="actionThree" placeholder="actionThree" />
                    </div>
                    <div>
                        <label htmlFor="actionFour"></label>
                        <textarea
                            onChange={handleChange} type="text" id="actionFour" placeholder="actionFour" />
                    </div>
                    <div>
                        <label htmlFor="actionFive"></label>
                        <textarea
                            onChange={handleChange} type="text" id="actionFive" placeholder="actionFive" />
                    </div>
                    <div>
                        <label htmlFor="bonusActionOne"></label>
                        <textarea
                            onChange={handleChange} type="text" id="bonusActionOne" placeholder="bonusActionOne" />
                    </div>
                    <div>
                        <label htmlFor="bonusActionTwo"></label>
                        <textarea
                            onChange={handleChange} type="text" id="bonusActionTwo" placeholder="bonusActionTwo" />
                    </div>
                    <div>
                        <label htmlFor="bonusActionThree"></label>
                        <textarea
                            onChange={handleChange} type="text" id="bonusActionThree" placeholder="bonusActionThree" />
                    </div>
                    <div>
                        <label htmlFor="bonusActionFour"></label>
                        <textarea
                            onChange={handleChange} type="text" id="bonusActionFour" placeholder="bonusActionFour" />
                    </div>
                    <div>
                        <label htmlFor="bonusActionFive"></label>
                        <textarea
                            onChange={handleChange} type="text" id="bonusActionFive" placeholder="bonusActionFive" />
                    </div>
                    <div>
                        <label htmlFor="reactionOne"></label>
                        <textarea
                            onChange={handleChange} type="text" id="reactionOne" placeholder="reactionOne" />
                    </div>
                    <div>
                        <label htmlFor="reactionTwo"></label>
                        <textarea
                            onChange={handleChange} type="text" id="reactionTwo" placeholder="reactionTwo" />
                    </div>
                    <div>
                        <label htmlFor="reactionThree"></label>
                        <textarea
                            onChange={handleChange} type="text" id="reactionThree" placeholder="reactionThree" />
                    </div>
                    <div>
                        <label htmlFor="reactionFour"></label>
                        <textarea
                            onChange={handleChange} type="text" id="reactionFour" placeholder="reactionFour" />
                    </div>
                    <div>
                        <label htmlFor="reactionFive"></label>
                        <textarea
                            onChange={handleChange} type="text" id="reactionFive" placeholder="reactionFive" />
                    </div>
                    <div>
                        <label htmlFor="legendaryActionOne"></label>
                        <textarea
                            onChange={handleChange} type="text" id="legendaryActionOne" placeholder="legendaryActionOne" />
                    </div>
                    <div>
                        <label htmlFor="legendaryActionTwo"></label>
                        <textarea
                            onChange={handleChange} type="text" id="legendaryActionTwo" placeholder="legendaryActionTwo" />
                    </div>
                    <div>
                        <label htmlFor="legendaryActionThree"></label>
                        <textarea
                            onChange={handleChange} type="text" id="legendaryActionThree" placeholder="legendaryActionThree" />
                    </div>
                    <div>
                        <label htmlFor="legendaryActionFour"></label>
                        <textarea
                            onChange={handleChange} type="text" id="legendaryActionFour" placeholder="legendaryActionFour" />
                    </div>
                    <div>
                        <label htmlFor="legendaryActionFive"></label>
                        <textarea
                            onChange={handleChange} type="text" id="legendaryActionFive" placeholder="legendaryActionFive" />
                    </div>
                    <div>
                        <label htmlFor="lairActionOne"></label>
                        <textarea
                            onChange={handleChange} type="text" id="lairActionOne" placeholder="lairActionOne" />
                    </div>
                    <div>
                        <label htmlFor="lairActionTwo"></label>
                        <textarea
                            onChange={handleChange} type="text" id="lairActionTwo" placeholder="lairActionTwo" />
                    </div>
                    <div>
                        <label htmlFor="lairActionThree"></label>
                        <textarea
                            onChange={handleChange} type="text" id="lairActionThree" placeholder="lairActionThree" />
                    </div>
                    <div>
                        <label htmlFor="lairActionFour"></label>
                        <textarea
                            onChange={handleChange} type="text" id="lairActionFour" placeholder="lairActionFour" />
                    </div>
                    <div>
                        <label htmlFor="lairActionFive"></label>
                        <textarea
                            onChange={handleChange} type="text" id="lairActionFive" placeholder="lairActionFive" />
                    </div>
                    <div>
                        <label htmlFor="regionalAbilityOne"></label>
                        <textarea
                            onChange={handleChange} type="text" id="regionalAbilityOne" placeholder="regionalAbilityOne" />
                    </div>
                    <div>
                        <label htmlFor="regionalAbilityTwo"></label>
                        <textarea
                            onChange={handleChange} type="text" id="regionalAbilityTwo" placeholder="regionalAbilityTwo" />
                    </div>
                    <div>
                        <label htmlFor="regionalAbilityThree"></label>
                        <textarea
                            onChange={handleChange} type="text" id="regionalAbilityThree" placeholder="regionalAbilityThree" />
                    </div>
                    <div>
                        <label htmlFor="regionalAbilityFour"></label>
                        <textarea
                            onChange={handleChange} type="text" id="regionalAbilityFour" placeholder="regionalAbilityFour" />
                    </div>
                    <div>
                        <label htmlFor="regionalAbilityFive"></label>
                        <textarea
                            onChange={handleChange} type="text" id="regionalAbilityFive" placeholder="regionalAbilityFive" />
                    </div>
                    <div>
                        <label htmlFor="description"></label>
                        <textarea
                            onChange={handleChange} type="text" id="description" placeholder="description" />
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