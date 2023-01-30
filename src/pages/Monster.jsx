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
        <section>
                    <div>
                        <div onDoubleClick={openEdit}>
                    <div>{monster.name}</div>
                    <div className='monsterText'>{monster.description}</div>
                    <img src={monster.image} alt={monster.name} className="monster-art-big"/>
                        </div>
                        <div>
                                <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={openEdit}
                            >
                                Edit
                            </motion.button>
                            <motion.button
                                className='danger'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={openDelete}
                            >
                                Delete
                    </motion.button>
                    {editModalOpen && <MonsterEditorModal modalOpen={editModalOpen} handleClose={closeEdit} setMonster={setMonster} monster={monster} />}
                    {deleteModalOpen && <MonsterDeleteModal modalOpen={deleteModalOpen} handleClose={closeDelete} setMonster={setMonster} monster={monster} />}
                        </div>
                    </div>
        </section>
    );
};

export default MonsterEditor;