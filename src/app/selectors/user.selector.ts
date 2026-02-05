import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "./../models/User.model";

export const selectUserState = createFeatureSelector<User[]>("user");

export const selectUsers = createSelector(selectUserState, (state) => state);
