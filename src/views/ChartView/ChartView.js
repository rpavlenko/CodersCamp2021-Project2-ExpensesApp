import { IconButton, PrimaryButton } from '../../components/Button/Button';

export default function ChartView() {
  return (
    <>
      <ArrowButtonStyled>
        <IconButton imageName={Arrow}></IconButton>
      </ArrowButtonStyled>
      <StyledChartView>
        <InputDateStyled>
          <Input Input type="date" inputLabel="Data"></Input>
        </InputDateStyled>
        <PrimaryButton
          className="xxx"
          text="Potwierdź"
          isActive={true}
        ></PrimaryButton>
      </StyledChartView>
    </>
  );
}
