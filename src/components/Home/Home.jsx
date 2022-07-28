import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPlayers, getPlayer } from '../../redux/actions/index'

function Home() {
    const players = useSelector(state => state.players)
    const player = useSelector(state => state.player)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlayer(1))
        dispatch(getAllPlayers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <>
        <h1>Home</h1>
        <div>Player By ID:</div>
        <div>{player.id}</div>
        <div>{player.title}</div>
        <div>{player.body}</div>
        <div>finish</div>
        
        <ul>
            {players.map(player => (
                <li key={player.id} >Jugador: {player.title}, Nickname: {player.body} </li>
            ))}
        </ul>
    </>
  )
}

export default Home