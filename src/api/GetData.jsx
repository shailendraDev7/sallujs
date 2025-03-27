import { useEffect, useState } from 'react'
import { getPost } from './PostApi';

export const getData = () => {
    const [data, setData] = useState([]);

    const getPostData = async () => {
        const res = await getPost();
        setData(res.data);
        console.log(res.data);
    }

    useEffect(() => {
        getPostData();
    }, []); 

    return data;
}
