import styled from "styled-components"
import {SectionTitle} from '../../../components/SectionTitle.tsx';
import {Button} from '../../../components/button/Button.tsx';
import {Container} from '../../../components/Container.tsx';
import {Theme} from '../../../styles/Theme.tsx';

export const Contacts = () =>{
    return(

        <Wrapper>
            <Container>
                <FlexContainer>
                    <SectionTitle>Contact Me</SectionTitle>
                    <Text>If you are looking to hire a product designer,
                        I’m currently available for freelance work</Text>
                   <Button>hi@yourname.com</Button>
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
    padding: 25px;
    padding-bottom: 48px;
    max-width: 390px;

`
const FlexContainer = styled.div `
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

