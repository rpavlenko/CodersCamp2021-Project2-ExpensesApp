
import styled, { css } from "styled-components";

export const StyledInput = styled.input`
${(props) =>( props.type === "text" || props.type === "password" || props.type === "email" || props.type === "date") && css`
width: 400px;
height: 47px;
border: 3px solid #6a5f5f;
fill: #ffffff;
  `}

${(props) => props.type === "date" && css`
width: 267px;
height: 47px;
border: 2px solid #6a5f5f;
fill: #ffffff;
  `}`;