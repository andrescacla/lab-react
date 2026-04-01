import {Controller, useFormContext} from 'react-hook-form'
import { SelectInput } from './SelectInput'

export interface SelectOption {
  value: string;
  label: string;
}

type BaseControllerPRops = {
  name: string
  labelText?: React.ReactNode
  required?: boolean,
  option: SelectOption[]
}



export const SelectController = (props: BaseControllerPRops) => {
  const {  name, labelText, required, option, ...rest } = props
  const { control, formState: { errors } } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <SelectInput
          field={field}
          error={errors[name]?.message as string}
          labelText={labelText}
          required={required} 
          options={option}
          {...rest}  
        />
      )}
    />
  )
}
