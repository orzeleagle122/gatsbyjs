import styled from 'styled-components';
import {Link} from 'gatsby';

export const NagivationWrapper=styled.nav`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    font-family:'Montserrat';
`;

export const Logo=styled.span`
    font-weight:700;
    font-size:20px;
    margin-right:10px;
`;

export const NavigationList=styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
`;

export const NavigationListItem=styled.li`
    font-weight:600;
    font-size:15px;
    margin-left:32px;
`;

export const LinkItem=styled(Link)`
    text-decoration:none;
    color:inherit;
`;