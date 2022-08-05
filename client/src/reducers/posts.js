// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return posts;
        case "CREATE":
            return posts;
            
            break;
    
        default:
            return posts;
    }
}