import React, {  }  from 'react';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';
import { setImagePath } from '../utils/images';

const SwiperSl = ({sliders}) => {

    return(
        <Carousel
            wrapAround={true}
            autoplay={true}
            autoplayInterval={3000}
            renderCenterLeftControls={false}
            renderCenterRightControls={false}
        >
            {sliders.map(i =>
                i.link.includes('//kirgu.ru/action/')
                ? 
                <Link key={i.image} to={`/info/stocks/${i.link.split('/').slice(-1)[0]}`}>
                    <img src={setImagePath(i.image2)} alt='' className='w-[1721px] h-[620px] object-cover' />
                </Link>
                : <img key={i.image} src={setImagePath(i.image2)} alt='' className='w-[1721px] h-[620px] object-cover' />
            )}
        </Carousel>    
    )
    
}


export default SwiperSl;