import * as UserActions from "./../actions/user.actions";

export function userReducer(state: any[] = [], action: any) {
  switch (action.type) {
    case UserActions.ADD_USER:
      return [...state, action.payload];
    case UserActions.UPDATE_USER:
      return [action.payload];
    case UserActions.REMOVE_USER:
      return (state = []);
    default:
      return state;
  }
}
