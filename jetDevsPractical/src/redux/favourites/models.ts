export interface FavAction {
  type: string;
  payload: FavPayload;
}

export interface FavPayload {
  user: object;
}
