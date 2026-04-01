/* eslint-disable @typescript-eslint/no-explicit-any */

interface IFieldProps {
  as?: React.ElementType,
  field: React.InputHTMLAttributes<HTMLInputElement>,
  error?: string,
  labelText?: React.ReactNode,
  required?: boolean,
  [key: string]: any
}
export const FormField = (props: IFieldProps) => {
  const { as: Component = "input", field, error, labelText, required, ...rest } = props
  return (
    <div >
      {
        labelText && <label htmlFor={field.name} >{labelText} {required && <span aria-label="required" >*</span>}</label>
      }
      <Component id={field.name} value={field.value} onChange={field.onChange} onBlur={field.onBlur} {...rest} />
      {error && (<span> {error} </span> )}
    </div>
  )
}
