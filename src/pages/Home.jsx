import { useLoaderData } from 'react-router-dom';
import Slider from '../components/Slider';
import Stats from '../components/Stats';
import CategoryCard from '../components/CategoryCard';
import Features from '../components/Features';
import Success from '../components/Success';

const Home = () => {

    const data = useLoaderData()
    
    return (
        <div>
            <section>
                <Slider></Slider>
            </section>

            <section className='mt-5'>
                <Stats></Stats>
            </section>
            <section className='mt-5'>
                <div className='grid lg:grid-cols-3 gap-4'>
                    {
                        data.map(name => <CategoryCard
                            key={name._id}
                            
                            name={name}
                        ></CategoryCard>)
                    }
              </div>
            </section>

            <section>
                <Features></Features>
            </section>

            <section>
                <Success></Success>
            </section>
        </div>
    );
};

export default Home;