
import { Gallery } from "react-grid-gallery";
import Images from "./images";

export default function Galery2() {
    return (
        <div className="galleryContainer">
            <div className="gallery">
            <h2>Nossa Galeria </h2>
                <p>Nosso portfólio de restauração de móveis apresenta uma ampla variedade de projetos em que trabalhamos, desde peças clássicas de madeira até móveis modernos e estofados. Cada peça apresentada em nosso portfólio foi cuidadosamente restaurada para refletir seu design original, mas com a adição de um toque moderno.</p>
            </div>
            <Gallery
                images={Images}
            />
        </div>
    );
}
