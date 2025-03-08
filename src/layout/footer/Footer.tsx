import styled from 'styled-components'
import { SocialIcon } from './SocialIcon.tsx'
import {Theme} from '../../styles/Theme.tsx'
import {Container} from '../../components/Container.tsx'


export const Footer = () =>{
    return(
        <StyledContainer>
            <Container>
            <FlexWrapper>
                <p>Made by Your Name — Copyright 2021</p>
                <Wrapper>
                    <Link>
                        <SocialIcon socialId ="whatsApp"  />
                    </Link>
                    <Link>
                        <SocialIcon socialId ="basketball" />
                    </Link>
                    <Link>
                        <SocialIcon socialId ="linkedin" />
                    </Link>
                    <Link>
                        <SocialIcon socialId ="twitter" />
                    </Link>
                    <Link>
                        <SocialIcon socialId ="be" />
                    </Link>
                </Wrapper>
            </FlexWrapper>
            </Container>
        </StyledContainer>
    )
}
const StyledContainer = styled.div`
    background-color: ${Theme.colors.primary};
    color: ${Theme.colors.font};
    padding: 20px;
    
`
const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 40px 0;
    
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 250px;
`
const Link = styled.a`
    display: inline-block;
    background: none;
    border: none;
padding: 0;
    margin: 0;
    &:hover {
        background-color: lightgrey;git 
    
 
`

