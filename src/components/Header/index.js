import React from 'react';

import { Feather } from '@expo/vector-icons';

import {Container, MenuButton, Title} from './styles';
import { useNavigation } from '@react-navigation/native'

function Header({title}){

    const navegation = useNavigation();

    return(
        <Container>
            <MenuButton onPress={ () => navegation.openDrawer() }>
                <Feather name="menu" size={36} color= "#FFF" />
            </MenuButton>
            <Title>{title} </Title>
        </Container>
    )
}

export default Header;