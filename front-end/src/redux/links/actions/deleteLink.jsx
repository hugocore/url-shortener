import axios from 'axios'

const DELETE_LINK = 'DELETE_LINK'

const deleteLink = (code) => dispatch => {
  const onSuccess = code => ({ type: DELETE_LINK, code })

  axios.delete(`${process.env.API_URL}${code}`)
    .then((response) => {
      return response.data
    })
    .then((data) => {
      dispatch(onSuccess(code))
    })
    .catch((err) => {
      console.error.bind(err)
    })
}

export default deleteLink
export { DELETE_LINK }
