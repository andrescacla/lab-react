import {Controller, useFormContext} from 'react-hook-form'
import { TextInput } from './FormField'

type BaseControllerProps = {
  name: string
  labelText?: React.ReactNode
  required?: boolean
}

export const InputController = (props: BaseControllerProps) => {
  const { name, labelText, required, ...rest } = props
  const { control } = useFormContext()
  console.log({control})
  
  return (
    <Controller
      name={name}
      // control={control}
      render={({ field, fieldState: { error } }) => (
        <TextInput
          field={field}
          error={error?.message}
          labelText={labelText}
          required={required} 
          {...rest}  
        />
      )}
    />
  )
}
