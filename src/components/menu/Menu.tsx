
import styled from "styled-components"
export const Menu = ()=> {
    return(
        <StyledMenu>
                <ul>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">Work</Link></li>
                    <li><Link href="#">Contact</Link></li>
                </ul>
            </StyledMenu>
    )
}
const StyledMenu = styled.nav`
ul {
display: flex;
gap: 60px;
  
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

