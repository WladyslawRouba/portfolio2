import styled from "styled-components"
import  {Button}  from "../../../components/button/Button.tsx"
import photo from "../../../assets/images/photo.webp"
import {Theme} from "../../../styles/Theme.tsx"
import {Container} from "../../../components/Container.tsx"

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
    margin-top: 130px;

@media ${Theme.media.mobile} {
    width: 240px;
    height: 240px;
}
`
const Title = styled.h1`
    font-family: 'Manrope', sans-serif;
    color: ${Theme.colors.font};
    font-weight: 700;
    font-size: 54px;
    line-height: 1.18519;
    letter-spacing: -0.01em;
    padding-bottom: 25px;
   
    `
const Text = styled.h1`
    font-family: 'Manrope', sans-serif;
    color: ${Theme.colors.secondary};
    font-weight: 600;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: -0.03em;
    margin-bottom: 88px;
    max-width: 390px;
    
    `

const StyledSection = styled.section`
    background-color: ${Theme.colors.primary};
    padding-bottom: 160px;
    
`
const StyledContainer = styled.div`
    max-width: 500px;
    width: 100%;
    padding-top: 160px;

`
const BoxFlex = styled.div`
display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`


