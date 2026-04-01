import {Controller, useFormContext} from 'react-hook-form'
import { FormField } from './FormField'

type BaseControllerPRops = {
  name: string
  labelText?: React.ReactNode
  required?: boolean
}
type PolymorphicProps<T extends React.ElementType> = BaseControllerPRops & {
  as?: T
} & Omit<React.ComponentPropsWithoutRef<T>, keyof BaseControllerPRops | "as">
export const FormController = <T extends React.ElementType>(props: PolymorphicProps<T>) => {
  const { as: Component = "input", name, labelText, required, ...rest } = props
  const { control, formState: { errors } } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormField
          as={Component}
          field={field}
          error={errors[name]?.message as string}
          labelText={labelText}
          required={required} 
          {...rest}  
        />
      )}
    />
  )
}
