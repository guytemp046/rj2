import { Alignment } from '../constants/alignment.constants';

interface IFighterName {
  firstName?: string;
  surname: string;
}

interface IFighterImages {
  background: string;
  foreground: string;
}

export interface IFighter {
  name: IFighterName;
  position: Alignment;
  images: IFighterImages;
}
