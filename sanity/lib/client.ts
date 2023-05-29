import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, apikey, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  token:apikey,
  useCdn,
})
