import React, {  }  from 'react';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';
import { setImagePath } from './services/images';

const MainSlider = ({sliders}) => {

    return(
        <Carousel
            easing='easeInOutElastic'
            edgeEasing="easeOutCirc"
            pauseOnHover={true}
            wrapAround={true}
            dragging={true}
            swiping={true}
            autoplay={true}
            autoplayInterval={6000}
            renderCenterLeftControls={false}
            renderCenterRightControls={false}
        >
            {sliders.map(i =>
                i.link.includes('//kirgu.ru/action/')
                ? 
                <Link key={i.image} to={`/info/stocks/${i.link.split('/').slice(-2)[0]}`}>
                    <img src={setImagePath(i.image2)} alt='' className='w-[1721px] h-[620px] object-cover' />
                </Link>
                : <img key={i.image} src={setImagePath(i.image2)} alt='' className='w-[1721px] h-[620px] object-cover' />
            )}
        </Carousel>    
    )
    
}


export default MainSlider;