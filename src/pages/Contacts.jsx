import React, { } from 'react';
import Icons from "../components/Icons";
import Layout from "../layout";
import { YMaps, Map, Placemark } from "react-yandex-maps";


const Contacts = () => {

    const crumbs = [['Информация', 'info'], ['Контакты', 'contacts']]


    const mapData = {
        center: [42.973100, 47.514745],
        zoom: 8,
    };


    const storesKIRGU = [
        { "coordinate": [42.822046, 47.125180], "name": "Домашний, г. Буйнакск, ул. Чкалова 5", "number": "тел. 8-800-770-30-03", "time": "09:00-19:00" },
        { "coordinate": [42.895807, 47.626988], "name": "Домашний, г. Каспийск, ул.Ленина 60а", "number": "тел. 8-800-770-30-03", "time": "10:00-20:00" },
        { "coordinate": [43.842809, 46.726166], "name": "г. Кизляр, ул.Достоевского 56", "number": "тел. 8-800-770-30-03", "time": "09:00-19:00" },
        { "coordinate": [42.965626, 47.398043], "name": "г. Махачкала, мкрн. Ватан, ш. Карабудахкентское д. 1", "number": "тел. 8-800-770-30-03", "time": "09:00-21:00" },
        { "coordinate": [42.978305, 47.470178], "name": "г. Махачкала, мкрн. Ватан, ш. Карабудахкентское д. 11", "number": "тел. 8-800-770-30-03", "time": "09:00-21:00" },
        { "coordinate": [42.951050, 47.562432], "name": "Домашний, г. Махачкала, проезд Абдулхакима Исмаилова д 1 Б", "number": "тел. 8-800-770-30-03", "time": "09:00-21:00" },
        { "coordinate": [42.964379, 47.399902], "name": "г.Махачкала, пос. Редукторный, ТД АПЕЛЬСИН", "number": "тел. 8-800-770-30-03", "time": "09:00-21:00" },
        { "coordinate": [43.228802, 46.602243], "name": "г.Хасавюрт, Махачкалинское шоссе", "number": "тел. 8-800-770-30-03", "time": "09:00-17:00" },
        { "coordinate": [43.245740, 46.577108], "name": "г.Хасавюрт, ул.Набережная, 20", "number": "тел. 8-800-770-30-03", "time": "09:00-17:00" },
        { "coordinate": [42.043241, 48.288031], "name": "г.Дербент, трасса Ростов-Баку, 938 км", "number": "тел. 8-800-770-30-03", "time": "09:00-19:00" },
    ]

    const coordinates = [
        [42.822046, 47.125180], 
        [42.895807, 47.626988],
        [43.842809, 46.726166],
        [42.965626, 47.398043],
        [42.978305, 47.470178],
        [42.951050, 47.562432],
        [42.964379, 47.399902],
        [43.228802, 46.602243],
        [43.245740, 46.577108],
        [42.043241, 48.288031]
    ];

    const descriptionPlace = [
        'Домашний, г. Буйнакск, ул. Чкалова 5'
    ]

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
                            <div className='flex space-x-[10px] text-[#505050]' id=''>
                                <Icons className='w-[24px] h-[24px]' name='clock' />
                                <span>09:00-17:00</span>
                            </div>
                        </div>

                        <div className='pt-[10px]' id = '1'>
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
                            <Map defaultState={mapData} width='100%' height='100%'>
                                {storesKIRGU.map((store, index) => <Placemark 
                                    geometry={store.coordinate} 
                                    key={index} 
                                    options={{ iconColor: '#008954' }} 
                                    properties = {{ balloonContent: `<strong>${store.name}</strong></br>${store.number}</br>${store.time}` }}
                                    modules = {['geoObject.addon.balloon', 'geoObject.addon.hint']}
                                />
                                )}
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </div>
        </Layout>
    )

}


export default Contacts;