import axios from "axios";
import {ActionType} from "../action-types";
import {Action} from "../action";

export const searchRepositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const {data} = axios.get(\
        'https://registry.npm.org/-/v1/search',
        {params: {text: term}}
      );

      const names = data.objects.map((result: any) => {
        result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      })
    } catch(err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      })
    }
  }
}