import styled from "styled-components"
import { Icon } from "../icon/Icon"
import { Theme } from "../../styles/Theme.tsx"

export const Button = ()=> {
    return(
        <>
        <StyledBtn> <Icon iconId="mail" width="20" height="16" viewBox="0 0 20 20"/> hi@yourname.com</StyledBtn>
        
        </>
    )
}

const StyledBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 16px;
    background-color: #9D9D9D;
    border-radius: 4px;
    padding: 16px 48px;
    width: 293px;
    height: 57px;
    color: ${Theme.colors.font};
    &:hover { background-color: darkgrey;}
`

