export const SEARCH_PROJECT = 'SEARCH_PROJECT'

export const searchProject = jobNumber => dispatch => {
  let url = 'https://kxvyma0140.execute-api.ap-southeast-2.amazonaws.com/dev/search_project?jobnumber=' + jobNumber
  let data
  fetch(url)
  .then(response => response.json())
  .then(response => {
    dispatch({
      type: SEARCH_PROJECT,
      payload: response
    })
  })
}
