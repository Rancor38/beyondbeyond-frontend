import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import MonsterEditorModal from './MonsterEditorModal';

const MonsterEditor = ({ match }) => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [monster, setMonster] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)

    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)

    useEffect(() => {
        axios.get(`http://localhost:4000/monster/${id}`)
            .then((res) => {
            setMonster(res.data)
        })
    }, [id])

    const handleDelete = () => {
        axios.delete(`http://localhost:4000/monster/${id}`)
            .then(() => {
            navigate('/')
            })
    }

    if (!monster) {
        return <h1>Loading...</h1>
    }

    return (
        <section>
                    <div className='monsterEditorView'>
                        <Card onDoubleClick={open}>
                    <Card.Title>{monster.name}</Card.Title>
                    <Card.Body className='monsterText'>{monster.description}</Card.Body>
                    <Card.Img src={monster.image} alt={monster.name} className="card-art-big"/>
                        </Card>
                        <div className='monsterEditorEditDeleteButtons'>
                                <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={open}
                            >
                                Edit
                            </motion.button>
                                <span className='spacer'></span>
                            <motion.button
                                className='danger'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleDelete}
                            >
                                Delete
                            
                    </motion.button>
                    {modalOpen && <MonsterEditorModal modalOpen={modalOpen} handleClose={close} setMonster={setMonster} monster={monster} />}
                        </div>
                    </div>
        </section>
    );
};

export default MonsterEditor;