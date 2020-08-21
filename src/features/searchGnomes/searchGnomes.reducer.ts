import { Reducer } from "redux";
import { SearchGnomeState } from "./searchGnomes.state";
import {
  SearchGnomesActions,
  SearchGnomesActionTypes,
} from "./searchGnomes.actions";

const initialState: SearchGnomeState = {
  isLoading: false,
};

export const searchGnomeReducer: Reducer<
  SearchGnomeState,
  SearchGnomesActions
> = (
  state: SearchGnomeState = initialState,
  action: SearchGnomesActions
): SearchGnomeState => {
  switch (action.type) {
    case SearchGnomesActionTypes.SEARCH_GNOMES_REQUEST:
      return { ...state, isLoading: true };
    case SearchGnomesActionTypes.SEARCH_GNOMES_SUCCESS:
      return { ...state, isLoading: false, gnomes: action.payload.data };
    default:
      return state;
  }
};
