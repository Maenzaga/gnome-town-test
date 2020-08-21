import { combineReducers, createStore, Store, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { SearchGnomeState } from "./features/searchGnomes/searchGnomes.state";
import { searchGnomeReducer } from "./features/searchGnomes";

export interface ApplicationState {
  gnomes: SearchGnomeState;
}

const configureStore = (): Store<ApplicationState> => {
  const rootReducer = combineReducers<ApplicationState>({
    gnomes: searchGnomeReducer,
  });
  return createStore(rootReducer, applyMiddleware(...[thunk]));
};

export const store: Store<ApplicationState> = configureStore();
