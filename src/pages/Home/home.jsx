

import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import About from '../../components/About/About';
import Description from '../../components/description/Description';
import Feedback from '../../components/feedbacks/Feedback';
import Contact from '../Contact/Contact';



function Home() {
  return (
    <div className="Home">
   
    <Banner />
    <Cards/>
    <About/>
    <Description/>
    <Feedback/>
    <Contact/>
    </div>
  );
}

export default Home;
