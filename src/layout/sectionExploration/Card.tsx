import styled from 'styled-components'
type CardPropsType = {
    img: string ;
}
export const Card = (props: CardPropsType) => {
    return(
    <CardContainer>
        <a href="#">
            <Photo src={props.img} alt="card"/>
        </a>


    </CardContainer>
    )
}
const CardContainer = styled.div`
   
    
`
const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    `