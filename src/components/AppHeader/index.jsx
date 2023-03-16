import React from 'react';
import * as S from './styles';

const AppHeader = () => {
    return (
        <S.HeaderContainer>
            <S.HomeLink to='/'>
                <S.Header>Rick & Morty</S.Header>
            </S.HomeLink>
        </S.HeaderContainer>
    );
};

export default AppHeader;
