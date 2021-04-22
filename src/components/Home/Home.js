import About from '../About/About';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Possibilities from '../Possibilities/Possibilities';
import ReviewsHeader from '../Reviews/ReviewsHeader/ReviewsHeader';
import ServiceHeader from '../Services/ServiceHeader/ServiceHeader';

import Slogan from '../Slogan/Slogan';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Slogan />
      <Feature />
      <About />
      <Possibilities />
      <ServiceHeader />
      <ReviewsHeader/>
      <Footer/>
    </div>
  );
};

export default Home;
