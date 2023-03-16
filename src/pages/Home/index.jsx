import React, { useState } from 'react';
import { RickAndMortyAPI } from '../../api/RickAndMortyAPI';
import { LS_KEYS } from '../../constants';
import useFetch, { STATUS } from '../../hooks/useFetch';
import CharacterCount from './CharacterCount';
import CharacterFilter from './CharacterFilter';
import CharacterList from './CharacterList';
import * as S from './styles';

const Home = () => {
    const { data: characters = [], status } = useFetch({
        url: RickAndMortyAPI.getCharactersUrl(),
        lsKey: LS_KEYS.Characters,
    });
    const [filter, setFilter] = useState('');

    const filteredCharacters = getFilteredPodcasts(characters?.results, filter);

    if (status === STATUS.Error) {
        return <p>Failed to load characters.</p>;
    }

    if (status === STATUS.Idle || status === STATUS.Fetching) {
        return <p>Loading characters...</p>;
    }

    return (
        <>
            <S.FilterContainer>
                <CharacterCount count={filteredCharacters.length} />
                <CharacterFilter
                    filterValue={filter}
                    onChangeHandler={setFilter}
                />
            </S.FilterContainer>
            <CharacterList characters={filteredCharacters || []} />
        </>
    );
};

const getFilteredPodcasts = (podcasts, filter) => {
    return (
        podcasts?.filter((p) => {
            const nameLowerCase = p.name?.toLowerCase();
            const filterLowerCase = filter?.toLowerCase();
            const containsName = nameLowerCase.includes(filterLowerCase);
            return containsName;
        }) || []
    );
};

export default Home;
