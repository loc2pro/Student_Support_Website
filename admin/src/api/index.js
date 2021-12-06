const api =
    process.env.NODE_ENV !== "production" ?
    "https://quanlysinhvien-app.herokuapp.com/" :
    "http://localhost:5000" ;
 ;

export default api;