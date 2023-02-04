import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import MonsterEditorModal from '../components/editMonster/MonsterEditorModal';
import MonsterDeleteModal from '../components/deleteMonster/MonsterDeleteModal';

const MonsterEditor = ({ match }) => {
    const { id } = useParams()

    const [monster, setMonster] = useState(null)
    
    const [editModalOpen, setEditModalOpen] = useState(false)
    const closeEdit = () => setEditModalOpen(false)
    const openEdit = () => setEditModalOpen(true)

    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const closeDelete = () => setDeleteModalOpen(false)
    const openDelete = () => setDeleteModalOpen(true)

    // a function to check for loggin
    const checkForLogin = () => {
        return localStorage.getItem("IAmLogged?")
      } 

    useEffect(() => {
        checkForLogin()
        axios.get(`https://beyondbeyond.up.railway.app/monster/${id}`)
            .then((res) => {
            setMonster(res.data)
        })
    }, [id])

    if (!monster) {
        return <h1>Loading...</h1>
    }

    

    return (
        <section className='monster-page'>
                <h1 className='monster-name'>{monster.name}
            </h1>
            {monster.description && 
                    <p className='monster-description'>description: {monster.description}</p>
                }
            <div
                className='monster-details'
                    onDoubleClick={openEdit}>
                <img className="monster-art-big" src={monster.image} alt={monster.name} />
                <div className="monster-size-type-alignment">
                <div className="monster-cr">
                {monster.cr && 
                    <p>cr: {monster.cr}</p>
                    }
                </div>
                   <p> size: {monster.size}</p>
                   <p> type: {monster.type}</p>
                    <p> alignment {monster.alignment}</p>
                </div>
                <div className="monster-ac-hp-speed-burrow-climb-fly-swim">
                    <p>ac: {monster.ac}</p>
                    <p>hp: {monster.hp}</p>
                    <p>speed: {monster.speed}</p>
                    {monster.burrowSpeed && 
                    <p>burrow: {monster.burrowSpeed}</p>
                    }
                    {monster.climbSpeed && 
                    <p>climb: {monster.climbSpeed}</p>
                    }
                    {monster.flySpeed && 
                    <p>fly: {monster.flySpeed}</p>
                    }
                    {monster.swimSpeed && 
                    <p>swim: {monster.swimSpeed}</p>
                    }
                </div>
                <div className="monster-stats">
                        <li>str: {monster.str}</li>
                        <li>dex: {monster.dex}</li>
                        <li>con: {monster.con}</li>
                        <li>int: {monster.int}</li>
                        <li>wis: {monster.str}</li>
                        <li>cha: {monster.cha}</li>
                </div>
                <div className="monster-savingthrows">
                {monster.savingThrows && 
                    <p>savingthrows: {monster.savingThrows}</p>
                    }
                </div>
                <div className="monster-skills">
                {monster.skills && 
                    <p>skills: {monster.skills}</p>
                    }
                </div>
                <div className="monster-resistances">
                {monster.resistances && 
                    <p>resistances: {monster.resistances}</p>
                    } 
                </div>
                <div className="monster-damage-immunities">
                {monster.damageImmunities && 
                    <p>damage immunities: {monster.damageImmunities}</p>
                    }
                </div>
                <div className="monster-condition-immunities">
                {monster.conditionImmunities && 
                    <p>condition immunities: {monster.conditionImmunities}</p>
                    }
                </div>
                <div className="monster-vulnerabilities">
                {monster.vulnerabilities && 
                    <p>vulnerabilities: {monster.vulnerabilities}</p>
                    }
                </div>
                <div className="monster-senses">
                {monster.senses && 
                    <p>senses: {monster.senses}</p>
                    }
                </div>
                <div className="monster-languages">
                {monster.languages && 
                    <p>languages: {monster.languages}</p>
                    }
                </div>
                <div className="monster-proficiency-bonus">
                {monster.proficiencyBonus && 
                    <p>proficiency bonus: {monster.proficiencyBonus}</p>
                    }
                </div>
                <div className="monster-abilities-and-actions">
                <div className="monster-abilities">
                {monster.abilityOne && 
                    <p>ability one: {monster.abilityOne}</p>
                }
                    {monster.abilityTwo && 
                    <p>ability two: {monster.abilityTwo}</p>
                }
                    {monster.abilityThree && 
                    <p>ability three: {monster.abilityThree}</p>
                }
                    {monster.abilityFour && 
                    <p>ability four: {monster.abilityFour}</p>
                }
                    {monster.abilityFive && 
                    <p>ability five: {monster.abilityFive}</p>
                }
                </div>
                <div className="monster-actions">
                {monster.actionOne && 
                    <p>action one: {monster.actionOne}</p>
                }
                    {monster.actionTwo && 
                    <p>action two: {monster.actionTwo}</p>
                }
                    {monster.actionThree && 
                    <p>action three: {monster.actionThree}</p>
                }
                    {monster.actionFour && 
                    <p>action four: {monster.actionFour}</p>
                }
                    {monster.actionFive && 
                    <p>action five: {monster.actionFive}</p>
                }
                </div>
                <div className="monster-bonus-actions">
                {monster.bonusActionOne && 
                    <p>bonus action one: {monster.bonusActionOne}</p>
                    }
                    {monster.bonusActionTwo && 
                    <p>bonus action two: {monster.bonusActionTwo}</p>
                }
                    {monster.bonusActionThree && 
                    <p>bonus action three: {monster.bonusActionThree}</p>
                }
                    {monster.bonusActionFour && 
                    <p>bonus action four: {monster.bonusActionFour}</p>
                }
                    {monster.bonusActionFive && 
                    <p>bonus action five: {monster.bonusActionFive}</p>
                }
                </div>
                <div className="monster-reactions">
                {monster.reactionOne && 
                    <p>reaction one: {monster.reactionOne}</p>
                }
                    {monster.reactionTwo && 
                    <p>reaction two: {monster.reactionTwo}</p>
                }
                    {monster.reactionThree && 
                    <p>reaction three: {monster.reactionThree}</p>
                }
                    {monster.reactionFour && 
                    <p>reaction four: {monster.reactionFour}</p>
                }
                    {monster.reactionFive && 
                    <p>reaction five: {monster.reactionFive}</p>
                }
                </div>
                <div className="monster-legendary-actions">
                {monster.legendaryActionOne && 
                    <p>legendary action one: {monster.legendaryActionOne}</p>
                }
                    {monster.legendaryActionTwo && 
                    <p>legendary action two: {monster.legendaryActionTwo}</p>
                }
                    {monster.legendaryActionThree && 
                    <p>legendary action three: {monster.legendaryActionThree}</p>
                }
                    {monster.legendaryActionFour && 
                    <p>legendary action four: {monster.legendaryActionFour}</p>
                }
                    {monster.legendaryActionFive && 
                    <p>legendary action five: {monster.legendaryActionFive}</p>
                }
                </div>
                <div className="monster-lair-actions">
                {monster.lairActionOne && 
                    <p>lair action one: {monster.lairActionOne}</p>
                }
                    {monster.lairActionTwo && 
                    <p>lair action two: {monster.lairActionTwo}</p>
                }
                    {monster.lairActionThree && 
                    <p>lair action three: {monster.lairActionThree}</p>
                }
                    {monster.lairActionFour && 
                    <p>lair action four: {monster.lairActionFour}</p>
                }
                    {monster.lairActionFive && 
                    <p>lair action five: {monster.lairActionFive}</p>
                }
                </div>
                <div className="monster-mythic-actions">
                {monster.mythicActionOne && 
                    <p>mythic action one: {monster.mythicActionOne}</p>
                }
                    {monster.mythicActionTwo && 
                    <p>mythic action two: {monster.mythicActionTwo}</p>
                }
                    {monster.mythicActionThree && 
                    <p>mythic action three: {monster.mythicActionThree}</p>
                }
                    {monster.mythicActionFour && 
                    <p>mythic action four: {monster.mythicActionFour}</p>
                }
                    {monster.mythicActionFive && 
                    <p>mythic action five: {monster.mythicActionFive}</p>
                }
                </div>
                <div className="monster-regional-abilities">
                {monster.regionalAbilityOne && 
                    <p>regional ability one: {monster.regionalAbilityOne}</p>
                }
                    {monster.regionalAbilityTwo && 
                    <p>regional ability two: {monster.regionalAbilityTwo}</p>
                }
                    {monster.regionalAbilityThree && 
                    <p>regional ability three: {monster.regionalAbilityThree}</p>
                }
                    {monster.regionalAbilityFour && 
                    <p>regional ability four: {monster.regionalAbilityFour}</p>
                }
                    {monster.regionalAbilityFive && 
                    <p>regional ability five: {monster.regionalAbilityFive}</p>
                }
                </div>
                            </div>
                        </div>
                        <div className='edit-and-delete'>
                                {checkForLogin() && <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={openEdit}
                                >
                                Edit
                            </motion.button>}
                            {checkForLogin() && <motion.button
                                className='delete'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={openDelete}
                            >
                                Delete
                    </motion.button>}
                    {editModalOpen && <MonsterEditorModal modalOpen={editModalOpen} handleClose={closeEdit} setMonster={setMonster} monster={monster} />}
                    {deleteModalOpen && <MonsterDeleteModal modalOpen={deleteModalOpen} handleClose={closeDelete} setMonster={setMonster} monster={monster} />}
                        </div>
        </section>
    );
};

export default MonsterEditor;