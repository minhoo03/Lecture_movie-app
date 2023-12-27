import React, { useState, useEffect } from "react"
import './input.css'

// 인터페이스
interface InputProps {
    placeholder: string;
    value: string;
    outline: boolean;
    type: 'text' | 'password';
}

// placeholder, value

export const Input = ({
    // 디폴트 값
    placeholder = "입력해 주세요.",
    value = "",
    outline = true,
    type = 'text'
}: InputProps) => {
    // 상태 값 지정
    const [text, setText] = useState<string>("");

    useEffect(() => {
        setText(value)
    }, [value])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    return (
        // UI
        <>
            <input type={type} className={
                `input-style ${outline ? 'input-outline' : undefined}`
            } placeholder={placeholder} value={text} onChange={handleChange} />
        </>
    )

}