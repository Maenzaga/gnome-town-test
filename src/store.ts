import { combineReducers, createStore, Store, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { SearchGnomeState } from "./features/searchGnomes/searchGnomes.state";
import { searchGnomeReducer } from "./features/searchGnomes";

export interface ApplicationState {
  gnomeList: SearchGnomeState;
}

const configureStore = (): Store<ApplicationState> => {
  const rootReducer = combineReducers<ApplicationState>({
    gnomeList: searchGnomeReducer,
  });
  return createStore(rootReducer, applyMiddleware(...[thunk]));
};

export const store: Store<ApplicationState> = configureStore();
