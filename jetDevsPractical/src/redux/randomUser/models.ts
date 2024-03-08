export interface FetchAction {
  type: string;
  payload: AuthPayload;
}

export interface AuthPayload {
  page: number;
}
