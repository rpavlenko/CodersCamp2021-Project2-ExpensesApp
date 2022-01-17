import styled from "styled-components";

export const ItemBox = styled.div`
    display: flex;
    justify-content: space-around; 
    width: 100%;
    max-width: 400px;
    height: 43px;
    margin-top: 10px; 
    margin-bottom: 10px;
    // TODO Add colors depending on category  
    background-color: #A7C97C; 
    border-radius: 15px;
`;
export const FirstColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 55%;
`;
export const SecondColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
`;
export const ThirdColumn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const StyledText = styled.p`
    display: flex;
    align-self: center; 
    font-size: 13px;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 600; 
    color: #6A5F5F;
`;
export const StyledTitle = styled.p`
    font-size: 13px;
    font-family: 'Baloo 2', sans-serif;
    color: #6A5F5F;
`;
export const StyledAmount = styled.p`
    display: flex
    font-size: 15px;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 600; 
    color: ${(props) => (props.isExpense ? '#F4600C' : '#05510D')};
    align-self: center;
`;
export const StyledIcon = styled.img`
    padding-right: 8px;
`;