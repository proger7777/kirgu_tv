import { Container, Sprite, Stage } from "@pixi/react";
import { BaseTexture, Rectangle, SCALE_MODES, Texture } from "pixi.js";
import { useEffect, useRef, useState } from "react";
import { getBuilding } from "./assetsMap";
import marker from "../../images/textureBuildingMap/markTerminal.png"
import skelet from "../../images/textureBuildingMap/makhachkala/start/skelet.png"
import { useNavigate } from "react-router-dom";

BaseTexture.defaultOptions.scaleMode = SCALE_MODES.NEAREST

const StartMapProject = ({ buildingData, activeBuilding, city, activeTerminal, goBuilding, setFloor, activeZone, setActiveZone }) => {

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
            setFloor(activeTerminal.floor)

        } else {
            // Default setting terminal of building map
            setProject(getBuilding(city, buildingData[0].name, 1))
            setActiveFlour(1)
            setScale(0.95)
            setPosition({ x: 1365 / 2, y: 805 / 2 })
            setTerminal(false)
            setFloor(1)

        }
    }, [buildingData]);

    // Refresh setting after change projectMap, floor
    useEffect(() => {
        setPosition({ x: 1365 / 2, y: 805 / 2 })
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
    const [position, setPosition] = useState({ x: 1365 / 2, y: 805 / 2 });
    const [alpha, setAlpha] = useState(1);

    function onStart(e) {
        isDragging.current = true;
        offset.current = {
            x: e.data.global.x - position.x,
            y: e.data.global.y - position.y,
        };
        setAlpha(0.7);
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

    const navigate = useNavigate();

    return (
        <div className="flex justify-between mt-[7px]">

            <div className="border border-[#dbdbdb] rounded">
                <Stage
                    width={1365}
                    height={805}
                    options={{ backgroundColor: 0xffffff }}>
                    {/* Create container for use collision */}
                    <Container
                        position={[0, 0]}
                        hitArea={new Rectangle(0, 0, 1365, 805)}>

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
                                position={{ x: -400, y: -148 }}
                                scale={0.4}
                                anchor={0.5}
                                image={project[0]}
                                ontap={() => {
                                    if (click) {
                                        // console.log("DRAGGING", click)
                                        setClick(false)
                                    } else {
                                        // console.log("TAP", click)
                                        goBuilding(["Детский_отдел", 2, activeFlour])
                                    }
                                }

                                }
                                onclick={() => {
                                    if (click) {
                                        // console.log("DRAGGING", click)
                                        setClick(false)
                                    } else {
                                        // console.log("TAP", click)
                                        goBuilding(["Детский_отдел", 2, activeFlour])
                                    }
                                }

                                } />

                            <Sprite
                                interactive={true}
                                position={{ x: -50, y: -81 }}
                                scale={0.9}
                                anchor={0.5}
                                image={project[1]}
                                ontap={() => {
                                    if (click) {
                                        // console.log("DRAGGING", click)
                                        setClick(false)
                                    } else {
                                        // console.log("TAP", click)
                                        goBuilding(["Садовый_центр", 4, activeFlour])
                                    }
                                }

                                }
                                onclick={() => {
                                    if (click) {
                                        // console.log("DRAGGING", click)
                                        setClick(false)
                                    } else {
                                        // console.log("TAP", click)
                                        goBuilding(["Садовый_центр", 4, activeFlour])
                                    }
                                }

                                } />

                            <Sprite
                                interactive={true}
                                position={{ x: -372, y: 138 }}
                                scale={0.4}
                                anchor={0.5}
                                image={project[2]}
                                ontap={() => {
                                    if (click) {
                                        // console.log("DRAGGING", click)
                                        setClick(false)
                                    } else {
                                        // console.log("TAP", click)
                                        goBuilding(["MTV", 1, activeFlour])
                                    }
                                }

                                }
                                onclick={() => {
                                    if (click) {
                                        // console.log("DRAGGING", click)
                                        setClick(false)
                                    } else {
                                        // console.log("TAP", click)
                                        goBuilding(["MTV", 1, activeFlour])
                                    }
                                }

                                } />

                            <Sprite
                                interactive={true}
                                position={{ x: 430, y: 150 }}
                                scale={0.4}
                                anchor={0.5}
                                image={project[3]}
                                ontap={() => {
                                    if (click) {
                                        // console.log("DRAGGING", click)
                                        setClick(false)
                                    } else {
                                        // console.log("TAP", click)
                                        goBuilding(["Мебельный_корпус", 3, activeFlour])
                                    }
                                }

                                }
                                onclick={() => {
                                    if (click) {
                                        // console.log("DRAGGING", click)
                                        setClick(false)
                                    } else {
                                        // console.log("TAP", click)
                                        goBuilding(["Мебельный_корпус", 3, activeFlour])
                                    }
                                }

                                } />

                            {/* Sprite marker position terminal */}
                            {terminal && (

                                <Sprite
                                    position={positionTerminal}
                                    anchor={0.5}
                                    cursor={"pointer"}
                                    image={marker} />

                            )}


                            <Sprite
                                width={86}
                                height={30}
                                position={{ x: 430, y: 240 }}
                                anchor={0.5}
                                alpha={0.4}
                                texture={Texture.WHITE}
                                tint={0xffa500}
                            />

                            {/* This sections of code show active zone in building map*/}
                            {activeZone?.props &&
                                activeZone.props.map((item, index) =>

                                    <Sprite
                                        key={index}
                                        position={item.position}
                                        anchor={0.5}
                                        alpha={0.4}
                                        texture={Texture.WHITE}
                                        width={item.width}
                                        height={item.height}
                                        tint={0xffa500}
                                        interactive={true}
                                        ontap={() => {
                                            if (click) {
                                                // console.log("DRAGGING", click)
                                                setClick(false)
                                            } else {
                                                // console.log("TAP", click)
                                                console.log(activeZone)
                                                goBuilding([activeZone.build[0], activeZone.build[1], activeFlour])
                                            }
                                        }}
                                        onclick={() => {
                                            if (click) {
                                                // console.log("DRAGGING", click)
                                                setClick(false)
                                            } else {
                                                // console.log("TAP", click)
                                                goBuilding([activeZone.build[0], activeZone.build[1], activeFlour])
                                            }
                                        }}
                                    />

                                )}


                        </Container>

                    </Container>

                </Stage>
            </div>

            <div className='w-[80px] h-[775px] flex flex-col items-center justify-center bg-[yellowsd]'>

                {/* Block for move around map floor */}
                {buildingData.map((item, index) => (
                    <div key={item.name + item.floor}>
                        <button onClick={() => { setProject(getBuilding(city, item.name, item.floor)); setActiveFlour(item.floor); setFloor(item.floor) }} className={`h-[50px] w-[50px] flex border rounded mb-[10px] justify-center items-center ${item.floor == activeFlour ? `border-[#008954]` : `border-[#dbdbdb]`}`}>{item.floor}</button>
                    </div>
                ))}

                {/* Button for scale */}
                <div>
                    <button onClick={() => scale < 2.15 && setScale(scale + 0.3)} className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mt-[30px] mb-[10px] justify-center items-center'>+</button>
                    <button onClick={() => scale > 0.95 && setScale(scale - 0.3)} className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mb-[10px] justify-center items-center'>-</button>
                </div>

            </div>

        </div>
    )
}

export default StartMapProject;