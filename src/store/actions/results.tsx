import * as actionConst from './actionConst';
import { ACResType, ThunkType } from './typings';

// SaveResult action is triggered after "the server" returns an answer to storeEl 
export const saveResult: ACResType = (element: string, id: string) => {
  return {
    type: actionConst.STOREEL,
    element: element,
    id: id
  };
};

// "Async" function using thunk
export const storeEl: ThunkType = (element: string, id: string) => {
  return (dispatch: Function) => {setTimeout(() => {dispatch(saveResult(element, id)); }, 1000);
  };
};
// Delete the selected element from the result store
export const removeEl: ACResType = (element: string) => {
  return {
    type: actionConst.REMOVEEL,
    element: element
  };
};
