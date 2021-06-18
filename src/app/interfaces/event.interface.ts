import { IFighter } from './fighter.interface';

interface IEventLocation {
  city: string;
  country: string;
}

export interface IEvent {
  id: number;
  name: string;
  slogan: string;
  date: string;
  matchNumber: number;
  location: IEventLocation;
  fighters: Array<IFighter>;
}
