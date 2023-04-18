

import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import About from '../../components/About/About';
import Description from '../../components/description/Description';
import Secao from '../AdmCarla/Secao';



function Home() {
  return (
    <div className="Home">
   
    <Banner />
    <Cards/>
    <About/>
    <Description/>
    
    </div>
  );
}

export default Home;
