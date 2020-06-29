// import react from "react";
import styled from "styled-components";
import React from "react";

const Container = styled.span``;

interface IProps {
    count: number;
}

const Number: React.FunctionComponent<IProps> = ({count}) => (
    <Container>{count}</Container>
);

export default Number;