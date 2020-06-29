import React from "react";

interface IInputProps {
    value:string;
    onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}
//React.FunctionComponent<> 인터페이스를 추가해줘야 타입스크립트가 인식함
export const Input: React.FunctionComponent<IInputProps> = ({value, onChange}) => (
    <input type="text" placeholder="Name" value={value} onChange={onChange}/>
    );

interface IFormProps {
    onFormSubmit: (event: React.FormEvent) => void;
}

export const Form: React.FunctionComponent<IFormProps> = ({children,onFormSubmit}) => (
    <form onSubmit={onFormSubmit}>{children}</form>
)