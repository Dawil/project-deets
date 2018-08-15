import { SEARCH_PROJECT } from './actions.js'

const initialState = {
  sidePanelItems: [
    {number:'234096-00', shortName: 'some project name' },
    {number:'246783-00', shortName: 'some project name' },
    {number:'267043-01', shortName: 'some project name' }
  ],
  searchData: null
}

export default function (state = initialState, {type, payload}) {
  switch (type) {
    case SEARCH_PROJECT: {
      return {
        ...state,
        searchData: payload
      }
    }
    default:
      return state
  }
}
