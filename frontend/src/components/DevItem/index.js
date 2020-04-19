import React from 'react'

import garbage from '../../Assets/delete.png'
import api from '../../services/api'
import './styles.css'

export default function DevItem({ dev }) {

    async function handleDelete() {

        await api.delete(`/devs/${dev.github_username}`)

    }

    return (
        <li
            className="dev-item">
            <header>
                <img src={dev.avatar_url} alt="" />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio ? dev.bio : `Conteúdo Vazio`}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
            <button onClick={() => { handleDelete() }}>
                <img src={garbage} alt=""></img>
            </button>

        </li>
    )
}