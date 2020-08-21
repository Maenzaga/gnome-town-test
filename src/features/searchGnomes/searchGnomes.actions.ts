import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { SearchGnomeState } from "./searchGnomes.state";

export enum SearchGnomesActionTypes {
  SEARCH_GNOMES_REQUEST = "SEARCH_GNOMES_REQUEST",
  SEARCH_GNOMES_SUCCESS = "SEARCH_GNOMES_SUCCESS",
  SEARCH_GNOMES_FAIL = "SEARCH_GNOMES_FAIL",
}

export interface SearchGnomesRequest extends Action {
  type: typeof SearchGnomesActionTypes.SEARCH_GNOMES_REQUEST;
}

export interface SearchGnomesSuccess extends Action {
  type: typeof SearchGnomesActionTypes.SEARCH_GNOMES_SUCCESS;
  payload: { data: [] };
}

export interface SearchGnomesFail extends Action {
  type: typeof SearchGnomesActionTypes.SEARCH_GNOMES_FAIL;
  payload: { error: string };
}

export type SearchGnomesActions =
  | SearchGnomesRequest
  | SearchGnomesSuccess
  | SearchGnomesFail;

type ThunkResult = ThunkAction<
  void,
  SearchGnomeState,
  undefined,
  SearchGnomesActions
>;
