

import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import About from '../../components/About/About';
import Description from '../../components/description/Description';
import ImgMediaCard from '../blog/Blog';
import Galery2 from '../Gallery/Gallery';



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
