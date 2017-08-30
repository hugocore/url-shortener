import axios from 'axios'

const ADD_LINK = 'ADD_LINK'

const addLink = (url) => dispatch => {
  const onSuccess = data => ({ type: ADD_LINK, data })

  axios.post(process.env.API_URL, {
      url,
    })
    .then((response) => {
      return response.data
    })
    .then((data) => {
      dispatch(onSuccess(data))
    })
    .catch((err) => {
      console.error.bind(err)
    })
}

export default addLink
export { ADD_LINK }
