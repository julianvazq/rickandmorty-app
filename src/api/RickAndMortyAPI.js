const getCharactersUrl = () => {
    return 'https://rickandmortyapi.com/api/character';
};

const getCharacterByIdUrl = (characterId) => {
    return `https://rickandmortyapi.com/api/character/${characterId}`;
};

const getEpisodes = (episodeUrls) => {
    const fetches = episodeUrls.map(async (e) => {
        try {
            const res = await fetch(e);
            const data = await res.json();
            return data;
        } catch (error) {
            errorLogger();
            return null;
        }
    });
    return Promise.all(fetches).then((episodes) => episodes.filter(Boolean));
};

const errorLogger = (requestName, error) => {
    console.log(`Fetch error in ${requestName}: ${error}`);
};

export const RickAndMortyAPI = {
    getCharactersUrl,
    getCharacterByIdUrl,
    getEpisodes,
};
