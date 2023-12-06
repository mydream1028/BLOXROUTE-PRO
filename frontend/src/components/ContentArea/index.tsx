import { ChangeEvent } from "react";
import { StyledError, StyledForm, StyledContentArea } from "./style";

interface FormInputProps {
  error: string;
  name: string;
  placeholder: string;
  cyDataId?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const ContentArea: React.FC<FormInputProps> = ({
  error = "",
  name = "",
  placeholder = "",
  value,
  cyDataId,
  onChange,
}) => {
  return (
    <StyledForm>
      <StyledContentArea
        name={name}
        placeholder={placeholder}
        cy-data-id={cyDataId}
        onChange={onChange}
        value={value}
      />
      {error ? <StyledError>{error}</StyledError> : null}
    </StyledForm>
  );
};
