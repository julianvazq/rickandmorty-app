import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';

export const STATUS = {
    Idle: 'Idle',
    Error: 'Error',
    Fetching: 'Fetching',
    Success: 'Success',
};

const useFetch = ({ request, url, lsKey }) => {
    const [lsData, setLsData] = useLocalStorage({ key: lsKey });
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(STATUS.Idle);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setStatus(STATUS.Fetching);
                let data = null;
                if (request) {
                    data = await request?.();
                }
                if (url) {
                    const res = await fetch(url);
                    data = await res.json();
                }
                setLsData(data);
                setData(data);
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

        if (request && url) {
            throw Error(
                'Provide either a request that returns a Promise, or a URL.'
            );
        }

        if ((request || url) && data == null && status !== STATUS.Fetching) {
            fetchData();
        }
    }, [request, url, lsKey, lsData, setLsData, data, status]);

    return { data: data || lsData, status };
};

export default useFetch;
