import React from 'react'
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url'

export const getData = async () => {
  const response = await client.fetch(`*[_type=="product"]`);
  return response;
};



const builder = imageUrlBuilder(client)

export function urlFor(source:any) {
  return builder.image(source)
}