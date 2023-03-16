const getCharactersUrl = () => {
    return 'https://rickandmortyapi.com/api/character';
};

const getSingleCharacterUrl = (characterId) => {
    return `https://rickandmortyapi.com/api/character/${characterId}`;
};

export const RickAndMortyAPI = {
    getCharactersUrl,
    getSingleCharacterUrl,
};
