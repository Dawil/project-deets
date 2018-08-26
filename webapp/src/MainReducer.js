import {
  SEARCH_PROJECT,
  SELECT_PROJECT,
  ADD_PROJECT,
  GET_PROJECTS,
  SET_MAKE_ACTIVE,
  UPDATE_PROJECT_STATUS,
  SET_PROJECT_METADATA
} from './actions.js'

const initialState = {
  searchData: null,
  selectedProject: {
    'Job Number': null,
    'Name': null,
    'Accounting Centre': '',
    'Group': ''
  },
  myProjects: [],
  makeActive: true,
  detailedInfo: []
}

export default function (state = initialState, {type, payload}) {
  switch (type) {
    case SEARCH_PROJECT: {
      return {
        ...state,
        searchData: payload
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
          'project_name': payload[0].jobName,
          'project_number': payload[0].jobNumber,
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
    default:
      return state
  }
}
