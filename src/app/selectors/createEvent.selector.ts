import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectCreateEventState = createFeatureSelector<any>("createEvent");

export const selectCreateEvent = createSelector(
  selectCreateEventState,
  (state) => state,
);
