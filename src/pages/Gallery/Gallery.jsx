
import { Gallery } from "react-grid-gallery";
import Images from "./images";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { Parallax } from 'react-parallax';
import foto1 from '../../assets/galeria.jpg'

import './gallery.css'
import '../blog/blog.css'
import Carousel2 from "../../components/Carousel/Carousel2";

export default function Galery() {
    return (
        <>
        <Carousel2/>
        <Parallax
        bgImage={foto1}
        height='380px'
        bgImageAlt="Imagem de fundo"
        strength={800}>
           <h5 className='subDescription' id='text-focus-in'>Nosso portfólio de restauração de móveis apresenta uma ampla variedade de projetos em que trabalhamos, desde peças clássicas de madeira até móveis modernos e estofados. Cada peça apresentada em nosso portfólio foi cuidadosamente restaurada para refletir seu design original, mas com a adição de um toque moderno.</h5> 
        </Parallax>
            
            

            <br></br>
            <Gallery id="galeria"
                images={Images}/>
                </>
    );
}
