import toast from 'react-hot-toast'
import axios from 'axios'

export const addQuestion = (questionContent, questionUrl) => async (dispatch) => {

    try {
        const base_Url = 'https://palak-quora-api.herokuapp.com'
        const res = await axios.post(`${base_Url}/api/v1/question/add`, {
            questionContent, questionUrl
        })
        console.log(res.data)
        const { question, message } = res.data

        function refresh() {
            window.location.href = '/';
            console.log("done")
        }

        if (question) {
            toast.success(message)
            
            //window.location.href = '/';
            setTimeout(refresh, 1000)
            
            dispatch({
                type: "ADD_QUESTION",
                payload: { question }
            })
        } else {
            toast.error(message)
            dispatch({
                type: "ADD_QUESTION_FAILED"
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
};