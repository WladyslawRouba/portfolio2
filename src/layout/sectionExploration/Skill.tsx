import iconSprite from "../../assets/images/svg-sprite.svg";


type SkillPropType ={
    skillId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    title?: string;
}
export const Skill = (props: SkillPropType) => {
    return (
        <div style={{textAlign: "center"}}>
            <svg width={props.width || "120"} height={props.height || "120"} viewBox={props.viewBox || "0 0 120 120"}
                 fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconSprite}#${props.skillId}`}/>
            </svg>
            {props.title && (
                <p style={{marginTop: "10px", fontSize: "16px", fontWeight: "bold", color: '#DEDEDE'}}>
                    {props.title}
                </p>
            )}
        </div>
    );
}
























/*import styled from 'styled-components'
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
    `*/