import { type SchemaTypeDefinition } from 'sanity'
import product from './schemas/project-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
