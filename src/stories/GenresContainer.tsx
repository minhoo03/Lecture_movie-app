import React from 'react'
import styled from 'styled-components'

// 실제 로직에 사용할 부분
export const StyledGenres = styled.div<{
    backgroundColor?: string;
    color?: string;
}>`
    display: flex;

    span {
        min-width: 40px;
        font-size: 10px;

        padding: 8px;
        border-raius: 4px;
        margin: 8px 8px 0 0;
        background: ${({backgroundColor}) => backgroundColor ? backgroundColor : undefined}}
        color: ${({color}) => color ? color : undefined}}
    }
`

StyledGenres.defaultProps = {
    backgroundColor: "#0f0f0f",
    color: "#ffffff"
}

interface GenresProps {
    color: string;
    label : string;
    backgroundColor: string;
}


// 문서화 하려는 로직
export const GenresContainer = ({
    backgroundColor,
    color,
    label
}: GenresProps) => {
return (
        // UI
        <>
            <StyledGenres color={color} backgroundColor={backgroundColor}>
                <span>{label}</span>
            </StyledGenres>
        </>
    )

}
