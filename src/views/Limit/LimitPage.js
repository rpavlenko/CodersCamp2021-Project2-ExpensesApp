import CategoryList from '../../components/CategoryList/CategoryList';
import Input from '../../components/Input/Input';
import { PrimaryButton } from '../../components/Button/Button';

import {
  StyledLimitPage,
  StyledLimitTitle,
  StyledLimitText,
  StyledLimitGroup,
} from './LimitPage.styles';

export default function LimitPage() {
  return (
    <StyledLimitPage>
      <StyledLimitTitle>Ustaw limit miesięczny</StyledLimitTitle>
      <StyledLimitGroup>
        <StyledLimitText>Kategoria:</StyledLimitText>
        <CategoryList />
      </StyledLimitGroup>
      <Input type="text" placeholder="300 zł" inputLabel="Kwota:" />
      <PrimaryButton className="xxx" text="Dodaj" isActive={true} />
    </StyledLimitPage>
  );
}
