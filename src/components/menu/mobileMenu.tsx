import{Theme} from '../../styles/Theme.tsx';
import styled from "styled-components"
export const MobileMenu = ()=> {
    return(
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <ul>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">Work</Link></li>
                    <li><Link href="#">Contact</Link></li>
                </ul>
            </MobileMenuPopup>

            </StyledMobileMenu>
    )
}
const StyledMobileMenu = styled.nav`
display: none;
    @media ${Theme.media.mobile} {
        display: block ;
    }
`
const MobileMenuPopup= styled.div<{isOpen:boolean}>`
    position: fixed;
   background-color: rgba(31, 31, 32, 0.9);
    z-index: 10;
    top: 0 ;
    left: 0;
    right: 0; 
    bottom: 0;
    display: none;
    
    
    ${props =>props.isOpen &&  `
display: flex;
justify-content: center;
align-items: center;
`}

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 60px;

    }
`
const BurgerButton = styled.button<{isOpen:boolean}>`
    position: fixed;
    top: 10px;
    right: 20px;
    width: 20px;
    height: 20px;
    z-index: 13;

    span {
        display: block;
        width: 30px;
        height: 2px;
        background-color: ${Theme.colors.font};
        position: relative;
        ${props =>props.isOpen && `
        background-color: rgba(0, 0, 0, 0 );
        `}


        &::before {
            content: "";
            position: absolute;
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${Theme.colors.font};
            transform: translateY(-10px);

            ${props => props.isOpen && `
transform: rotate(-45deg) translateY(0);
`}
        }

        &::after {
            content: "";
            position: absolute;
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${Theme.colors.font};
            transform: translateY(10px);


            ${props => props.isOpen && `
transform: rotate(45deg) translateY(0);
`}
        }

    }

    `



const Link = styled.a`
font-family: 'Manrope', sans-serif;
    padding: 25px 0;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.03em;
    &:hover { color : darkgrey;}
    
`

// background-color: ${({isOpen}) => (isOpen ? 'rgba(0, 0, 0, 0)': Theme.colors.primary)};
// transform: ${({isOpen}) => (isOpen ? 'rotate(-45deg) translateY(0)' : 'translateY(-10px)')};
// transform: ${({isOpen}) => (isOpen ? 'rotate(45deg) translateY(0)' : 'translateY(10px)')};
//background-color: ${({ isOpen }) => (isOpen ? 'rgba(0, 0, 0, 0.8)' : Theme.colors.primary)};