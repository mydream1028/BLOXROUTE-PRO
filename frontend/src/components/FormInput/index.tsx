import { ChangeEvent } from "react";
import { StyledError, StyledForm, StyledFormInput } from "./style";

interface FormInputProps {
  error: string;
  name: string;
  placeholder: string;
  type?: string;
  cyDataId?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput: React.FC<FormInputProps> = ({
  error = "",
  name = "",
  placeholder = "",
  type = "text",
  cyDataId,
  value,
  onChange,
}) => {
  return (
    <StyledForm>
      <StyledFormInput
        name={name}
        placeholder={placeholder}
        type={type}
        cy-data-id={cyDataId}
        onChange={onChange}
        value={value}
      />
      {error ? <StyledError>{error}</StyledError> : null}
    </StyledForm>
  );
};
