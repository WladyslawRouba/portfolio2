import styled from "styled-components"
import { Theme } from "../../../styles/Theme.tsx"
import { SectionTitle } from "../../../components/SectionTitle.tsx"
import { Button } from "../../../components/button/Button.tsx"
import { Container } from "../../../components/Container.tsx"
import { Font } from "../../../styles/Common.tsx"
export const Contacts = ()=> {
    return (
        <StyledContacts id="contact">
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={"name"}/>
                    <Field placeholder={"subject"}/>
                    <Field placeholder={"message"} as={"textarea"}/>
                    <Button >Contact</Button>

                </StyledForm>
            </Container>

        </StyledContacts>

    )
}

const StyledContacts = styled.section`
    position: relative;



`
const StyledForm = styled.form`
    padding-top: 80px;
    padding-bottom: 80px;
max-width: 540px;
width: 100%;
display: flex;
flex-direction: column;
    align-items: center;
gap: 16px;
margin: 0 auto;
   
    textarea {
        resize: none;
        height: 150px;
        
    }

`
const Field = styled.input`
    width: 100%;
    background-color: #323232;
    border-radius: 5px;
    border: 1px solid ${Theme.colors.font};
    padding: 7px 15px;
    color: ${Theme.colors.font};
    text-transform: capitalize;
    cursor: pointer;
    letter-spacing: 0.05em;
   
    ${Font({family: " 'Manrope', sans-serif", weight: 400, Fmax: 16, Fmin: 16, })}

    &::placeholder {
        color: ${Theme.colors.font};
    }
    &:focus-visible {
        outline: 1px dashed ${Theme.colors.font};
    }
`
















/*import styled from "styled-components"
import {Font} from '../../../styles/Common.tsx';
import {SectionTitle} from '../../../components/SectionTitle.tsx';
import {Button} from '../../../components/button/Button.tsx';
import {Container} from '../../../components/Container.tsx';
import {Theme} from '../../../styles/Theme.tsx';

export const Contacts = () =>{
    return(

        <Wrapper id="contact">
            <Container>
                <FlexContainer>
                    <SectionTitle>Contact Me</SectionTitle>
                    <Text>If you are looking to hire a product designer,
                        I’m currently available for freelance work</Text>
                   <Button></Button>
                </FlexContainer>
        </Container>
        </Wrapper>


    )
}
const Wrapper = styled.div `
    background-color: ${Theme.colors.primary };
    padding-bottom: 120px;
`
const Text = styled.p`
    color: ${Theme.colors.secondary};
    ${Font({weight: 600, lineHeight: 1.5, Fmax: 26, Fmin: 18})}
    padding: 35px 0;
   max-width: 550px;
    @media ${Theme.media.mobile} {
        padding-top: 18px;
        padding-bottom: 35px;
        max-width: 366px;
    }
   

   

`
const FlexContainer = styled.div `
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

*/