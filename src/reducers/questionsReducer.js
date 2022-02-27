const initialState = {
    questions: []
}

const questionsReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD_QUESTION":
            const { question } = payload
            return {
                questions: [...state.questions, question]
            }
        case "ADD_QUESTION_FAILED":
            return state
        // case "GET_QUESTIONS":
        //     const { questions } = payload
        //     return {
        //         questions: [...state.questions, questions]
        //     }
        default:
            return state
    }
}

export default questionsReducer;