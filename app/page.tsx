import { StartIndividual } from '@/components/PopUp/StartIndividual';
import { StartTeam } from '@/components/PopUp/StartTeam';

const Home = () => {
  return (
    <div className='px-6 md:px-18'>
      <div className='flex justify-center items-center h-screen space-x-3'>
        <StartIndividual />
        <StartTeam/>
      </div>
    </div>
  );
};

export default Home;
