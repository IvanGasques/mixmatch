import React from 'react'
import img1 from '../../assets/-min.jpg'
import img2 from '../../assets/pexels-vlada-karpovich-4050318.jpg'
import './description.css';

const Description = () => {
    return (
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
    )
}

export default Description
