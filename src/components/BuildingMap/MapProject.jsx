import React, { useEffect, useState } from 'react';
import mebel_1 from '../../images/textureBuildingMap/makhachkala/mebel_1.png';
import termSvg from '../../images/textureBuildingMap/term.svg';
import { getBuilding } from './assetsMap';
import { useNavigate } from 'react-router-dom';

const MapProject = ({ buildingData, city, activeTerminal, floor, setFloor, activeZone, setActiveZone  }) => {

    // console.log(buildingData)
    const defaultScale = 0.7
    const [positionTerminal, setPositionTerminal] = useState({ x: 395, y: 170 });
    const [project, setProject] = useState(mebel_1);
    const centerCoordinate = { x: (1620 - (1920 * defaultScale)) / 2, y: (805 - (1090 * defaultScale)) / 2 }
    const [area, setArea] = useState();

    const [isDragging, setIsDragging] = useState(false);
    const [scale, setScale] = useState(defaultScale);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: centerCoordinate.x, y: centerCoordinate.y });

    const [terminal, setTerminal] = useState(false);
    const [toggle, setToggle] = useState(false);

    const navigate = useNavigate()

    const startDrag = (e) => {
        setIsDragging(true);

        let clientX, clientY;

        if (e.type === 'touchstart' && e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        setOffset({
            x: clientX - position.x,
            y: clientY - position.y,
        });
    };

    const drag = (e) => {

        if (!isDragging) return;

        if (e.cancelable) {
            if (!e.defaultPrevented) {
                e.preventDefault();
            }
        }
        const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
        setPosition({
            x: clientX - offset.x,
            y: clientY - offset.y,
        });
    };

    const endDrag = () => {
        setIsDragging(false);
    };

    const handleZoom = (action) => {
        if (action == "+" && scale < 1.6) {
            setScale(scale + 0.3);
            setPosition(prevPosition => ({
                x: prevPosition.x - (1920 * 0.3 / 2),
                y: prevPosition.y - (1090 * 0.3 / 2),
            }))
        } else if (action == "-" && scale > defaultScale) {
            setScale(scale - 0.3);
            setPosition(prevPosition => ({
                x: prevPosition.x + (1920 * 0.3 / 2),
                y: prevPosition.y + (1090 * 0.3 / 2),
            }));
        }
    };
    const handleClick = (e) => {
        const svg = document.getElementById("map-svg");
        const svgRect = svg.getBoundingClientRect();
        const clickedX = (e.clientX - svgRect.left - position.x) / scale;
        const clickedY = (e.clientY - svgRect.top - position.y) / scale;

        console.log([Math.ceil(clickedX), Math.ceil(clickedY)])

    };

    // Set active project and active floor 
    useEffect(() => {

        setToggle(true)
        setProject(getBuilding(city, buildingData[0].name, floor))
        setArea(buildingData.filter(item => item.floor == floor)[0].zone)

        // If terminal on this city, set building map and floor of setting
        if (activeTerminal) {

            setTerminal(true)
            setFloor(activeTerminal.floor)
            setPositionTerminal(activeTerminal.position)

        } else {

            setTerminal(false)

        }
    }, [buildingData]);

    // Refresh setting after change projectMap, floor
    useEffect(() => {
        setProject(getBuilding(city, buildingData[0].name, floor));
        setPosition({ x: centerCoordinate.x, y: centerCoordinate.y })
        setScale(defaultScale)
        setArea(buildingData.filter(item => item.floor == floor)[0].zone)

        if (toggle) {
            if (floor !== activeTerminal.floor) {
                setTerminal(false)
            } else {
                activeTerminal.position && setTerminal(true)
            }
        }
    }, [floor]);

    return (
        <div className="flex justify-between ">

            <div>
                <svg
                    id="map-svg"
                    width={1620}
                    height={805}
                    onMouseDown={startDrag}
                    onMouseMove={drag}
                    onMouseUp={endDrag}
                    onTouchStart={startDrag}
                    onTouchMove={drag}
                    onTouchEnd={endDrag}
                    onClick={(e) => handleClick(e)}
                    style={{ touchAction: 'none' }}
                >
                    <g transform={`translate(${position.x}, ${position.y}) scale(${scale})`}>
                        <image
                            href={project}
                            width={1920}
                            height={1090}
                            className='project-image'
                        />

                        {terminal &&
                            <image
                                href={termSvg}
                                width={200}
                                height={100}
                                x={positionTerminal.x - 200 / 2}
                                y={positionTerminal.y - 100 / 2}
                            />
                        }

                        {area &&
                            area.map((elem, index) =>
                                <polygon points={elem.point.join(" ")} opacity={0} onClick={() => setActiveZone(elem)} key={index} />
                            )
                        }

                        {activeZone &&
                            <polygon fill='#ffa500' points={activeZone.point.join(" ")} opacity={0.3} onClick={() => activeZone.id && navigate(`/catalog/${activeZone.id}`)} />
                        }

                    </g>
                </svg>
            </div>

            <div className='w-[80px] h-[810px] flex flex-col items-center justify-center focus:outline-none'>

                {!buildingData[0].allBuild && buildingData.map((item, index) => (
                    <div key={item.name + item.floor}>
                        <button onClick={() => { setProject(getBuilding(city, item.name, item.floor)); setFloor(item.floor) }} className={`h-[50px] w-[50px] flex border rounded mb-[10px] justify-center items-center ${item.floor == floor ? `border-[#008954]` : `border-[#dbdbdb]`}`}>{item.floor}</button>
                    </div>
                ))}

                {/* Button for scale */}
                <div>
                    <button onClick={() => handleZoom("+")} className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mt-[30px] mb-[10px] justify-center items-center'>+</button>
                    <button onClick={() => handleZoom("-")} className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mb-[10px] justify-center items-center'>-</button>
                </div>

            </div>

        </div>

    );
};

export default MapProject;