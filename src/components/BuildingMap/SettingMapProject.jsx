import { Container, Sprite, Stage } from "@pixi/react";
import { BaseTexture, Rectangle, SCALE_MODES } from "pixi.js";
import { useEffect, useRef, useState } from "react";
import { getBuilding } from "./assetsMap";
import marker from "../../images/textureBuildingMap/markTerminal.png"

BaseTexture.defaultOptions.scaleMode = SCALE_MODES.NEAREST

const SettingMapProject = ({ city, buildingData, settingsTerm }) => {

    const [activeFlour, setActiveFlour] = useState([1, 0]);
    const [terminal, setTerminal] = useState(false);

    const centerCoordinate = { x: (1620 - (1920 * 0.8)) / 2, y: (805 - (1090 * 0.8)) / 2 }
    const [positionTerminal, setPositionTerminal] = useState({ x: 395, y: 170 });
    const [project, setProject] = useState(getBuilding(city,( buildingData[0].name == "kirgu" ?  `set-${buildingData[0].name}` : buildingData[0].name ), 1));

    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(0.8);
    const [position, setPosition] = useState({ x: centerCoordinate.x, y: centerCoordinate.y });


    // Set active project and active floor and refresh data after change projectMap, floor and city
    useEffect(() => {
        setProject(getBuilding(city, ( buildingData[0].name ) , 1))
        setActiveFlour([1, 0])
        setPosition({ x: centerCoordinate.x, y: centerCoordinate.y })
        setTerminal(false)
    }, [buildingData]);

    useEffect(() => {
        setPosition({ x: centerCoordinate.x, y: centerCoordinate.y })
        settingsTerm(false)
    }, [project]);

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

    const handleClick = (e) => {
        const svg = document.getElementById("map-svg");
        const svgRect = svg.getBoundingClientRect();
        const clickedX = (e.clientX - svgRect.left - position.x) / scale;
        const clickedY = (e.clientY - svgRect.top - position.y) / scale;

        console.log([e.clientX, e.clientY])
        setTerminal(true)
        setPositionTerminal({ x: clickedX, y: clickedY });
        settingsTerm([activeFlour[0], activeFlour[1], { x: clickedX, y: clickedY }])
    };

    return (
        <div className="flex justify-between mt-[7px]">

            <div className="border border-[#dbdbdb] rounded">
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
                                href={marker}
                                width={200}
                                height={100}
                                x={positionTerminal.x - 200 / 2}
                                y={positionTerminal.y - 100 / 2}
                            />
                        }

                    </g>
                </svg>
            </div>

            <div className='w-[80px] h-[775px] flex flex-col items-center justify-center bg-[yellowsd]'>

                {/* Block for move around map floor */}
                {buildingData.map((item, index) => (
                    <div key={item.name+item.floor}>
                        <button onClick={() => { setProject(getBuilding(city,( item.name ), item.floor)); setActiveFlour([item.floor, index]); setTerminal(false); settingsTerm(false) }} className={`h-[50px] w-[50px] flex border rounded mb-[10px] justify-center items-center ${item.floor == activeFlour[0] ? `border-[#008954]` : `border-[#dbdbdb]`}`}>{item.floor}</button>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default SettingMapProject;