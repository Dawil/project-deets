import {
  TOGGLE_SEARCHING,
  SEARCH_PROJECT,
  SELECT_PROJECT,
  ADD_PROJECT,
  GET_PROJECTS,
  SET_MAKE_ACTIVE,
  UPDATE_PROJECT_STATUS,
  SET_PROJECT_METADATA,
  UPDATE_PROJECT_NOTES,
  CHANGE_HOTKEY_DROPDOWN,
  ADD_AUTH
} from './actions.js'

const initialState = {
  authObject: null,
  searchStatus: false,
  searchData: null,
  selectedProject: {
    'Job Number': null,
    'Name': null,
    'Accounting Centre': '',
    'Group': ''
  },
  myProjects: [],
  makeActive: true,
  detailedInfo: [],
  hotKeyLists: [
      { 'project': '', 'hotkey': 'ctrl + 1' },
      { 'project': '', 'hotkey': 'ctrl + 2' },
      { 'project': '', 'hotkey': 'ctrl + 3' },
      { 'project': '', 'hotkey': 'ctrl + 4' },
      { 'project': '', 'hotkey': 'ctrl + 5' },
      { 'project': '', 'hotkey': 'ctrl + 6' },
      { 'project': '', 'hotkey': 'ctrl + 7' },
      { 'project': '', 'hotkey': 'ctrl + 8' },
      { 'project': '', 'hotkey': 'ctrl + 9' },
      { 'project': '', 'hotkey': 'ctrl + 0' }
  ]
}

export default function (state = initialState, {type, payload}) {
  switch (type) {
    case TOGGLE_SEARCHING: {
      return {
        ...state,
        searchStatus: payload
      }
    }
    case SEARCH_PROJECT: {
      return {
        ...state,
        searchData: payload,
        searchStatus: 'searched'
      }
    }
    case SELECT_PROJECT: {
      return {
        ...state,
        selectedProject: {...state.selectedProject, 'Job Number': (payload[0].substring(0,6) + '-' + payload[0].substring(6,8)), 'Name':payload[1]}
      }
    }
    case ADD_PROJECT: {
      return {
        ...state,
        myProjects: [...state.myProjects, {
          'project_name': payload[0]['Name'],
          'project_number': payload[0]['Job Number'],
          'project_status': payload[1]
        }]
      }
    }
    case GET_PROJECTS: {
      return {
        ...state,
        myProjects: payload
      }
    }
    case SET_MAKE_ACTIVE: {
      return {
        ...state,
        makeActive: payload
      }
    }
    case SET_PROJECT_METADATA: {
      return {
        ...state,
        selectedProject: {...state.selectedProject, [payload[1]]: payload[2]}
      }
    }
    case UPDATE_PROJECT_STATUS: {
      return {
        ...state,
        myProjects: state.myProjects.map((entry, i) => i == payload[0] ? {...entry, project_status: payload[1]} : entry)
      }
    }
    case UPDATE_PROJECT_NOTES: {
      return {
        ...state,
        myProjects: state.myProjects.map((entry, i) => i == payload[1] ? {...entry, project_text: payload[0]} : entry)
      }
    }
    case CHANGE_HOTKEY_DROPDOWN: {
      return {
        ...state,
        hotKeyLists: state.hotKeyLists.map((entry, i) => i == payload[1] ? {...entry, [payload[2]]: payload[0]} : entry)
      }
    }
    case ADD_AUTH: {
      return {
        ...state,
        authObject: payload
      }
    }
    default:
      return state
  }
}
