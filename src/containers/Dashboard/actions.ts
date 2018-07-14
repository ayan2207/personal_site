import axios, { AxiosResponse, AxiosError } from "axios";
import { GET_FEED_START, GET_FEED_DONE } from "./constants";

/**
 * Redux action to create a fetch request.
 * @export
 * @param {(string | string[])} [id]
 * @param {string[]} [tags]
 * @param {string} [lang]
 * @returns
 */
export function GetFeed(id?: string | string[], tags?: string[], lang?: string) {
  return function(dispatch: any, getState: any) {
    dispatch({ type: GET_FEED_START });
  };
}
