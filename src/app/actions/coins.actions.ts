import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Coins } from "../models/Coins.model";

export const ADD_COINS = "[COINS] Add";
export const UPDATE_COINS = "[COINS] UPDATE";

export class AddCoins implements Action {
  readonly type = ADD_COINS;

  constructor(public payload: any) {}
}

export class UpdateCoins implements Action {
  readonly type = UPDATE_COINS;

  constructor(public payload: any) {}
}

export type Actions = AddCoins | UpdateCoins;
