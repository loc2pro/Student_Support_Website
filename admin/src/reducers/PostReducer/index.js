export const postReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "GET_POST":
            return {
                ...state,
                post: payload,
            };
        case "SET_POSTS":
            return {
                ...state,
                isLoading: false,
                posts: payload,
            };
        case "CREATE_POST":
            return {
                ...state,
                isLoading: false,
                posts: [...state.posts, payload],
            };
        case "DELETE_POST":
            return {
                ...state,
                isLoading: false,
                posts: state.posts.filter((post) => post._id !== payload),
            };
        case "UPDATE_POST":
            return {
                ...state,
                isLoading: false,
                posts: state.posts.map((post) =>
                    post._id === payload._id ? payload : post
                ),
            };
        default:
            return state;
    }
};