import {Theme} from "./Theme.tsx";
type FontPropsType = {
    family?: string;
    weight?: number;
    color?: string;
    lineHeight?: number;
    Fmax?: number;
    Fmin?: number;


}
export const Font = ({family, weight, color, lineHeight, Fmax, Fmin} : FontPropsType)=> `
    font-family: ${family || "Manrope"};
    color: ${color || Theme.colors.font};
    font-weight: ${weight || 400};
    line-height: ${lineHeight || 1.2};
    font-size: calc((100vw - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`
