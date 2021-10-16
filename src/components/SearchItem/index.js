import React from 'react';
import {View, Text} from 'react-native';

import {Ionicons} from '@expo/vector-icons'

import {Container, Banner, Title, RoteContainer, Rate} from './styles'

function SearchItem({data, navigatePage}){

    function detailMovie(){

        if(data.release_data === ''){
            alert('Sem data de lançamento!')
            return;
        }
        
        navigatePage(data)
    }

    return(
    <Container activeOpacity={0.7} onPress={detailMovie}>
        {data?.poster_path ? (
            <Banner
                resizeMethod="resize"
                source={{ uri: `https://image.tmdb.org/t/p/w500/${data?.poster_path}`}}
            />
        ) : (
            <Banner
            resizeMethod="resize"
            source={ require('../../assets/semfoto.png')}
        />
        )}

            <Title>{data?.title}</Title>

            <RoteContainer>
                <Ionicons name="md-star" size={12} color="#E7a74e" />
                <Rate>{data?.vote_average}/10</Rate>

            </RoteContainer>

    </Container>
    )
}

export default SearchItem;