import mainPng from '../images/main.png'
import stockItemPng from '../images/stock_item.png'
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperSl = () => {

    return(
        <Swiper>
            <SwiperSlide>
                <img src={mainPng} alt='' className='w-[1721px] h-[620px] object-cover' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={stockItemPng}  alt='' className='w-[1721px] h-[620px] object-cover' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={mainPng}  alt='' className='w-[1721px] h-[620px] object-cover' />
            </SwiperSlide>
        </Swiper>
    )

}


export default SwiperSl;