import * as actionTypes from './actionTypes';
import { ACResType, ThunkType } from '../../types/ACTypes';

export const saveResult: ACResType = (element: string, id: string) => {
  return {
    type: actionTypes.STOREEL,
    element: element,
    id: id
  };
};
// Async using thunk
export const storeEl: ThunkType = (element: string, id: string) => {
  return (dispatch: Function) => {setTimeout(() => {dispatch(saveResult(element, id)); }, 1000);
  };
};
export const removeEl: ACResType = (element: string) => {
  return {
    type: actionTypes.REMOVEEL,
    element: element
  };
};
