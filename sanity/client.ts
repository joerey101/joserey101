import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId } from './env'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Set to false towards the beginning to ensure fresh data
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}
