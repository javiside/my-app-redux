// Reducing verbosity from the reducers (taking an object an overriding/updating the new values)
export const updateObject = (oldObject: Object, updatedValues: Object) => {
    return {
      ...oldObject,
      ...updatedValues
    };
  };
  