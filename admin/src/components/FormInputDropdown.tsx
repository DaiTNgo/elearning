import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { ICourseTypes } from '../types';

const FormInputDropdown = ({
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
			<InputLabel id='select-type'>{label}</InputLabel>
			<Controller
				control={control}
				name={name}
				defaultValue={''}
				render={({ field: { onChange, value }, fieldState: { error } }) => {
					return (
						<>
							<Select labelId='select-type' onChange={onChange} value={value}>
								{generateSingleOptions()}
							</Select>
							<FormHelperText error={error ? true : false}>
								{error ? error.message : null}
							</FormHelperText>
						</>
					);
				}}
			/>
		</FormControl>
	);
};

export default FormInputDropdown;