import sanityClient from "@sanity/client"
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    // If you were using react app then you'll use process.env.VARIABLENAME
    projectId: import.meta.env.VITE_PROJECT_ID,
    dataset: 'production',
    appVersion: '2024-02-27',
    token: import.meta.env.VITE_PROJECT_TOKEN,
    useCdn: true,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => {
    return  builder.image(source);
}