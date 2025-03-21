import styled from "styled-components"
import  {Button}  from "../../../components/button/Button.tsx"
import photo from "../../../assets/images/photo.webp"
import {Theme} from "../../../styles/Theme.tsx"
import {Container} from "../../../components/Container.tsx"
import {Font} from "../../../styles/Common.tsx"
import Tilt from 'react-parallax-tilt';

export const Main = ()=> {
    const handleClick = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    };


    return(
        <StyledSection id="home">
            <Container>
                <BoxFlex>
                    <StyledContainer>
                        <Title>
                            Hi, I am Wladyslaw Rouba A frontend developer based in Spain.
                        </Title>
                        <Text>I help businesses and companies reach
                            their goals by designing user-centric digital
                            products & interactive experiences.</Text>
                        <Button> <a onClick={() => handleClick("contact")}>Contact</a></Button>
                        <StyledBtn onClick={() => handleClick("work")}>Featured Work</StyledBtn>
                    </StyledContainer>
                    <Tilt
                        className="parallax-effect-img"
                       tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                       transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}
                    >
                        <Photo src={photo} alt="#"/>
                    </Tilt>
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
    @media ${Theme.media.mobile} {
        width: 240px;
        height: 240px;
    }
    @media (max-width: 931px) {
        margin-top: 50px;
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
    min-height: auto;
    background-color: ${Theme.colors.primary};
    padding-bottom: 100px;
    @media (max-width: 931px){
        padding-bottom: 50px;
    }
    @media ${Theme.media.mobile}{
        padding-bottom: 10px;
    }
    
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
    
`
const StyledBtn = styled.a`
    display: inline-block;
    ${Font({family:" 'Manrope' sans-serif", Fmax: 18, Fmin: 16, weight: 700, lineHeight: 1})}
    width: 230px;
    position: relative;
   left: 11%;
    margin-top: 50px;
    margin-bottom: 100px;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: ${Theme.colors.font};
    &:hover {
        cursor: pointer;
        color: ${Theme.colors.secondary};
        
    }
   @media (max-width: 931px) {
       //left: 50%;
     
    }

    &::before {
        content: "";
        position: absolute;
        top: -25px; 
        left: -50px;
        transform: translate(-50%, 50%);
        width: 2px;
        height: 30px;
        background-color: white;
        color: ${Theme.colors.font};
        
        }
    &::after {
        content: "";
        position: absolute;
        top: -10px;
        left: -50px;
        transform: translate(-50%, 220%) rotate(45deg);
        width: 10px;
        height: 10px;
        border-right: 2px solid white;
        border-bottom: 2px solid white;
        color: ${Theme.colors.font};
        
        
    }
        @media (max-width: 931px) {
            left: -5%;

            &::before, &::after {
                left: 10px;
            }
        }
    @media ${Theme.media.mobile}{
        &::before, &::after {
            left: 10px;
        }
    }

`


