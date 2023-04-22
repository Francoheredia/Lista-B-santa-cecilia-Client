export interface Player {
    id: string;
    name: string;
    appearances?: number;
    wins?: number;
    losses?: number;
    winrate?: string;
    badstreak: number;
  }