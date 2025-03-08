import styled from "styled-components"
import Image1 from "../../../assets/images/01.webp"
import Image2 from "../../../assets/images/02.webp"
import Image3 from "../../../assets/images/03.webp"
import Image4 from "../../../assets/images/04-.png"
import { Work } from "../../../components/work"
import {Container}  from "../../../components/Container.tsx"
import {Theme} from "../../../styles/Theme"


export const Works = ()=> {
    return(
        <section>
            <Container>

                <Title>Featured Work</Title>
                <BoxWorks>
                    <Work src={Image1} span={"InVersion"}/>
                    <Work src={Image2} span={"InVersion"}/>
                    <Work src={Image3} span={"InVersion"}/>
                    <Work src={Image4} span={"InVersion"}/>
                </BoxWorks>
            </Container>



        </section>
    )
}

const BoxWorks = styled.div`
    background-color:${Theme.colors.primary};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    overflow: hidden;
    margin: 0 auto;
    padding-bottom: 80px;
    
    &>:nth-child(2n) {
        transform: translateY(100px);
    }

`
const Title = styled.h2`
    padding-left: 40px;
    width: 350px;
    position: relative;
    margin-bottom: 80px;
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 1;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: ${Theme.colors.font};

    &::before {
        content: "";
        position: absolute;
        top: -25px; 
        left: 0;
        transform: translate(-50%, 50%);
        width: 2px;
        height: 30px;
        background-color: white;
        color: ${Theme.colors.font}
    }

    &::after {
        content: "";
        position: absolute;
        top: -10px;
        left: 0;
        transform: translate(-50%, 220%) rotate(45deg);
        width: 10px;
        height: 10px;
        border-right: 2px solid white;
        border-bottom: 2px solid white;
        color: ${Theme.colors.font}
    }


    
   

`
