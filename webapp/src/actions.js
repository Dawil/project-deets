export const SEARCH_PROJECT = 'SEARCH_PROJECT'
export const SELECT_PROJECT = 'SELECT_PROJECT'
export const ADD_PROJECT = 'ADD_PROJECT'
export const GET_PROJECTS = 'GET_PROJECTS'
export const SET_MAKE_ACTIVE = 'SET_MAKE_ACTIVE'
export const UPDATE_PROJECT_STATUS = 'UPDATE_PROJECT_STATUS'

export const searchProject = jobNumber => dispatch => {
  let url = 'https://kxvyma0140.execute-api.ap-southeast-2.amazonaws.com/dev/search_project?jobnumber=' + jobNumber
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

export const addProject = (jobDetails, makeActive) => dispatch => {
  let isProjectActive
  makeActive ? isProjectActive = 'active' : isProjectActive = 'inactive'
  let url = 'https://kxvyma0140.execute-api.ap-southeast-2.amazonaws.com/dev/add-project' +
  '?project_number=' + jobDetails.jobNumber +
  '&project_name=' + jobDetails.jobName +
  '&make_active=' + isProjectActive
  let data
  fetch(url)
  .then(response => response.json())
  .then(response => {
    dispatch({
      type: ADD_PROJECT,
      payload: [jobDetails, isProjectActive]
    })
  })
}

export const getProjects = () => dispatch => {
  let url = 'https://kxvyma0140.execute-api.ap-southeast-2.amazonaws.com/dev/get-project'
  let data = []
  fetch(url)
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

export const selectProject = (jobNumber, jobName) => ({
  type: SELECT_PROJECT,
  payload: [jobNumber, jobName]
})

export const setMakeActive = boolean => ({
  type: SET_MAKE_ACTIVE,
  payload: !boolean
})

export const updateProjectStatus = (projectindex, value) => ({
  type: UPDATE_PROJECT_STATUS,
  payload: [projectindex, value],
  console: console.log([projectindex, value])
})
