import {getPost} from './PostApi.js';

export const getData = async () => {    
    try{
        const res = await getPost();
        return res.data;
    } catch(error){
        console.error('Error Fetching Data', error);
    }        
}