import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from '@mui/material';
import { defaults } from 'joi';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { ICourseTypes } from '../types';
const FormInputRadio = ({
  name,
  control,
  options,
}: {
  name: string;
  control: any;
  options: ICourseTypes[];
}) => {
  const generateRadioOptions = () => {
    return options.map((option) => (
      <FormControlLabel
        value={option.value}
        label={option.label}
        control={<Radio />}
        key={option.value}
      />
    ));
  };
  return (
    <FormControl size={'small'}>
      <Controller
        control={control}
        name={name}
        defaultValue={'normal'}
        render={({ field: { onChange, value } }) => (
          <RadioGroup value={value} onChange={onChange}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};
export default FormInputRadio;
