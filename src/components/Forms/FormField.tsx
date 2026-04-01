/* eslint-disable @typescript-eslint/no-explicit-any */

interface ITextInputProps {
  field: React.InputHTMLAttributes<HTMLInputElement>,
  error?: string,
  labelText?: React.ReactNode,
  required?: boolean,
  [key: string]: any
}
export const TextInput = (props: ITextInputProps) => {
  const { field, error, labelText, required, ...rest } = props
  return (
    <div >
      {
        labelText && <label htmlFor={field.name} >{labelText} {required && <span aria-label="required" >*</span>}</label>
      }
      <input {...field} id={field.name} {...rest}  />
      {error && (<span style={{color: 'red'}}> {error} </span> )}
    </div>
  )
}
