import {getPost} from './PostApi.jsx';

export const getData = async () => {    
    try{
        const res = await getPost();
        return res.data;
    } catch(error){
        console.error('Error Fetching Data', error);
    }        
}