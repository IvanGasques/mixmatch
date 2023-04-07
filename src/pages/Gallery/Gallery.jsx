
import { Gallery } from "react-grid-gallery";
import Images from "./images";
import { Parallax } from 'react-parallax';
import foto from '../../assets/galery/20220614_130250.jpg'

import './gallery.css'

export default function Galery2() {
    return (<div className="galleryContainer">
        <Parallax
        id="parallax"
            bgImage={foto}
            bgImageAlt="Imagem de fundo"
            strength={300}>
            

                <div className="gallery">
                    <h1 className="title">Nossa Galeria </h1>
                    <p className="texto">Nosso portfólio de restauração de móveis apresenta uma ampla variedade de projetos em que trabalhamos, desde peças clássicas de madeira até móveis modernos e estofados. Cada peça apresentada em nosso portfólio foi cuidadosamente restaurada para refletir seu design original, mas com a adição de um toque moderno.</p>
                </div></Parallax>
                <Gallery
                    images={Images}
                />
            </div>
    );
}
