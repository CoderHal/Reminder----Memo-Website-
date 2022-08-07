// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...posts, action.payload];
        case "UPDATE":
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case "DELETE":
            return posts.filter((post) => post._id !== action.payload); //filter the id that we don't want to get
        default:
            return posts;
    }
}