import styled from 'styled-components'
import { SocialIcon } from './SocialIcon.tsx'
import {Theme} from '../../styles/Theme.tsx'
import {Container} from '../../components/Container.tsx'


export const Footer = () =>{
    return(
        <StyledContainer>
            <Container>
            <FlexWrapper>
                <Text>Made by <Name>Wladyslaw Rouba</Name> — Copyright 2021</Text>
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
    position: relative;
    background-color: ${Theme.colors.primary};
    color: ${Theme.colors.font};
    padding: 20px;
    

    &::before {
        content: "";
        position: absolute;
        display: block;
       min-width: 100%;
        height: 1px;
        background-color: ${Theme.colors.secondary};
        //margin: -50px 0;
        top: -20%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        
        
    }
    
`
const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 40px 0;
   
  
    @media ${Theme.media.mobile} {
        display: flex;
        flex-wrap: wrap-reverse;
        justify-content: center;
        align-items: center;
        margin-bottom: 55px;
    }
    
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 250px;
    @media ${Theme.media.mobile}{
        padding-bottom: 25px;
    }
`
const Link = styled.a`
    display: inline-block;
    cursor: pointer;
    
    transition: 0.4s;
    &:hover {
        transform: scale(1.5);
        transition: 0.4s ;
    
 
`
const Text = styled.p`
color: ${Theme.colors.secondary};
`
const Name = styled.span`
    color: ${Theme.colors.font};

`

