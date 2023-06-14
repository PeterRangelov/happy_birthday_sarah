export interface Clue {
  direction: Direction;
  idx: number;
  imgSrc?: string;
  clue?: string;
}

export enum Direction {
  ACROSS,
  DOWN
}
