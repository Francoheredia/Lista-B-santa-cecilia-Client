import {useContext,useState, createContext} from 'react'




interface Player {
    id: string,
    name: string,
    appearances?: number,
    wins?: number,
    losses?: number,
    winrate?: string,
    badstreak: number,
}

interface PlayerContextType {
    players? : Player[],
    setPlayers: (players?: Player[]) => void

}


const Context = createContext<PlayerContextType>({
    players : undefined,
    setPlayers: () => {
        throw new Error(
            'Attempted to use default setPlayers function for PlayerContext , make sure to pass a custom function implementation',
          )
    }
})


const useValue = (): PlayerContextType => {
    const [players, setPlayers] = useState<Player[]>()

    return { players, setPlayers }
}


const usePlayerContext = () =>{
    return useContext(Context)
}



export const PlayerContext = {
    Provider: Context.Provider,
    useValue,
    usePlayerContext,
}