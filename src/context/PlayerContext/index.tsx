import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

import { Player } from '../../interface/player.inteface';

interface PlayerContextType {
  players: Player[];
  setPlayers: (player: Player[]) => void;
}

const defaultState = {
  players: [],
  setPlayers: () => {},
};

export const PlayerContext = createContext<PlayerContextType>(defaultState);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PlayerProvider = ({ children }: Props) => {
  const [players, setPlayers] = useState<Player[]>([]);

  const value = { players, setPlayers };

  useEffect(() => {
    const getApi = async () => {
      const resp = await axios.get(
        'https:lista-b-santa-cecilia-server-production.up.railway.app/player'
      );
      const { playersAll } = resp.data;
      setPlayers(playersAll);
    };
    getApi();
  }, []);

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};
