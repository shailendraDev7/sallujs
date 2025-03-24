 const api = axios.create({
    baseURL: 'https://fakestoreapi.com'
 });

 //get method

 export const getPost = () =>{
    return api.get(`/products`);
 }