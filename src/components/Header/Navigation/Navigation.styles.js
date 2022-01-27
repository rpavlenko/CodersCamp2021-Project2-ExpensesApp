import styled from "styled-components";

export const StyledNav = styled.nav`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 0 36px;
  background-color: #F8D478;
  z-index: 6;
`;

export const StyledLine = styled.div`
  width: 100%;
  height: 4px;
  background-color: #6A5F5F;
  border-radius: 25px;
`;

export const StyledList = styled.ul`
  display: flex;
  padding: 10px 0 26px;
  flex-direction: column;
`;

export const StyledItem = styled.li`
  display: flex;
  padding: 14px;
  align-items: center;
  cursor: pointer;

  &:hover{
    background-color: #eecc74;
  }
`;

export const StyledIcon = styled.img`
  display: block;
  margin-right: 24px;
  width: 45px;
`;

export const StyledName = styled.p`
  font-size: 30px;
`;