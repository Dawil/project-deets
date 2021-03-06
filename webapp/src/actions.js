var debounce = require('debounce');

export const TOGGLE_SEARCHING = 'TOGGLE_SEARCHING'
export const SEARCH_PROJECT = 'SEARCH_PROJECT'
export const SELECT_PROJECT = 'SELECT_PROJECT'
export const ADD_PROJECT = 'ADD_PROJECT'
export const GET_PROJECTS = 'GET_PROJECTS'
export const SET_MAKE_ACTIVE = 'SET_MAKE_ACTIVE'
export const UPDATE_PROJECT_STATUS = 'UPDATE_PROJECT_STATUS'
export const SET_PROJECT_METADATA = 'SET_PROJECT_METADATA'
export const UPDATE_PROJECT_NOTES = 'UPDATE_PROJECT_NOTES'
export const CHANGE_HOTKEY_DROPDOWN = 'CHANGE_HOTKEY_DROPDOWN'
export const ADD_AUTH = 'ADD_AUTH'


export const searchProject = (type, value) => dispatch => {
  dispatch({
    type: TOGGLE_SEARCHING,
    payload: 'searching'
  })
  let url = 'https://kxvyma0140.execute-api.ap-southeast-2.amazonaws.com/dev/search_project?type=' + type + '&value=' + value
  let data
  fetch(url)
  .then(response => response.json())
  .then(response => {
    if (response.value.length !== 0) {
      dispatch({
        type: SEARCH_PROJECT,
        payload: response
      })

    } else {
      dispatch({
        type: SEARCH_PROJECT,
        payload: {
          'value': [
            {
              Jobs: []
            }
          ]
        }
      })
    }
  })
}

export const addProject = (jobDetails, makeActive, authObject) => dispatch => {
  let isProjectActive
  makeActive ? isProjectActive = 'active' : isProjectActive = 'inactive'
  let url = 'https://kxvyma0140.execute-api.ap-southeast-2.amazonaws.com/dev/add-project' +
  '?project_number=' + jobDetails['Job Number'] +
  '&project_name=' + jobDetails['Name'] +
  '&make_active=' + isProjectActive
  let data
  fetch(url, {
        headers: {
            "authtoken": authObject.token,
            "accesstoken": authObject.accessToken
        },
    })
  .then(response => response.json())
  .then(response => {
    dispatch({
      type: ADD_PROJECT,
      payload: [jobDetails, isProjectActive]
    })
  })
}

export const getProjects = (authObject) => dispatch => {
  let url = 'https://kxvyma0140.execute-api.ap-southeast-2.amazonaws.com/dev/get-project'
  let data = []
  fetch(url, {
        headers: {
            "authtoken": authObject.token,
            "accesstoken": authObject.accessToken
        },
    })
  .then(response => response.json())
  .then(response => {

    response.table_entries.Items.map(item => {
      data.push({[item.project_number]: item})
    })

    dispatch({
      type: GET_PROJECTS,
      payload: response.table_entries.Items
    })
  })
}

export const selectProject = (jobNumber, jobName, jobData, projectindex) => dispatch => {
  let url = 'https://kxvyma0140.execute-api.ap-southeast-2.amazonaws.com/dev/search_project?type=AccountingCentreCode' + '&value=' + jobData.AccountingCentreCode
  let url1 = 'https://kxvyma0140.execute-api.ap-southeast-2.amazonaws.com/dev/search_project?type=GroupCode' + '&value=' + jobData.GroupCode
  let url2 = 'https://kxvyma0140.execute-api.ap-southeast-2.amazonaws.com/dev/search_project?type=RegionCode' + '&value=' + jobData.RegionCode
  let url3 = 'https://kxvyma0140.execute-api.ap-southeast-2.amazonaws.com/dev/search_project?type=PracticeCode' + '&value=' + jobData.PracticeCode

  dispatch({
    type: SELECT_PROJECT,
      payload: [jobNumber, jobName]
    })
  fetch(url).then(response => response.json()).then(response => {
    dispatch({ type: SET_PROJECT_METADATA,payload: [projectindex, 'Accounting Centre', response.value[0].AccountingCentreName] })
  })
  fetch(url1).then(response => response.json()).then(response => {
    dispatch({ type: SET_PROJECT_METADATA,payload: [projectindex, 'Group', response.value[0].GroupName] })
  })
  fetch(url2).then(response => response.json()).then(response => {
    dispatch({ type: SET_PROJECT_METADATA,payload: [projectindex, 'Region', response.value[0].RegionName] })
  })
  fetch(url3).then(response => response.json()).then(response => {
    dispatch({ type: SET_PROJECT_METADATA,payload: [projectindex, 'Practice', response.value[0].PracticeName] })
  })
}

export const setMakeActive = boolean => ({
  type: SET_MAKE_ACTIVE,
  payload: !boolean
})


export const updateProjectStatus = (projectindex, number, value) => dispatch => {
  let url = 'https://kxvyma0140.execute-api.ap-southeast-2.amazonaws.com/dev/update-project?project_number=' +
  number + '&project_value=' + value + '&update_type=project_status'
  dispatch({
    type: UPDATE_PROJECT_STATUS,
    payload: [projectindex, value]
  })
  fetch(url)
}

function expensiveOperation(text, number) {
  let value = text
  if (text == '') {
    value = 'blankTextField'
  }
  console.log('value', value)
  let url = 'https://kxvyma0140.execute-api.ap-southeast-2.amazonaws.com/dev/update-project?project_number=' +
  number + '&project_value=' + encodeURIComponent(value) + '&update_type=project_text'
  fetch(url)
}
const thing = debounce(expensiveOperation, 300)

export const updateProjectNotes = (text, index, number) => dispatch => {

  thing(text, number)

  dispatch({
    type: UPDATE_PROJECT_NOTES,
    payload: [text, index]
  })
}

export const changeHotkeyDropdown = (value, index, dropdown) => ({
  type: CHANGE_HOTKEY_DROPDOWN,
  payload: [value, index, dropdown]
})

export const addAuth = (authObject) => ({
  type: ADD_AUTH,
  payload: authObject
})
