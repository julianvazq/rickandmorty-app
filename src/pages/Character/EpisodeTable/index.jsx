import React from 'react';
import * as S from './styles';

const EpisodesTable = ({ episodes }) => {
    return (
        <S.TableContainer>
            <S.Table>
                <S.THead>
                    <S.Row>
                        <S.Header>Episode</S.Header>
                        <S.Header>Name</S.Header>
                        <S.Header textAlign='right'>Released</S.Header>
                    </S.Row>
                </S.THead>
                <S.TBody>
                    {episodes.map((e) => (
                        <S.Row key={e.id}>
                            <S.Cell>{e.episode}</S.Cell>
                            <S.Cell>{e.name}</S.Cell>
                            <S.Cell textAlign='right'>{e.air_date}</S.Cell>
                        </S.Row>
                    ))}
                </S.TBody>
            </S.Table>
        </S.TableContainer>
    );
};

export default EpisodesTable;
