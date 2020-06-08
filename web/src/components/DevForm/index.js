import React, { useEffect, useState } from 'react'
import './styles.css'

export default function DevForm({onSubmit}) {

    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [techs, setTechs] = useState('')
    const [github_username, setGithub_username] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords

                setLatitude(latitude)
                setLongitude(longitude)
            },
            (err) => {
                console.log(err)
            },
            {
                timeout: 30000
            }
        )
    }, [])

    async function handleSubmit(event){
        event.preventDefault()
        
        await onSubmit({
            github_username,
            techs,
            longitude,
            latitude,
          })

          setGithub_username('')
          setTechs('')
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input name="github_username"
                    id="github_username" required
                    value={github_username}
                    onChange={e => setGithub_username(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input name="techs"
                    id="techs" required
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input type="number"
                        name="latitude"
                        id="latitude"
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)} required />
                </div>

                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input type="number"
                        name="longitude"
                        id="longitude"
                        value={longitude}
                        onChange={e => setLongitude(e.target.value)} required />
                </div>

                <button type="submit">Salvar</button>

            </div>
        </form>
    )
}