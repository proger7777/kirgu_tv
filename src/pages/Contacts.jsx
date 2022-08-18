import React, { } from 'react';
import Icons from "../components/Icons";
import Layout from "../layout";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";

const Contacts = () => {

    const crumbs = [['Информация', 'info'], ['Контакты', 'contacts']]

    return (
        <Layout crumbs={crumbs} activeMenu='info'>
            <div className='w-full'>
                <h2 className='text-[24px] font-semibold'>Наши магазины</h2>
                <div className='mt-[20px] flex'>
                    <div className='w-[250px] pr-[25px]'>
                        <div className='flex space-x-[10px] mb-[15px]'>
                            <Icons className='w-[24px] h-[24px]' name='phone' />
                            <span>8-800-770-30-03</span>
                        </div>

                        <div className='flex space-x-[10px] mb-[7px]'>
                            <Icons className='w-[24px] h-[24px]' name='mail' />
                            <span>info@kirgu.ru</span>
                        </div>

                    </div>

                    <div className='w-[620px] pr-[25px]'>

                        <div className='pt-[10px] pb-[10px] border-b border-[#e6e6e6]'>
                            <div className='flex space-x-[10px] mb-[7px]'>
                                <Icons className='w-[25px] h-[27px]' name='map' />
                                <span>Домашний, г. Буйнакск, ул. Чкалова 5</span>
                            </div>
                            <div className='flex space-x-[10px] text-[#505050]'>
                                <Icons className='w-[24px] h-[24px]' name='clock' />
                                <span>09:00-19:00</span>
                            </div>
                        </div>

                        <div className='pt-[10px] pb-[10px] border-b border-[#e6e6e6]'>
                            <div className='flex space-x-[10px] mb-[7px]'>
                                <Icons className='w-[25px] h-[27px]' name='map' />
                                <span>Домашний, г. Каспийск, ул.Ленина 60а</span>
                            </div>
                            <div className='flex space-x-[10px] text-[#505050]'>
                                <Icons className='w-[24px] h-[24px]' name='clock' />
                                <span>10:00-20:00</span>
                            </div>
                        </div>

                        <div className='pt-[10px] pb-[10px] border-b border-[#e6e6e6]'>
                            <div className='flex space-x-[10px] mb-[7px]'>
                                <Icons className='w-[25px] h-[27px]' name='map' />
                                <span>г. Кизляр, ул.Достоевского 56</span>
                            </div>
                            <div className='flex space-x-[10px] text-[#505050]'>
                                <Icons className='w-[24px] h-[24px]' name='clock' />
                                <span>09:00-19:00</span>
                            </div>
                        </div>

                        <div className='pt-[10px] pb-[10px] border-b border-[#e6e6e6]'>
                            <div className='flex space-x-[10px] mb-[7px]'>
                                <Icons className='w-[25px] h-[27px]' name='map' />
                                <span>г. Махачкала, мкрн. Ватан, ш. Карабудахкентское д. 1</span>
                            </div>
                            <div className='flex space-x-[10px] text-[#505050]'>
                                <Icons className='w-[24px] h-[24px]' name='clock' />
                                <span>09:00-21:00</span>
                            </div>
                        </div>

                        <div className='pt-[10px] pb-[10px] border-b border-[#e6e6e6]'>
                            <div className='flex space-x-[10px] mb-[7px]'>
                                <Icons className='w-[25px] h-[27px]' name='map' />
                                <span>г. Махачкала, мкрн. Ватан, ш. Карабудахкентское д. 11</span>
                            </div>
                            <div className='flex space-x-[10px] text-[#505050]'>
                                <Icons className='w-[24px] h-[24px]' name='clock' />
                                <span>09:00-21:00</span>
                            </div>
                        </div>

                        <div className='pt-[10px] pb-[10px] border-b border-[#e6e6e6]'>
                            <div className='flex space-x-[10px] mb-[7px]'>
                                <Icons className='w-[25px] h-[27px]' name='map' />
                                <span>Домашний, г. Махачкала, проезд Абдулхакима Исмаилова д 1 Б</span>
                            </div>
                            <div className='flex space-x-[10px] text-[#505050]'>
                                <Icons className='w-[24px] h-[24px]' name='clock' />
                                <span>09:00-21:00</span>
                            </div>
                        </div>

                        <div className='pt-[10px] pb-[10px] border-b border-[#e6e6e6]'>
                            <div className='flex space-x-[10px] mb-[7px]'>
                                <Icons className='w-[25px] h-[27px]' name='map' />
                                <span>г.Махачкала, пос. Редукторный, ТД АПЕЛЬСИН</span>
                            </div>
                            <div className='flex space-x-[10px] text-[#505050]'>
                                <Icons className='w-[24px] h-[24px]' name='clock' />
                                <span>09:00-21:00</span>
                            </div>
                        </div>

                        <div className='pt-[10px] pb-[10px] border-b border-[#e6e6e6]'>
                            <div className='flex space-x-[10px] mb-[7px]'>
                                <Icons className='w-[25px] h-[27px]' name='map' />
                                <span>г.Хасавюрт, Махачкалинское шоссе</span>
                            </div>
                            <div className='flex space-x-[10px] text-[#505050]'>
                                <Icons className='w-[24px] h-[24px]' name='clock' />
                                <span>09:00-17:00</span>
                            </div>
                        </div>

                        <div className='pt-[10px] pb-[10px] border-b border-[#e6e6e6]'>
                            <div className='flex space-x-[10px] mb-[7px]'>
                                <Icons className='w-[25px] h-[27px]' name='map' />
                                <span>г.Хасавюрт, ул.Набережная, 20</span>
                            </div>
                            <div className='flex space-x-[10px] text-[#505050]'>
                                <Icons className='w-[24px] h-[24px]' name='clock' />
                                <span>09:00-17:00</span>
                            </div>
                        </div>

                        <div className='pt-[10px]'>
                            <div className='flex space-x-[10px] mb-[7px]'>
                                <Icons className='w-[25px] h-[27px]' name='map' />
                                <span>г.Дербент, трасса Ростов-Баку, 938 км</span>
                            </div>
                            <div className='flex space-x-[10px] text-[#505050]'>
                                <Icons className='w-[24px] h-[24px]' name='clock' />
                                <span>09:00-19:00</span>
                            </div>
                        </div>

                    </div>

                    <div className='w-[850px] pl-[25px]'>
                        <YMaps>
                            <Map width='97%' height='97%' defaultState={{
                                center: [42.983100, 47.504745],
                                zoom: 8,
                            }}>
                                <Placemark geometry={[42.951058320243, 47.562560002307]} options={{ iconColor: '#008954' }} properties={{ balloonContent: '<strong>г.Махачкала, пос. Редукторный, ТД АПЕЛЬСИН </strong></br>тел. 8-800-770-30-03 </br>09:00-21:00' }} />
                                <Placemark geometry={[42.981754, 47.46636]} options={{ iconColor: '#008954' }} properties={{ balloonContent: '<strong>Домашний, г. Махачкала, проезд Абдулхакима</br> Исмаилова д 1 Б</strong></br>тел. 8-800-770-30-03 </br>10:00-20:00' }} />
                                <Placemark geometry={[42.964474139089, 47.399654700754]} options={{ iconColor: '#008954' }} properties={{ balloonContent: '<strong>г. Махачкала, мкрн. Ватан, ш. Карабудахкентское д. 11</strong></br>тел. 8-800-770-30-03 </br>09:00-21:00' }} />
                                <Placemark geometry={[42.965610740186, 47.397924675939]} options={{ iconColor: '#008954' }} properties={{ balloonContent: '<strong>г. Махачкала, мкрн. Ватан, ш. Карабудахкентское д. 1</strong></br>тел. 8-800-770-30-03 </br>09:00-21:00' }} />
                                <Placemark geometry={[42.822150060153, 47.125707933945]} options={{ iconColor: '#008954' }} properties={{ balloonContent: '<strong>Домашний, г. Буйнакск, ул. Чкалова 5</strong></br>тел. 8-800-770-30-03 </br>08:45-18:00' }} />
                                <Placemark geometry={[42.030409969534, 48.296688076057]} options={{ iconColor: '#008954' }} properties={{ balloonContent: '<strong>г.Дербент, трасса Ростов-Баку, 938 км </strong></br> тел. 8-800 - 770 - 30 - 03 </br>08: 45 - 18:00' }}/>
                                <Placemark geometry={[42.89643991125, 47.627467245689]} options={{ iconColor: '#008954' }} properties={{ balloonContent: '<strong>Домашний, г. Каспийск, ул.Ленина 60а </strong></br>тел. 8-800-770-30-03 </br>10:00-20:00' }} />
                                <Placemark geometry={[43.842820774395, 46.72618240149]} options={{ iconColor: '#008954' }} properties={{ balloonContent: '<strong>г. Кизляр, ул.Достоевского 56</strong></br>тел. 8-800-770-30-03 </br>08:45-18:00' }} />
                                <Placemark geometry={[43.226463309355, 46.613534340765]} options={{ iconColor: '#008954' }} properties={{ balloonContent: '<strong>г.Хасавюрт, Махачкалинское шоссе</strong></br>тел. 8-800-770-30-03 </br>09:00-17:00' }} />
                                <Placemark geometry={[43.245667335432, 46.577247474868]} options={{ iconColor: '#008954' }} properties={{ balloonContent: '<strong>г.Хасавюрт, ул.Набережная, 20 </strong></br>тел. 8-800-770-30-03 </br>09:00-17:00' }} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']} />

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