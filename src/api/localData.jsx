import React, { useEffect, useState } from 'react';
import axios from "axios";

export const getData = () => {
    const [data, setData] = useState([]);

    // Create an instance fro axios
    const api = axios.create({
        baseURL:'topics.json'
    });

    //get the data
    const getPost = () => {
        return api.get();
    }

    // fetch the data
    const getPostData = async () => {
        try {
            const res = await getPost();
            setData(res.data);
        } catch (error) {
            console.error('Error Fetching Data', error);
        }
    }

    useEffect(() => {
        getPostData();
    }, []);


    return data;
}
