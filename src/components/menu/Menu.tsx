import{Theme} from '../../styles/Theme.tsx';
import styled from "styled-components"
export const Menu = ()=> {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    return(
        <StyledMenu>
                <ul>
                    <li><Link onClick={() => scrollToSection("home")}>Home</Link></li>
                    <li><Link onClick={() => scrollToSection("work")}>Work</Link></li>
                    <li><Link onClick={() => scrollToSection("contact")}>Contact</Link></li>
                </ul>
            </StyledMenu>
    )
}
const StyledMenu = styled.nav`
ul {
display: flex;
gap: 60px;
  
}
    @media ${Theme.media.mobile} {
        display:none
    }
`
const Link = styled.a`
    color: ${Theme.colors.font};
font-family: 'Manrope', sans-serif;
    padding: 25px 0;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.03em;
    
    &:hover { color : darkgrey; cursor: pointer;}
    
`

