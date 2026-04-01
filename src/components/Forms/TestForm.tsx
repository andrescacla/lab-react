import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, defaultValues, type IFormInput } from '../../Schemas/TestSchema'
import { InputController } from './InputController'
import { SelectController } from './SelectController'

export const TestForm = () => {
  const methods = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues,
    mode: 'onSubmit'
  })
  const {handleSubmit} = methods
  const onSubmit = (data: IFormInput) => {
    console.log('Est')
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(data, null, 2))
        resolve(true)
      }, 2000)
    })
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputController 
          name="firstName"
          labelText="First Name"
          required
        />
        <InputController 
          name="lastName"
          labelText="Last Name"
          required
        />
        <InputController 
          name="age"
          labelText="Age"
          required
        />
        <SelectController 
          name='affiliateType'
          labelText='Affiliate Type'
          required
          option={[
            { value: 'type1', label: 'Type 1' },
            { value: 'type2', label: 'Type 2' },
            { value: 'type3', label: 'Type 3' }
          ]}

        />
        <button type="submit">Probar</button>
      </form>

    </FormProvider>
  )
}
