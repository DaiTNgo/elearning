import {
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
} from '@mui/material';
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
				defaultValue={''}
				render={({ field: { onChange, value }, fieldState: { error } }) => {
					return (
						<RadioGroup value={value} onChange={onChange}>
							{generateRadioOptions()}
						</RadioGroup>
					);
				}}
			/>
		</FormControl>
	);
};
export default FormInputRadio;
