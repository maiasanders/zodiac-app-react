export function getImageUrl(name: string) {
    return new URL(`/public/images/${name}`, import.meta.url).href
}
