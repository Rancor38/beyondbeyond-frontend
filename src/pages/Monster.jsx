import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import MonsterEditorModal from '../components/editMonster/MonsterEditorModal';
import MonsterDeleteModal from '../components/deleteMonster/MonsterDeleteModal';

const MonsterEditor = ({ match }) => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [monster, setMonster] = useState(null)
    
    const [editModalOpen, setEditModalOpen] = useState(false)
    const closeEdit = () => setEditModalOpen(false)
    const openEdit = () => setEditModalOpen(true)

    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const closeDelete = () => setDeleteModalOpen(false)
    const openDelete = () => setDeleteModalOpen(true)


    useEffect(() => {
        axios.get(`http://localhost:4000/monster/${id}`)
            .then((res) => {
            setMonster(res.data)
        })
    }, [id])

    if (!monster) {
        return <h1>Loading...</h1>
    }

    return (
        <section className='monster-page'>
            <div
                className='monster-details'
                    onDoubleClick={openEdit}>
                <h1 className='monster-name'>{monster.name}
                </h1>
                <img className="monster-art-big" src={monster.image} alt={monster.name} />
                <div className="monster-size-type-alignment">
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
                    <ul>
                        <li>str: {monster.str}</li>
                        <li>dex: {monster.dex}</li>
                        <li>con: {monster.con}</li>
                        <li>int: {monster.int}</li>
                        <li>wis: {monster.str}</li>
                        <li>cha: {monster.cha}</li>
                </ul>
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
                <div className="monster-vulnerabilities">

                </div>
                <div className="monster-senses">

                </div>
                <div className="monster-languages">

                </div>
                <div className="monster-cr">

                </div>
                <div className="monster-proficiency-bonus">

                </div>
                <div className="monster-abilities">

                </div>
                <div className="monster-actions">

                </div>
                <div className="monster-bonus-actions">

                </div>
                <div className="monster-reactions">

                </div>
                <div className="monster-legendary-actions">

                </div>
                <div className="monster-lair-actions">

                </div>
                <div className="monster-mythic-actions">

                </div>
                <div className="monster-regional-abilities">

                </div>
                        </div>
                        <div className='edit-and-delete'>
                                <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={openEdit}
                            >
                                Edit
                            </motion.button>
                            <motion.button
                                className='delete'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={openDelete}
                            >
                                Delete
                    </motion.button>
                    {editModalOpen && <MonsterEditorModal modalOpen={editModalOpen} handleClose={closeEdit} setMonster={setMonster} monster={monster} />}
                    {deleteModalOpen && <MonsterDeleteModal modalOpen={deleteModalOpen} handleClose={closeDelete} setMonster={setMonster} monster={monster} />}
                        </div>
        </section>
    );
};

export default MonsterEditor;