import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { SearchGnomeState } from "./searchGnomes.state";
import gnomeService from "../../api/GnomeService";
import { AxiosResponse } from "axios";
import { Gnome } from "../../types";

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
  payload: { data: Gnome[] };
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

export const getGnomes = (): ThunkResult => {
  return async (dispatch) => {
    dispatch({ type: SearchGnomesActionTypes.SEARCH_GNOMES_REQUEST });
    return gnomeService.searchGnomes().then((response: AxiosResponse<any>) => {
      const responseData = response.data;
      dispatch({
        type: SearchGnomesActionTypes.SEARCH_GNOMES_SUCCESS,
        payload: {
          data: responseData.Brastlewark,
        },
      });
    });
  };
};
