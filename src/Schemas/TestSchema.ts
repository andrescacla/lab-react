import * as yup from "yup"

export const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
    lastName: yup.string().required(),
    affiliateType: yup.string().required(),
  })

export type IFormInput = yup.InferType<typeof schema>

export const defaultValues: IFormInput = {
  firstName: "",
  lastName: "",
  affiliateType: "type2",
  age: 0,
}