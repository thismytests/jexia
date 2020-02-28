export interface AuthAction {
  type: string;
  token?: string;
}

export interface AuthState {
  token?: number;
  name?: string;
}
