import { StyledButton } from './Button.styled';

export const Button = ({ icon: Icon = null, type = 'button', children }) => {
  return (
    <StyledButton type={type}>
      {Icon && <Icon size="16" />}
      {children}
    </StyledButton>
  );
};

//  disabled = false,

//  disabled={disabled}
