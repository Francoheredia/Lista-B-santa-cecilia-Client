import { Table, TableContainer, Tbody, Tfoot, Th, Thead, Tr, Td } from "@chakra-ui/react";
import { PlayerContext } from "./context"
import { useEffect, useState } from 'react';
import axios from "axios";
interface Player {
    id: string,
    name: string,
    appearances?: number,
    wins?: number,
    losses?: number,
    winrate?: string,
    badstreak: number,
}

export const Players = () =>{

    const [AllPlayers, setAllPlayers] = useState<Player[]>()



    useEffect( () =>{
        const getApi = async() =>{
            const resp = await axios.get('https://lista-b-santa-cecilia-server-production.up.railway.app/player')
            const {playersAll} = resp.data;
            setAllPlayers(playersAll)
        }
        getApi()
    },[])

    const playerContext = PlayerContext.useValue();

    return (
        <div>
            <PlayerContext.Provider value={playerContext}>
                <TableContainer display='block'>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                            <Th>Name</Th>
                            <Th>Appearances</Th>
                            <Th>Wins</Th>
                            <Th>Losses</Th>
                            <Th>Winrate</Th>
                            <Th>Badstreak</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                           {
                            AllPlayers?.map((player: Player) => {
                                return(
                                    <Tr>
                                        <Td>{player.name}</Td>
                                        <Td>{player.appearances}</Td>
                                        <Td>{player.wins}</Td>
                                        <Td>{player.losses}</Td>
                                        <Td>{player.winrate}</Td>
                                        <Td>{player.badstreak}</Td>
                                    </Tr>
                                )
                            })
                           }
                        </Tbody>
                    </Table>
                </TableContainer>
            </PlayerContext.Provider>
        </div>
    )
}