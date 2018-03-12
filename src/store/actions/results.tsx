import * as actionConst from './actionConst';
import { ACResType, ThunkType } from './typings';

export const saveResult: ACResType = (element: string, id: string) => {
  return {
    type: actionConst.STOREEL,
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
    type: actionConst.REMOVEEL,
    element: element
  };
};
