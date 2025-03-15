import styled from "styled-components";
import {Font} from "../styles/Common.tsx"
import {Theme} from "../styles/Theme.tsx"
export const SectionTitle= styled.h2`
    ${Font({family: "'Manrope' sans-serif", weight: 700, Fmax: 36, Fmin: 28 })}
    letter-spacing: -0.01em;
    text-align: center;
    color: ${Theme.colors.font};
    
`
