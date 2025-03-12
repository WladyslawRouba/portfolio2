import styled from "styled-components"
import { Icon } from "../icon/Icon"
import { Theme } from "../../styles/Theme.tsx"

type ButtonPropsType = {
    children : string;
}



export const Button = ({ children }: ButtonPropsType) => {
    return(

        <StyledBtn> <Icon iconId="mail" width="20" height="16" viewBox="0 0 20 20"/>{children}</StyledBtn>
        

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
    @media (max-width: 931px){
        margin: 0 auto;
    }
    @media ${Theme.media.mobile} {
       margin: 0 auto;
    }
`

