import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

export const FormInputText = ({
  name,
  control,
  label,
}: {
  name: string;
  control: any;
  label: string;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={''}
      render={({
        field: { onChange, name, value, onBlur },
        fieldState: { error },
      }) => {
        // console.log(name,value);
        return (
          <TextField
            helperText={error ? error.message : null}
            size='small'
            error={!!error}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            fullWidth
            label={label}
            variant='outlined'
          />
        );
      }}
    />
  );
};
