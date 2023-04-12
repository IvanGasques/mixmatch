
import { Gallery } from "react-grid-gallery";
import Images from "./images";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import './gallery.css'
import '../blog/blog.css'

export default function Galery2() {
    return (
        <>
            <h1 className='titleBlog' id='text-focus-in'>Nossa Galeria </h1>
            <ImQuotesLeft id="wobble-hor-bottom" className="aspasL" size={60} /><h5 className='subDescription' id='text-focus-in'>Nosso portfólio de restauração de móveis apresenta uma ampla variedade de projetos em que trabalhamos, desde peças clássicas de madeira até móveis modernos e estofados. Cada peça apresentada em nosso portfólio foi cuidadosamente restaurada para refletir seu design original, mas com a adição de um toque moderno.</h5>
            <ImQuotesRight id="wobble-hor-bottom" className="aspasR" size={60} />

            <br></br>
            <Gallery id="galeria"
                images={Images}/>
                </>
    );
}
