import axios from 'axios'

const GET_ALL_LINKS = 'GET_ALL_LINKS'

const getAllLinks = () => dispatch => {
  const onSuccess = data => ({ type: GET_ALL_LINKS, data })

  axios.get(`http://localhost:9292/`)
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

export default getAllLinks
export { GET_ALL_LINKS }
