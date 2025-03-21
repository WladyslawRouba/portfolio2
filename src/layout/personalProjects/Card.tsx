

import styled from 'styled-components'
type PersonalCardPropsType = {
    photo: string;
}
 export const PersonalCard = (props: PersonalCardPropsType) => {
    return (
        <div>

                <Photo src={props.photo} alt="card"/>



        </div>

    )

}




const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`










/*import styled from 'styled-components'

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
<div className="item" data-value="1">1</div>,
    <div className="item" data-value="2">2</div>,
    <div className="item" data-value="3">3</div>,
    <div className="item" data-value="4">4</div>,
    <div className="item" data-value="5">5</div>,
*/