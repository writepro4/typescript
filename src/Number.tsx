// import react from "react";
import styled from "styled-components";
import React from "react";

interface IContainerProps {
    isBlue: boolean
}

const Container = styled.span<IContainerProps>`
  color:${props => (props.isBlue ? "blue" : "black")}
`;

interface IProps {
    count: number;
}

const Number: React.FunctionComponent<IProps> = ({count}) => (
    <Container isBlue={count > 10}>{count}</Container>
);

export default Number;