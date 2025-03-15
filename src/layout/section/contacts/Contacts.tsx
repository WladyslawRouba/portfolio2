import styled from "styled-components"
import {Font} from '../../../styles/Common.tsx';
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

