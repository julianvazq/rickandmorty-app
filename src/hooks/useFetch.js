import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';

export const STATUS = {
    Idle: 'Idle',
    Error: 'Error',
    Fetching: 'Fetching',
    Success: 'Success',
};

const useFetch = ({ url, lsKey }) => {
    const [lsData, setLsData] = useLocalStorage({ key: lsKey });
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(STATUS.Idle);

    useEffect(() => {
        const fetchData = async (url) => {
            try {
                setStatus(STATUS.Fetching);
                const res = await fetch(url);
                const json = await res.json();
                setLsData(json);
                setData(json);
                setStatus(STATUS.Success);
            } catch (error) {
                setStatus(STATUS.Error);
                console.log('Error: ', error);
            }
        };

        if (lsData) {
            setStatus(STATUS.Success);
            return;
        }

        if (url && data == null && status !== STATUS.Fetching) {
            fetchData(url);
        }
    }, [url, lsKey, lsData, setLsData, data, status]);

    return { data: data || lsData, status };
};

export default useFetch;
