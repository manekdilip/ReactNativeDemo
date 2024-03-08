import ranSlice from '../randomUser/slice';
import favSlice from '../favourites/slice';

//Register all your reducers here, E.g: "home: homeSlice",
const reducers = {
  user: ranSlice,
  fav: favSlice,
};
export default reducers;
