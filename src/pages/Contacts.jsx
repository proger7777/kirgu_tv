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
        { "coordinate": [42.822046, 47.125180], "city": "г. Буйнакск", "address": "ул. Чкалова 5", "number": "8-800-770-30-03", "time": "09:00-19:00" },
        { "coordinate": [42.895807, 47.626988], "city": "г. Каспийск", "address": "ул.Ленина 60а", "number": "8-800-770-30-03", "time": "10:00-20:00" },
        { "coordinate": [43.842809, 46.726166], "city": "г. Кизляр", "address": "ул.Достоевского 56", "number": "8-800-770-30-03", "time": "09:00-19:00" },
        { "coordinate": [42.965626, 47.398043], "city": "г. Махачкала", "address": " мкрн. Ватан, ш. Карабудахкентское д. 1", "number": "8-800-770-30-03", "time": "09:00-21:00" },
        { "coordinate": [42.978305, 47.470178], "city": "г. Махачкала", "address": " мкрн. Ватан, ш. Карабудахкентское д. 11", "number": "8-800-770-30-03", "time": "09:00-21:00" },
        { "coordinate": [42.951050, 47.562432], "city": "г. Махачкала", "address": "проезд Абдулхакима Исмаилова д 1 Б", "number": "8-800-770-30-03", "time": "09:00-21:00" },
        { "coordinate": [42.964379, 47.399902], "city": "г.Махачкала", "address": "пос. Редукторный, ТД АПЕЛЬСИН", "number": "8-800-770-30-03", "time": "09:00-21:00" },
        { "coordinate": [43.228802, 46.602243], "city": "г.Хасавюрт", "address": "Махачкалинское шоссе", "number": "8-800-770-30-03", "time": "09:00-17:00" },
        { "coordinate": [43.245740, 46.577108], "city": "г.Хасавюрт", "address": "ул.Набережная, 20", "number": "8-800-770-30-03", "time": "09:00-17:00" },
        { "coordinate": [42.043241, 48.288031], "city": "г.Дербент", "address": "трасса Ростов-Баку, 938 км", "number": "8-800-770-30-03", "time": "09:00-19:00" },
    ]

    return (
        <Layout crumbs={crumbs} activeMenu='info'>
            <div className='w-full'>
                <p className='font-bold text-[27px]'>Контакты</p>
                <div className='mt-[20px] flex justify-content-center'>
                    <div className='w-[450px]'>
                        <div className='pt-[10px] pb-[10px] border border-[#e6e6e6]'>
                            <div className='flex p-[5px] space-x-[10px]'>
                                <Icons className='w-[25px] h-[27px] ml-[15px]' name='map_fill' />
                                <div>
                                    <p className='font-bold'>Махачкала</p>
                                    <p className='text-zinc-400'>мкрн. Ватан, ш. Карабудахкентское д. 1</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-[10px] pb-[10px] border border-[#e6e6e6]'>
                            <div className='flex p-[5px] space-x-[10px]'>
                                <Icons className='w-[25px] h-[27px] ml-[15px]' name='map_fill' />
                                <div>
                                    <p className='font-bold'>Махачкала</p>
                                    <p className='text-zinc-400'>мкрн. Ватан, ш. Карабудахкентское д. 11</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-[10px] pb-[10px] border border-[#e6e6e6]'>
                            <div className='flex p-[5px] space-x-[10px]'>
                                <Icons className='w-[25px] h-[27px] ml-[15px]' name='map_fill' />
                                <div>
                                    <p className='font-bold'>Махачкала</p>
                                    <p className='text-zinc-400'>проезд Абдулхакима Исмаилова д 1 Б</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-[10px] pb-[10px] border border-[#e6e6e6]'>
                            <div className='flex p-[5px] space-x-[10px]'>
                                <Icons className='w-[25px] h-[27px] ml-[15px]' name='map_fill' />
                                <div>
                                    <p className='font-bold'>Махачкала</p>
                                    <p className='text-zinc-400'>пос. Редукторный, ТД АПЕЛЬСИН</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-[10px] pb-[10px] border border-[#e6e6e6]'>
                            <div className='flex p-[5px] space-x-[10px]'>
                                <Icons className='w-[25px] h-[27px] ml-[15px]' name='map_fill' />
                                <div>
                                    <p className='font-bold'>Каспийск</p>
                                    <p className='text-zinc-400'>ул.Ленина 60а</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-[10px] pb-[10px] border border-[#e6e6e6]'>
                            <div className='flex p-[5px] space-x-[10px]'>
                                <Icons className='w-[25px] h-[27px] ml-[15px]' name='map_fill' />
                                <div>
                                    <p className='font-bold'>Дербент</p>
                                    <p className='text-zinc-400'>трасса Ростов-Баку, 938 км</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-[10px] pb-[10px] border border-[#e6e6e6]'>
                            <div className='flex p-[5px] space-x-[10px]'>
                                <Icons className='w-[25px] h-[27px] ml-[15px]' name='map_fill' />
                                <div>
                                    <p className='font-bold'>Хасавюрт</p>
                                    <p className='text-zinc-400'>ул.Набережная, 20</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-[10px] pb-[10px] border border-[#e6e6e6]'>
                            <div className='flex p-[5px] space-x-[10px]'>
                                <Icons className='w-[25px] h-[27px] ml-[15px]' name='map_fill' />
                                <div>
                                    <p className='font-bold'>Хасавюрт</p>
                                    <p className='text-zinc-400'>Махачкалинское шоссе</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-[10px] pb-[10px] border border-[#e6e6e6]'>
                            <div className='flex p-[5px] space-x-[10px]'>
                                <Icons className='w-[25px] h-[27px] ml-[15px]' name='map_fill' />
                                <div>
                                    <p className='font-bold'>Буйнакск</p>
                                    <p className='text-zinc-400'>ул.Чкалова 5</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-[10px] pb-[10px] border border-[#e6e6e6]'>
                            <div className='flex p-[5px] space-x-[10px]'>
                                <Icons className='w-[25px] h-[27px] ml-[15px]' name='map_fill' />
                                <div>
                                    <p className='font-bold'>Кизляр</p>
                                    <p className='text-zinc-400'>ул.Достоевского 56</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='w-[1280px] '>
                        <YMaps>
                            <Map defaultState={mapData} width='100%' height='100%'>
                                {storesKIRGU.map((store, index) =>
                                    <Placemark
                                        geometry={store.coordinate}
                                        key={index}
                                        options={{
                                            // iconColor: '#008954',
                                            iconLayout: 'default#image',
                                            iconImageHref: "bb.png",
                                            iconImageSize: [300, 402],
                                            iconImageOffset: [-30, -402]
                                        }}
                                        properties={{
                                            balloonContent: `<strong>ТД "Киргу"</strong></br>
                                    ${store.address}
                                    <hr></br>
                                    ${store.time}`
                                        }}
                                        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
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