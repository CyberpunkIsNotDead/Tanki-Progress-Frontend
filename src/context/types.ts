export interface IEntry {
  timestamp?: string,
  kills?: number,
  deaths?: number,
  cry?: number,
  score?: number,
  time?: number,
  hasPremium?: boolean
}

export interface IData {
  login: string,
  daily: Array<IEntry>,
  weekly: Array<IEntry>,
  monthly: Array<IEntry> // type for an empty array? f these errors
}

export interface IState {
  data: null | IData,
  isLoading: boolean, // check if loading / if data exists
}

// type for actions

export interface IAction {
  type: string,
  payload?: any
}
