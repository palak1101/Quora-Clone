const initialState = {
    answers: []
}

const answersReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD_ANSWER":
            const { answer } = payload
            return {
                answers: [...state.answers, answer]
            }

        case "ADD_ANSWER_FAILED":
            return state
        default:
            return state
    }
}

export default answersReducer;