import HomeNavbar from "../components/HomeNavbar";
import SwiperSl from "../components/SwiperSl";

const Home = () => {

    return(
        <div className='wrapp w-[1720px] m-auto h-full flex flex-col justify-center items-center'>
            <SwiperSl />
            <HomeNavbar /> 
        </div> 
    )

}


export default Home;