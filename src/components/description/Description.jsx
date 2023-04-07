import React from 'react'
import img1 from '../../assets/-min.jpg'
import img2 from '../../assets/pexels-vlada-karpovich-4050318.jpg'
import { Parallax } from 'react-parallax';
import foto1 from '../../assets/banner.jpg'
import foto2 from '../../assets/galery/jon-tyson-eBN71NgyPU8-unsplash.jpg'
import './description.css';

const Description = () => {
    return (<>
     <Parallax
        bgImage={foto2}
        height='320px'
        bgImageAlt="Imagem de fundo"
        strength={1200}>
           <p className="parallax"></p> 
        </Parallax>
        <div className='description1'>
            <div className='card1'>
<img className='img1' src={img1} alt='moveis' />
                <h3>​Interior Design and Space Planning</h3>
                <p>Restaurar imóveis é mais do que uma escolha estética, é uma decisão sábia de investimento. Ao invés de investir em novas construções, a restauração de imóveis permite preservar a história e a cultura de uma região, além de trazer um charme e uma personalidade únicos.</p>
            </div>
            <div className='card2'>

                Além disso, a restauração pode ser mais econômica do que construir do zero, e os imóveis históricos podem se valorizar ao longo do tempo. Ao optar por restaurar um imóvel, você estará contribuindo para a sustentabilidade e para a preservação da história, enquanto cria um espaço único e memorável para você e sua família desfrutarem.
            <img className='img2' src={img2} alt='moveis2' />
            </div>
            
        </div>
        <Parallax
        
            bgImage={foto1}
            height='320px'
            bgImageAlt="Imagem de fundo"
            strength={500}>
               <p className="parallax"></p> 
            </Parallax>
            </>
    )
}

export default Description
