import React from 'react';
import useFetch, { STATUS } from '../../../hooks/useFetch';
import * as S from './styles';

const LocationInformation = ({ locationUrl, locationName }) => {
    const { data: location, status } = useFetch({
        url: locationUrl,
        lsKey: locationName,
    });

    console.log('locationUrl', locationUrl);
    console.log('location', location);

    if (status === STATUS.Error) {
        return <p>Failed to load.</p>;
    }

    if (status === STATUS.Fetching) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <p>
                <S.Key>Name</S.Key>: <S.Value>{locationName}</S.Value>
            </p>
            {location && (
                <p>
                    <S.Key>Known residents</S.Key>:{' '}
                    <S.Value>{location.residents.length}</S.Value>
                </p>
            )}
        </>
    );
};

export default LocationInformation;
