import React from 'react';
import * as S from './styles';

const CharacterFilter = ({ filterValue, onFilterChange }) => {
    return (
        <S.Input
            type='text'
            placeholder='Filter characters...'
            value={filterValue}
            onChange={(e) => onFilterChange(e.target.value)}
        />
    );
};

export default CharacterFilter;
