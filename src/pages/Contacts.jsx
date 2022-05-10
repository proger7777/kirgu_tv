import Icons from "../components/Icons";
import Layout from "../layout";

const Contacts = () => {

    const crumbs = [['Информация', 'info'], ['Контакты', 'contacts']]

    return(
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
                        <script type="text/javascript" charSet="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6d4254cdd59f4d6225c43d7ae9fdb5de52df5979b3f17127bcff41a37d31f74d&amp;width=850&amp;height=809&amp;lang=ru_RU&amp;scroll=true" />
                    </div>

                </div>
            </div>
        </Layout>
    )

}


export default Contacts;