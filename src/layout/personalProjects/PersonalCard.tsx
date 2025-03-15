import styled from 'styled-components'



type PersonalCardPropsType = {
    photo: string;
}
export const PersonalCard = (props: PersonalCardPropsType) => {
return (
    <div>
        <a href="#">
            <Photo src={props.photo} alt="card"/>
        </a>


    </div>

)

}

const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`