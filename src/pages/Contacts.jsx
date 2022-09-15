import React, { } from 'react';
import Icons from "../components/Icons";
import Layout from "../layout";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import marker from '../images/markKirgu.png';
import mail from '../images/mail.png';

const Contacts = () => {

    const crumbs = [['Информация', 'info'], ['Контакты', 'contacts']]

    return (
        <Layout crumbs={crumbs} activeMenu='info'>
            <div className='w-full'>
                <h2 className='text-[24px] font-semibold'>Контакты</h2>
                <div className='mt-[20px] flex border'>

                    
                    <div className='w-[625px] '>

                        <div className='pt-[10px] pb-[10px] border-b border-[#e6e6e6]'>
                            <div className='flex space-x-[10px] mb-[7px]'>
                                <Icons className='w-[35px] h-[35px]' name='mapMark' color='#008954'/>
                               <div>
                                <p className='text-[20px] font-medium'>Буйнакск</p>
                                <p className='text-[13px] text-slate-500'>Домашний, г. Буйнакск, ул. Чкалова 5</p>
                                </div>
                            </div>
                        </div>

                        <div className='pt-[10px] pb-[10px] border-b border-[#e6e6e6]'>
                            <div className='flex space-x-[10px] mb-[7px]'>
                                <Icons className='w-[35px] h-[35px]' name='mapMark' color='#008954'/>
                                <div>
                                <p className='text-[20px] font-medium'>Каспийск</p>
                                <p className='text-[13px] text-slate-500'>Домашний, г. Каспийск, ул.Ленина 60а</p>
                                </div>
                            </div>
                        </div>

                        <div className='pt-[10px] pb-[10px] border-b border-[#e6e6e6]'>
                            <div className='flex space-x-[10px] mb-[7px]'>
                                <Icons className='w-[35px] h-[35px]' name='mapMark' color='#008954'/>
                                <div>
                                <p className='text-[20px] font-medium'>Кизляр</p>
                                <p className='text-[13px] text-slate-500'>г. Кизляр, ул.Достоевского 56</p>
                                </div>
                            </div>
                        </div>

                        <div className='pt-[10px] pb-[10px] border-b border-[#e6e6e6]'>
                            <div className='flex space-x-[10px] mb-[7px]'>
                                <Icons className='w-[35px] h-[35px]' name='mapMark' color='#008954'/>
                                <div>
                                <p className='text-[20px] font-medium'>Махачкала</p>
                                <p className='text-[13px] text-slate-500'>г. Махачкала, мкрн. Ватан, ш. Карабудахкентское д. 1</p>
                                </div>
                            </div>
                        </div>

                        <div className='pt-[10px] pb-[10px] border-b border-[#e6e6e6]'>
                            <div className='flex space-x-[10px] mb-[7px]'>
                                <Icons className='w-[35px] h-[35px]' name='mapMark' color='#008954'/>
                                <div>
                                <p className='text-[20px] font-medium'>Махачкала</p>
                                <p className='text-[13px] text-slate-500'>г. Махачкала, мкрн. Ватан, ш. Карабудахкентское д. 11</p>
                                </div>
                            </div>
                        </div>

                        <div className='pt-[10px] pb-[10px] border-b border-[#e6e6e6]'>
                            <div className='flex space-x-[10px] mb-[7px]'>
                                <Icons className='w-[35px] h-[35px]' name='mapMark' color='#008954'/>
                                <div>
                                <p className='text-[20px] font-medium'>Махачкала</p>
                                <p className='text-[13px] text-slate-500'>Домашний, г. Махачкала, проезд Абдулхакима Исмаилова д 1 Б</p>
                                </div>
                            </div>
                        </div>

                        <div className='pt-[10px] pb-[10px] border-b border-[#e6e6e6]'>
                            <div className='flex space-x-[10px] mb-[7px]'>
                                <Icons className='w-[35px] h-[35px]' name='mapMark' color='#008954'/>
                                <div>
                                <p className='text-[20px] font-medium'>Хасавюрт</p>
                                <p className='text-[13px] text-slate-500'>г.Хасавюрт, Махачкалинское шоссе</p>
                                </div>
                            </div>
                        </div>

                        <div className='pt-[10px] pb-[10px] border-b border-[#e6e6e6]'>
                            <div className='flex space-x-[10px] mb-[7px]'>
                                <Icons className='w-[35px] h-[35px]' name='mapMark' color='#008954'/>
                                <div>
                                <p className='text-[20px] font-medium'>Хасавюрт</p>
                                <p className='text-[13px] text-slate-500'>г.Хасавюрт, ул.Набережная, 20</p>
                                </div>
                            </div>
                        </div>

                        <div className='pt-[10px] pb-[10px] '>
                            <div className='flex space-x-[10px] mb-[7px]'>
                                <Icons className='w-[35px] h-[35px]' name='mapMark' color='#008954'/>
                                <div>
                                <p className='text-[20px] font-medium'>Дербент</p>
                                <p className='text-[13px] text-slate-500'>г.Дербент, трасса Ростов-Баку, 938 км</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-full pl-[25px]'>
                        <YMaps>
                            <Map width='100%' height='100%' defaultState={{
                                center: [43.293749, 47.222371],
                                zoom: 9,
                            }}>
                                <Placemark geometry={[42.981754, 47.46636]} options={{ iconColor: '#008954' ,  iconLayout: 'default#image', iconImageHref: marker, iconImageSize: [30, 42] }} properties={{ balloonContent: '<strong>Домашний, г. Махачкала, проезд Абдулхакима</br> Исмаилова д 1 Б</strong></br>тел. 8-800-770-30-03 </br>09:00-21:00' }} />
                                <Placemark geometry={[42.964474139089, 47.399654700754]} options={{ iconColor: '#008954' ,  iconLayout: 'default#image', iconImageHref: marker, iconImageSize: [30, 42] }} properties={{ balloonContent: '<strong>г. Махачкала, мкрн. Ватан, ш. Карабудахкентское д. 11</strong></br>тел. 8-800-770-30-03 </br>09:00-21:00' }} />
                                <Placemark geometry={[42.965610740186, 47.397924675939]} options={{ iconColor: '#008954' ,  iconLayout: 'default#image', iconImageHref: marker, iconImageSize: [30, 42] }} properties={{ balloonContent: '<strong>г. Махачкала, мкрн. Ватан, ш. Карабудахкентское д. 1</strong></br>тел. 8-800-770-30-03 </br>09:00-21:00' }} />
                                <Placemark geometry={[42.822150060153, 47.125707933945]} options={{ iconColor: '#008954',  iconLayout: 'default#image', iconImageHref: marker, iconImageSize: [30, 42] }} properties={{ balloonContent: '<strong>Домашний, г. Буйнакск, ул. Чкалова 5</strong></br>тел. 8-800-770-30-03 </br>09:00-19:00' }} />
                                <Placemark geometry={[42.030409969534, 48.296688076057]} options={{ iconColor: '#008954' ,  iconLayout: 'default#image', iconImageHref: marker, iconImageSize: [30, 42] }} properties={{ balloonContent: '<strong>г.Дербент, трасса Ростов-Баку, 938 км </strong></br> тел. 8-800 - 770 - 30 - 03 </br>09:00-20:00' }} />
                                <Placemark geometry={[42.89643991125, 47.627467245689]} options={{ iconColor: '#008954' ,  iconLayout: 'default#image', iconImageHref: marker, iconImageSize: [30, 42] }} properties={{ balloonContent: '<strong>Домашний, г. Каспийск, ул.Ленина 60а </strong></br>тел. 8-800-770-30-03 </br>9:00-21:00' }} />
                                <Placemark geometry={[43.842820774395, 46.72618240149]} options={{ iconColor: '#008954' ,  iconLayout: 'default#image', iconImageHref: marker, iconImageSize: [30, 42] }} properties={{ balloonContent: '<strong>г. Кизляр, ул.Достоевского 56</strong></br>тел. 8-800-770-30-03 </br>09:00-19:00' }} />
                                <Placemark geometry={[43.226463309355, 46.613534340765]} options={{ iconColor: '#008954' ,  iconLayout: 'default#image', iconImageHref: marker, iconImageSize: [30, 42] }} properties={{ balloonContent: '<strong>г.Хасавюрт, Махачкалинское шоссе</strong></br>тел. 8-800-770-30-03 </br>09:00-17:00' }} />
                                <Placemark geometry={[43.245667335432, 46.577247474868]} options={{ iconColor: '#008954' ,  iconLayout: 'default#image', iconImageHref: marker, iconImageSize: [30, 42] }} properties={{ balloonContent: '<strong>г.Хасавюрт, ул.Набережная, 20 </strong></br>тел. 8-800-770-30-03 </br>09:00-17:00' }} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']} />

                                <ZoomControl />
                            </Map>
                        </YMaps>
                    </div>

                </div>
            </div>
        </Layout >
    )

}


export default Contacts;