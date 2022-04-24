import FormHelperText from "@mui/material/FormHelperText";
import Input, { InputProps } from "@mui/material/Input";
import { useController, UseControllerProps } from "react-hook-form";

type FormInputProps = UseControllerProps<any> &
  Omit<InputProps, "value" | "onChange">;

export const FormInput = ({
  name,
  control,
  defaultValue = "",
  rules,
  shouldUnregister,
  ...props
}: FormInputProps) => {
  const {
    field: { ref, ...rest },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    shouldUnregister,
    defaultValue,
  });

  /* prettier-ignore */
  const renderError = () => (error ? (
    <FormHelperText error={!!error}>{error.message}</FormHelperText>
  ) : null);

  return (
    <>
      <Input error={!!error} inputRef={ref} {...rest} {...props} />
      {renderError()}
    </>
  );
};
