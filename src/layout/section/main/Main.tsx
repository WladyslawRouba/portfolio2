import styled from "styled-components"
import  {Button}  from "../../../components/button/Button.tsx"
import photo from "../../../assets/images/photo.webp"
import {Theme} from "../../../styles/Theme.tsx"
import {Container} from "../../../components/Container.tsx"
import {Font} from "../../../styles/Common.tsx";

export const Main = ()=> {
    return(
        <StyledSection>
            <Container>
                <BoxFlex>
                    <StyledContainer>
                        <Title>Hi, I am Your Name
                            A Product Designer
                            based in City.</Title>
                        <Text>I help businesses and companies reach
                            their goals by designing user-centric digital
                            products & interactive experiences.</Text>
                        <Button>hi@yourname.com</Button>
                    </StyledContainer>
                    <Photo src={photo} alt="#"/>
                </BoxFlex>
            </Container>
        </StyledSection>
    )
}
const Photo = styled.img`
    overflow: hidden;
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 50% ;
   
    @media (max-width: 931px) {
        margin-top: 50px;
    }
        
      
@media ${Theme.media.mobile} {
    width: 240px;
    height: 240px;
   
}
`
const Title = styled.h1`
    ${Font({family: " 'Manrope', sans-serif", weight: 700, Fmax: 54, Fmin: 36, lineHeight: 1.18519  })}
    color: ${Theme.colors.font}
    letter-spacing: -0.01em;
    padding-bottom: 25px;
    @media ${Theme.media.mobile} {
        text-align: center;

`
const Text = styled.p`
    ${Font({family: " 'Manrope', sans-serif", weight: 600, Fmax: 20, Fmin: 18, lineHeight: 1.5 })}
    color: ${Theme.colors.secondary};
    letter-spacing: -0.03em;
    margin-bottom: 90px;
    max-width: 390px;
    @media (max-width: 931px){
        text-align: center;
        max-width: 600px;
        margin-bottom: 50px;
    }
    @media ${Theme.media.mobile} {
        margin-bottom: 50px;
        text-align: center;
        
      
    }
    `

const StyledSection = styled.section`
    background-color: ${Theme.colors.primary};
    padding-bottom: 160px;
    
`
const StyledContainer = styled.div`
    max-width: 500px;
    width: 100%;
    padding-top: 160px;
    @media (max-width: 931px){
        text-align: center;
        padding-top: 80px;
    }
    @media ${Theme.media.mobile}{
        padding-top: 65px;
    }
    
`
const BoxFlex = styled.div`
display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap-reverse;

    @media (max-width: 931px){
       justify-content: center;
        align-items: center;
    }  
    
    @media ${Theme.media.tablet} {
        margin-top: 50px;
       
        
        
    }
`


