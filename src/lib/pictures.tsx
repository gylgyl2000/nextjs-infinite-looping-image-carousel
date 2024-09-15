import { StaticImageData } from "next/image"
import image1 from "../../public/images/image1.jpg"
import image2 from "../../public/images/image2.jpg"
import image3 from "../../public/images/image3.jpg"
import image4 from "../../public/images/image4.jpg"
import image5 from "../../public/images/image5.jpg"
import image6 from "../../public/images/image6.jpg"

const Pictures: PictureData[] = [
    {
        id: 1,
        title: 'Loutre 1',
        description: "Une loutre sur plan d'eau",
        src: image1
    },
    {
        id: 2,
        title: 'Loutre 2',
        description: "Une loutre allongée sur un rocher dans l'herbe",
        src: image2
    },
    {
        id: 3,
        title: 'Loutre 3',
        description: "Une loutre est assise sur un rocher et regarde vers le haut",
        src: image3
    },
    {
        id: 4,
        title: 'Loutre 4',
        description: "Une loutre dans l'eau",
        src: image4
    },
    {
        id: 5,
        title: 'Loutre 5',
        description: "Une loutre qui se tient dans l’herbe",
        src: image5
    },
    {
        id: 6,
        title: 'Loutre 6',
        description: "Gros plan d'une loutre",
        src: image6
    }
]

export { Pictures }