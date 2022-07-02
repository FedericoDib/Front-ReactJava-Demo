import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Home() {

    const [players, setPlayers] = useState([])

    useEffect(() => {

        const getInfoApi = async () => {
            const response = await axios.get('http://localhost:8080/players/');
            setPlayers(response.data)
        }
        getInfoApi()

    }, [])


  return (
    <>
        <h1>Home</h1>
        <ul>
            {players.map(player => (
                <li key={player.playerId}>Jugador: {player.name}, Nickname: {player.nickname} </li>
            ))}
        </ul>
    </>
  )
}

export default Home