import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import { Container } from "../../components/Container.tsx"
import {FlexWrapper} from "../../components/FlexWrapper.tsx"
import {Theme} from "../../styles/Theme.tsx";

export const Header = ()=> {
    return (

        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                   <ContainerLogo>
                    <Logo/>
                    <Text>Logo Here</Text>
                   </ContainerLogo>
                <Menu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>


    )
}

const StyledHeader = styled.header`
    background-color: #323232;
    color: ${Theme.colors.font};
    
}
    
`
const ContainerLogo = styled.div`
display: flex;
align-items: center;
    gap: 10px;
`
const Text = styled.p`
    font-weight: 800;
    font-size: 20px;
    letter-spacing: -0.03em;
    font-family: "Manrope", sans-serif;
    padding: 25px 0;

`