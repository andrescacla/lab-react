import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, defaultValues, type IFormInput } from '../../Schemas/TestSchema'
import { FormController } from './FormController'
import { SelectController } from './SelectController'

export const TestForm = () => {
  const methods = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues
  })
  const {handleSubmit} = methods

  const onSubmit = (data: IFormInput) => {
    console.log(data)
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormController 
          name="firstName"
          labelText="First Name"
          required
        />
        <FormController 
          as="input"
          name="lastName"
          labelText="Last Name"
          required
        />
        <FormController 
          name="age"
          as={'select'}
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
