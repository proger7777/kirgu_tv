import React, { useEffect, useRef, useState } from 'react';
import Icons from "../components/Icons";
import Layout from "../layout";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import marker from '../images/markKirgu.png';
import mail from '../images/mail.png';
import test from "../images/textureBuildingMap/markTerminal.png"
import { useNavigate } from 'react-router-dom';

const Contacts = () => {

  const branches = [
    {
      name: "Махачкала_",
      scheme: true,
      address: "Домашний, г. Махачкала, проезд Абдулхакима Исмаилова д 1 Б",
      time: "09:00-21:00",
      number: "8-800-770-30-03",
      description: "",
      coordinates: [42.981754, 47.46636],
      image: ""
    },
    {
      name: "Махачкала",
      scheme: true,
      address: "г. Махачкала, мкрн. Ватан, ш. Карабудахкентское д. 11",
      time: "09:00-21:00",
      number: "8-800-770-30-03",
      description: "",
      coordinates: [42.964474139089, 47.399654700754],
      image: ""
    },
    {
      name: "Махачкала",
      scheme: true,
      address: "г. Махачкала, мкрн. Ватан, ш. Карабудахкентское д. 1",
      time: "09:00-21:00",
      number: "8-800-770-30-03",
      description: "",
      coordinates: [42.965610740186, 47.397924675939],
      image: ""
    },
    {
      name: "Каспийск",
      scheme: true,
      address: "Домашний, г. Каспийск, ул.Ленина 60а",
      time: "9:00-21:00",
      number: "8-800-770-30-03",
      description: "",
      coordinates: [42.89643991125, 47.627467245689],
      image: ""
    },
    {
      name: "Буйнакск",
      scheme: false,
      address: "Домашний, г. Буйнакск, ул. Чкалова 5",
      time: "09:00-19:00",
      number: "8-800-770-30-03",
      description: "",
      coordinates: [42.822150060153, 47.125707933945],
      image: ""
    },
    {
      name: "Дербент",
      scheme: true,
      address: "г.Дербент, трасса Ростов-Баку, 938 км",
      time: "09:00-18:00",
      number: "8-800-770-30-03",
      description: "",
      coordinates: [42.030409969534, 48.296688076057],
      image: ""
    },
    {
      name: "Кизляр",
      scheme: false,
      address: "г. Кизляр, ул.Достоевского 56",
      time: "09:00-19:00",
      number: "8-800-770-30-03",
      description: "",
      coordinates: [43.842820774395, 46.72618240149],
      image: ""
    },
    {
      name: "Хасавюрт",
      scheme: false,
      address: "г.Хасавюрт, Махачкалинское шоссе",
      time: "09:00-17:00",
      number: "8-800-770-30-03",
      description: "",
      coordinates: [43.226463309355, 46.613534340765],
      image: ""
    },
    {
      name: "Хасавюрт",
      scheme: false,
      address: "г.Хасавюрт, ул.Набережная, 20",
      time: "09:00-17:00",
      number: "8-800-770-30-03",
      description: "",
      coordinates: [43.245667335432, 46.577247474868],
      image: ""
    }
  ];

  const yaMap = useRef(null)
  const listRef = useRef(null);
  const navigate = useNavigate()
  const crumbs = [['Информация', 'info'], ['Контакты', 'contacts']]

  const goMark = (coordinates) => {

    console.log("first")
    const mapZoom = yaMap.current.getZoom()

    if (mapZoom !== 17) {
      yaMap.current.panTo(coordinates, {
        flying: true,
        duration: 1500,
      });

      setTimeout(() => {
        yaMap.current.setZoom(17, {
          duration: 1200
        })
      }, 1600)
    } else {
      yaMap.current.panTo(coordinates, {
        flying: true,
        duration: 1800,
      });
    }

  }

  const [listVisible, setListVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setListVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.9 } // Можете настроить порог видимости элемента
    );

    const lastElem = document.getElementById('lastElem');
    if (lastElem) {
      observer.observe(lastElem);
    }

    return () => {
      if (lastElem) {
        observer.unobserve(lastElem);
      }
    };
  }, []);

  const handleScrollToBottom = () => {
    if (listRef.current) {
      // listRef.current.scrollIntoView({ behavior: 'smooth' });
      listRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  };

  const svgTelephone =
    `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M10.9987 8.46005V9.96005C10.9993 10.0993 10.9708 10.2371 10.915 10.3647C10.8592 10.4923 10.7774 10.6068 10.6748 10.701C10.5722 10.7951 10.451 10.8668 10.3191 10.9114C10.1872 10.956 10.0474 10.9726 9.90875 10.96C8.37016 10.7929 6.89225 10.2671 5.59375 9.42505C4.38566 8.65738 3.36141 7.63313 2.59375 6.42505C1.74873 5.12065 1.22287 3.63555 1.05875 2.09005C1.04625 1.95178 1.06268 1.81243 1.107 1.68086C1.15131 1.54929 1.22253 1.42839 1.31613 1.32586C1.40973 1.22332 1.52365 1.1414 1.65064 1.08531C1.77763 1.02922 1.91492 1.00018 2.05375 1.00005H3.55375C3.7964 0.99766 4.03164 1.08359 4.21563 1.24181C4.39961 1.40004 4.51978 1.61977 4.55375 1.86005C4.61706 2.34008 4.73447 2.81141 4.90375 3.26505C4.97102 3.44401 4.98558 3.63851 4.9457 3.82549C4.90582 4.01247 4.81318 4.1841 4.67875 4.32005L4.04375 4.95505C4.75552 6.20682 5.79197 7.24327 7.04375 7.95505L7.67875 7.32005C7.81469 7.18562 7.98632 7.09297 8.17331 7.0531C8.36029 7.01322 8.55478 7.02778 8.73375 7.09505C9.18738 7.26432 9.65871 7.38174 10.1387 7.44505C10.3816 7.47931 10.6034 7.60165 10.762 7.7888C10.9206 7.97594 11.0048 8.21484 10.9987 8.46005Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`

  const svgMail =
    `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
      <path d="M11.5714 1.19995H0.428571C0.191518 1.19995 0 1.39495 0 1.63631V10.3636C0 10.605 0.191518 10.8 0.428571 10.8H11.5714C11.8085 10.8 12 10.605 12 10.3636V1.63631C12 1.39495 11.8085 1.19995 11.5714 1.19995ZM11.0357 2.71086V9.81813H0.964286V2.71086L0.594643 2.41768L1.12098 1.72904L1.6942 2.18313H10.3071L10.8804 1.72904L11.4067 2.41768L11.0357 2.71086ZM10.3071 2.18177L6 5.59086L1.69286 2.18177L1.11964 1.72768L0.593304 2.41631L0.962946 2.7095L5.53795 6.33131C5.66952 6.43539 5.83138 6.49188 5.99799 6.49188C6.1646 6.49188 6.32647 6.43539 6.45804 6.33131L11.0357 2.71086L11.4054 2.41768L10.879 1.72904L10.3071 2.18177Z" fill="black" />
    </svg>`

  const svgClock =
    `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <g clip-path="url(#clip0_1680_5624)">
        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#008954" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6 3V6L8 7" stroke="#008954" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_1680_5624">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>`

  return (
    <Layout crumbs={crumbs} activeMenu='info'>
      <div className='w-full'>
        <h2 className='text-[24px] font-semibold'>Контакты</h2>
        <div className='mt-[20px] flex border h-[820px] relative'>

          <div className={`w-[625px] h-[820px] overflow-scroll relative`} ref={listRef}>

            {branches.map((item, index) =>
              <div className='flex flex-col p-[12px] border-b border-[#e6e6e6]' key={index} onClick={() => goMark(item.coordinates, 15)} >
                <div className='flex items-center'>
                  <Icons className='w-[25px] h-[25px]' name='mapMark' color='#008954' />
                  <p className='ml-[5px] text-[18px] font-medium'>{item.name}</p>
                </div>
                <p className='text-[13px] text-slate-500'>{item.address}</p>
                <button disabled={!item.scheme && true} className={`text-[#fff] border rounded h-[35px] mt-[10px] ${item.scheme ? "bg-green" : "bg-[#b0b0b0]"}`} onClick={(e) => { e.stopPropagation(); navigate(`/building/${item.name}`) }}>
                  Посмотреть схему
                </button>
              </div>
            )}
            <div id='lastElem'></div>

            {!listVisible &&
              <div className='flex justify-center items-center w-[455px] h-[50px] fixed top-[865px]'>
                <button onClick={handleScrollToBottom}>
                  <Icons name="arrowDown" className="w-[60px] h-[60px] bg-[#66666690] rounded-[40px]" color="#d4d4d4" />
                </button>
              </div>
            }

          </div>

          <div className='w-full pl-[25px]'>

            {/* ' width: 270px; height: 180px; text-align: justify; text-overflow: ellipsis; overflow: hidden;' */}
            {/* <div className='w-[270px] h-[180px] '>

              <p>{branches[0].number}</p>
              <p>info@kirgu.ru</p>
              <p>{branches[0].time}</p>

            </div> */}

            <YMaps>
              <Map width='100%' height='100%' instanceRef={yaMap} defaultState={{
                center: [43.293749, 47.222371],
                zoom: 9,
              }}
              >

                {branches.map((item, index) =>
                  <Placemark
                    geometry={item.coordinates}
                    key={index}
                    options={{ iconColor: '#008954', iconLayout: 'default#image', iconImageHref: marker, iconImageSize: [30, 42] }}
                    modules={["geoObject.addon.balloon"]}
                    properties={
                      {
                        balloonContentHeader: item.name,
                        // balloonContentBody: item.name,
                        balloonContentFooter:
                          `<div>
                            <div style='width: 270px; display: flex; align-items:center'>
                            ${svgTelephone} &nbsp;${item.number}
                            </div>
                            <div style='width: 270px; display: flex; align-items:center'>
                              ${svgMail} &nbsp;${item.time}
                            </div>
                            <div style='width: 270px; display: flex; align-items:center'>
                              ${svgClock} &nbsp;${item.time}
                            </div>
                          </div>`
                      }}
                    onClick={() => console.log("first")} />
                )}

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