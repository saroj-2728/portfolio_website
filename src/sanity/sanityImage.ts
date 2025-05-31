import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/client'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const { projectId, dataset } = client.config()

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source).url()
    : "/images/imageLoadError.png"

export { urlFor }