import { Container, Sprite, Stage } from "@pixi/react";
import { BaseTexture, Rectangle, SCALE_MODES, settings } from "pixi.js";
import { useEffect, useRef, useState } from "react";
import { getBuilding, Tech } from "./assetsMap";
import marker from "../../images/markKirgu.png"
import skelet from "../../images/textureBuildingMap/makhachkala/start/skelet.png"
import mtv from "../../images/textureBuildingMap/makhachkala/tech_3.png"
import mebel from "../../images/textureBuildingMap/makhachkala/mebel_2.png"
import kids from "../../images/textureBuildingMap/makhachkala/kids_0.png"
import garden from "../../images/textureBuildingMap/makhachkala/start/garden_0.png"

BaseTexture.defaultOptions.scaleMode = SCALE_MODES.NEAREST

const StartMapProject = ({ buildingData, activeBuilding, city, activeTerminal, goBuilding }) => {

    // console.log(buildingData)
    const [activeFlour, setActiveFlour] = useState(1);
    const [project, setProject] = useState(getBuilding(city, buildingData[0].name, 1));
    const [scale, setScale] = useState(0.95);
    const [click, setClick] = useState(false);

    // Variable for moving mouse
    const [terminal, setTerminal] = useState(false);
    const [positionTerminal, setPositionTerminal] = useState({ x: 0, y: 0 });
    const checkTerminal = (floor = false) => {
        if (floor) {
            return ((activeFlour == activeTerminal.floor) && (activeTerminal.city == city && activeTerminal.buildingIndex == activeBuilding))
        } else {
            return (activeTerminal.city == city && activeTerminal.buildingIndex == activeBuilding)
        }
    }

    // Set active project and active floor 
    useEffect(() => {

        // If terminal on this city, set building map and floor of setting
        if (checkTerminal()) {
            setProject(getBuilding(city, buildingData[0].name, activeTerminal.floor))
            setActiveFlour(activeTerminal.floor)
            setTerminal(true)
            setPositionTerminal(activeTerminal.position)
            
        } else {
            // Default setting terminal of building map
            setProject(getBuilding(city, buildingData[0].name, 1))
            setActiveFlour(1)
            setScale(0.95)
            setPosition({ x: 1375 / 2, y: 805 / 2 })
            setTerminal(false)
            
        }
    }, [buildingData]);

    // Refresh setting after change projectMap, floor
    useEffect(() => {
        setPosition({ x: 1375 / 2, y: 805 / 2 })
        setScale(0.95)

        if (checkTerminal(true)) {
            setTerminal(true)
        } else {
            setTerminal(false)
        }
    }, [activeFlour]);


    // Realization moving mouse
    const isDragging = useRef(false);
    const offset = useRef({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: 1375 / 2, y: 805 / 2 });
    const [alpha, setAlpha] = useState(1);

    function onStart(e) {
        isDragging.current = true;
        offset.current = {
            x: e.data.global.x - position.x,
            y: e.data.global.y - position.y,
        };
        setAlpha(0.5);
        // console.log(offset.current)
    }

    function onEnd(e) {
        isDragging.current = false;
        setAlpha(1);
    }

    function onMove(e) {
        if (isDragging.current) {
            setPosition({
                x: e.data.global.x - offset.current.x,
                y: e.data.global.y - offset.current.y,
            });
            setClick(true)
        }
    }

    return (
        <div className="flex justify-between mt-[7px]">

            <div className="border border-[#dbdbdb] rounded">
                <Stage
                    width={1375}
                    height={805}
                    options={{ backgroundColor: 0xffffff }}>
                    {/* Create container for use collision */}
                    <Container
                        position={[0, 0]}
                        hitArea={new Rectangle(0, 0, 1375, 805)}>

                        {/* Create container for moving group sprite */}
                        <Container
                            interactive={true}
                            position={position}
                            scale={scale}
                            alpha={alpha}
                            pointerdown={onStart}
                            pointerup={onEnd}
                            pointerupoutside={onEnd}
                            pointermove={onMove}
                        >

                            {/* Sprite building map */}
                            <Sprite
                                anchor={0.5}
                                image={skelet}
                            />
                            <Sprite
                                interactive={true}
                                position={{ x: -372, y: 138 }}
                                scale={0.4}
                                anchor={0.5}
                                image={mtv}
                                // ontap={() => goBuilding(["MTV", 1])}
                                ontap={() => {
                                    if (click) {
                                        // console.log("DRAGGING", click)
                                        setClick(false)
                                    } else {
                                        // console.log("TAP", click)
                                        goBuilding(["MTV", 1])}
                                    }

                            }

                            />
                            <Sprite
                                interactive={true}
                                position={{ x: -410, y: -146 }}
                                scale={0.4}
                                anchor={0.5}
                                image={kids}
                                // ontap={() => goBuilding(["Детский_отдел", 2])}
                                ontap={() => {
                                    if (click) {
                                        // console.log("DRAGGING", click)
                                        setClick(false)
                                    } else {
                                        // console.log("TAP", click)
                                        goBuilding(["Детский_отдел", 2])}
                                    }

                            }

                            />
                            <Sprite
                                interactive={true}
                                position={{ x: 430, y: 150 }}
                                scale={0.4}
                                anchor={0.5}
                                image={mebel}
                                // ontap={() => goBuilding(["Мебельный_корпус", 3])}
                                ontap={() => {
                                    if (click) {
                                        // console.log("DRAGGING", click)
                                        setClick(false)
                                    } else {
                                        // console.log("TAP", click)
                                        goBuilding(["Мебельный_корпус", 3])}
                                    }

                            }

                            />
                            <Sprite
                                interactive={true}
                                position={{ x: -50, y: -80 }}
                                scale={0.9}
                                anchor={0.5}
                                image={garden}
                                // ontap={() => goBuilding(["Садовый_центр", 4])}
                                ontap={() => {
                                    if (click) {
                                        // console.log("DRAGGING", click)
                                        setClick(false)
                                    } else {
                                        // console.log("TAP", click)
                                        goBuilding(["Садовый_центр", 4])}
                                    }

                            }

                            />

                            {/* Sprite marker position terminal */}
                            {/* {terminal && (

                                <Sprite
                                    position={positionTerminal}
                                    anchor={0.5}
                                    cursor={"pointer"}
                                    image={marker} />

                            )} */}

                        </Container>

                    </Container>

                </Stage>
            </div>

            <div className='w-[80px] h-[775px] flex flex-col items-center justify-center bg-[yellowsd]'>

                {/* Block for move around map floor */}
                {buildingData.map((item, index) => (
                    <div key={item.name + item.floor}>
                        <button onClick={() => { setProject(getBuilding(city, item.name, item.floor)); setActiveFlour(item.floor); }} className={`h-[50px] w-[50px] flex border rounded mb-[10px] justify-center items-center ${item.floor == activeFlour ? `border-[#008954]` : `border-[#dbdbdb]`}`}>{item.floor}</button>
                    </div>
                ))}

                {/* Button for scale */}
                <div>
                    <button onClick={() => scale != 2.5 && setScale(scale + 0.3)} className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mt-[30px] mb-[10px] justify-center items-center'>+</button>
                    <button onClick={() => scale != 0.2 && setScale(scale - 0.1)} className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mb-[10px] justify-center items-center'>-</button>
                </div>

            </div>

        </div>
    )
}

export default StartMapProject;