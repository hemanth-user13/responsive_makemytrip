import NavBar from '../Header/NavBar';
import Categories from './Categories';
import FlightLayout from '../Pages/Flights/FlightTicket'

const MainPage = () => {
  return (
    <div className="relative">
      <NavBar />
      <Categories styles="absolute inset-x-0 top-1/3 transform -translate-y-1/2" />
      <div className='absolute inset-x-0 top-3/4 transform -translate-y-1/2' style={{"position":"absolute","top":"420px"}}>
      <FlightLayout/>
      </div>
    </div>
  );
}

export default MainPage;
