import React from 'react';
import {
    NagivationWrapper,
    Logo,
    NavigationList,
    NavigationListItem,
    LinkItem
} from './Navigation.elements';

const Nagivation = () => {
    return ( 
        <>
            <NagivationWrapper>
                <Logo>
                    <LinkItem to="/">
                        HATTA
                    </LinkItem>                    
                </Logo>
                <NavigationList>
                    <NavigationListItem>
                        <LinkItem to='/articles'>articles</LinkItem>
                    </NavigationListItem>
                    <NavigationListItem>
                        <LinkItem to='/about'>about</LinkItem>
                    </NavigationListItem>
                    <NavigationListItem>
                        <LinkItem to='/gallery'>gallery</LinkItem>
                    </NavigationListItem>
                    <NavigationListItem>
                        <LinkItem to='/contact'>contact</LinkItem>
                    </NavigationListItem>
                </NavigationList>
            </NagivationWrapper>
        </>
     );
}
 
export default Nagivation;