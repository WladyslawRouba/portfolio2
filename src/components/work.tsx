import styled from "styled-components"
import {Theme} from "../styles/Theme.tsx"

type WorkPropsType = {
    src: string
    span: string
}
export const Work = (props: WorkPropsType )=>{
    return(
        <StyledContainer>
            <Link href= "#">
                <Image src= {props.src} alt=""/>
                <StyledSpan>{props.span}</StyledSpan>
            </Link>
        </StyledContainer>

      
    )
}
const Image = styled.img`
    border-radius: 4px;
    height: auto;
   width: 100%;  
    object-fit: contain;
   
    `

const StyledContainer = styled.div`
    
position: relative;
    display: inline-block;
    ::before {
        opacity: 0;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(0.1, 0.1, 0.1, 0.1) 0%, #000 100%);
        transition: all 0.2s ease-in;
    }
    
    
`

const StyledSpan = styled.span`
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 40px;
    letter-spacing: -0.01em;
    color: ${Theme.colors.font};
`
const Link = styled.a`
        &:hover ${StyledSpan} {
            opacity: 1;
            top: 50%;
            transition: all 0.2s ease-in;
        }
    &:hover::before {
        opacity: 1;
    }
    
`






    


