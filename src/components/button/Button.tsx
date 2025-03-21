import styled from "styled-components"
import { Theme } from "../../styles/Theme.tsx"
type ButtonTypeProps = {
    type?: "button" | "submit" | "reset";
    onClick?: () => void
    children: React.ReactNode;
}
export const Button = ({ type = "button", children, }: ButtonTypeProps)=> {
    return (
        <div>
            <StyledBtn type={type}><StyledText>{children}</StyledText></StyledBtn>
        </div>

    )
}
const StyledBtn = styled.button`
    gap: 16px;
    background-color: #9D9D9D;
    border-radius: 4px;
    padding: 16px 48px;
    width: 293px;
    height: 57px;
    color: ${Theme.colors.font};
    transition: font-size 0.3s , transform 0.3s;
    &:hover { background-color: darkgrey; cursor: pointer;
    }
    
    @media (max-width: 931px){
        margin: 0 auto;
    }
    @media ${Theme.media.mobile} {
       margin: 0 auto;
        width: 285px;
        
    }
    @media (max-width: 365px) {
        margin: 0 auto;
        width: 200px;
        
    }
`
const StyledText = styled.span ` 
   font-size: 18px;
    margin: 0 auto;
    transition: font-size 0.3s, transform 0.3s ease;
    ${StyledBtn}:hover & {
        font-size: 20px; 
        
       
    }
    `




/*type ButtonPropsType = {

    email?: string; // Параметр для email
    subject?: string; // Тема письма
    body?: string;   // Тело письма

}



export const Button = ({  email="hi@yourname.com", subject, body, }: ButtonPropsType) => {
    const handleClick = () => {
        window.location.href = `mailto:${email}?subject=${subject || ""}&body=${body || ""}`;


    };
    return(

        <StyledBtn onClick={handleClick} > <Icon iconId="mail" width="20" height="16" viewBox="0 0 20 20"/><StyledText>{"hi@yourname.com"}</StyledText>

           </StyledBtn>


    )
}
*/