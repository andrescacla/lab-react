import * as yup from "yup"

export const schema = yup
  .object({
    firstName: yup.string().required('Nombre es requerido').min(3, 'Nombre debe tener al menos 3 caracteres'),
    age: yup.number().positive('Edad debe ser un numero mayor a 0').integer().required('Edad es requerida'),
    lastName: yup.string().required('Apellido es requerido'),
    affiliateType: yup.string().required('Tipo de afiliado es requerido'),
  }).required()

export type IFormInput = yup.InferType<typeof schema>

export const defaultValues: IFormInput = {
  firstName: "",
  lastName: "",
  affiliateType: "type2",
  age: 0,
}