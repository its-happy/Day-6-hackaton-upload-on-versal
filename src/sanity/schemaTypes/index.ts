import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './productdata'
import clientdata from './clientdata'
import { report } from './report'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema ,clientdata, report]
}
