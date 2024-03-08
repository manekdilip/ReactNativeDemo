import {RandomUser} from '../../components/listItem/ListItem.model';

export interface AppState {
  userData: Array<RandomUser>;
  isLoading: boolean;
  error: any;
}

export interface FavUState {
  favUser: Array<RandomUser>;
  isLoading: boolean;
  error: any;
}
