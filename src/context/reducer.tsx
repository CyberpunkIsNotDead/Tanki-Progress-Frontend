import {
  IState,
  IAction
} from './types'

export default function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case 'loading':
      return {
        ...state, isLoading: true
      }

    case 'loaded':
      return {
        ...state, isLoading: false
      }
  
    default:
      break;
  }
}
