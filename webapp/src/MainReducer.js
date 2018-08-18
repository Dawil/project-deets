import {
  SEARCH_PROJECT,
  SELECT_PROJECT,
  ADD_PROJECT,
  GET_PROJECTS,
  SET_MAKE_ACTIVE
} from './actions.js'

const initialState = {
  sidePanelItems: [
    {number:'234096-00', shortName: 'some project name' },
    {number:'246783-00', shortName: 'some project name' },
    {number:'267043-01', shortName: 'some project name' }
  ],
  searchData: null,
  selectedProject: null,
  myProjects: [],
  makeActive: true
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
        selectedProject: {'jobNumber':payload[0], 'jobName':payload[1]}
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
    default:
      return state
  }
}
