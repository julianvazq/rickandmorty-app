import React from 'react';
import CharacterListitem from '../CharacterListItem';
import * as S from './styles';

const CharacterList = ({ characters }) => {
    if (!characters?.length) {
        return <p>No characters found.</p>;
    }

    return (
        <S.CharacterList>
            {characters.map((c) => {
                const characterId = c.id;
                return (
                    <CharacterListitem
                        key={characterId}
                        character={c}
                        characterId={characterId}
                    />
                );
            })}
        </S.CharacterList>
    );
};

export default CharacterList;
