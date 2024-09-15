interface PictureData {
    id: number
    title: string
    description: string
    src: StaticImageData
}

interface CarouselProps {
    images: PictureData[]
}

interface CustomLinkProps {
    href: string
    title: string
    className: string
}