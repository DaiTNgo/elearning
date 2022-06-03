import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Controller } from 'react-hook-form';
import { ICourseTypes } from '../types';

export const FormInputDropdown = ({
  name,
  control,
  label,
  options,
}: {
  name: string;
  control: any;
  label: string;
  options: ICourseTypes[];
}) => {
  const generateSingleOptions = () => {
    return options.map((option: ICourseTypes) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size={'small'}>
      <InputLabel>{label}</InputLabel>
      <Controller
        control={control}
        name={name}
        defaultValue={'react'}
        render={({ field: { onChange, value } }) => {
          return (
            <Select onChange={onChange} value={value}>
              {generateSingleOptions()}
            </Select>
          );
        }}
      />
    </FormControl>
  );
};
