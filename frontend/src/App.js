import React, { useEffect, useState } from 'react'

import api from "./services/api"
import DevForm from "../src/components/DevForm/"
import garbage from '../src/Assets/delete.png'

import './Global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

export default function App() {
  const [devs, setDevs] = useState([])

  useEffect(() => {

    async function loadDevs() {
      const response = await api.get('/devs')
      setDevs(response.data)
    }
    loadDevs()

  }, [devs])


  async function handleAddDev(data) {

    const response = await api.post("/devs", data)
    setDevs([...devs, response.data])

  }

  async function handleDelete(dev) {

    await api.delete(`/devs/${dev.github_username}`)

  }

  return (
    <div id="app">

      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>

        <ul>
          {devs.map(dev => (
            <li key={dev._id} className="dev-item">
              <header>

                <img src={dev.avatar_url} alt="" />
                <div className="user-info">

                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>

                </div>
              </header>

              <p>{dev.bio ? dev.bio : `Conteúdo Vazio`}</p>
              <div className="acessAndDelete">

                <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>

                <button onClick={() => { handleDelete(dev) }}>
                  <img src={garbage} alt="" />
                </button>

              </div>


            </li>
          ))}
        </ul>

      </main>
    </div>
  )
}

