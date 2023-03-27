import { Container, Graphics, Sprite, Stage } from "@pixi/react";
import { BaseTexture, Rectangle, SCALE_MODES, Texture } from "pixi.js";
import { useEffect, useRef, useState } from "react";
import { getBuilding } from "./assetsMap";
import marker from "../../images/textureBuildingMap/markTerminal.png"
import { useNavigate } from "react-router-dom";

BaseTexture.defaultOptions.scaleMode = SCALE_MODES.NEAREST

const MapProject = ({ buildingData, city, activeTerminal, floor, setFloor, activeZone, setActiveZone }) => {

    const bunny = "https://pixijs.io/pixi-react/img/bunny.png"

    // Variables Sprite map and scale Sprite
    const [project, setProject] = useState(getBuilding(city, buildingData[0].name, floor));
    const [scale, setScale] = useState(0.25);

    // This variable for filter click and move mouse
    const [click, setClick] = useState(false);

    const [area, setArea] = useState();

    // Variable for moving mouse
    const [terminal, setTerminal] = useState(false);
    const [positionTerminal, setPositionTerminal] = useState({ x: 0, y: 0 });
    const [toggle, setToggle] = useState(false);

    // Set active project and active floor 
    useEffect(() => {

        setToggle(true)
        setProject(getBuilding(city, buildingData[0].name, floor))
        setArea(buildingData.filter(item => item.floor == floor))

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
        setPosition({ x: 1620 / 2, y: 805 / 2 })
        setScale(0.25)
        setArea(buildingData.filter(item => item.floor == floor))

        if (toggle) {
            if (floor !== activeTerminal.floor) {
                setTerminal(false)
            } else {
                setTerminal(true)
            }
        }
    }, [floor]);

    // Realization moving mouse
    const isDragging = useRef(false);
    const offset = useRef({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: 1620 / 2, y: 805 / 2 });
    const [alpha, setAlpha] = useState(1);

    function onStart(e) {
        isDragging.current = true;
        offset.current = {
            x: e.data.global.x - position.x,
            y: e.data.global.y - position.y,
        };
        setAlpha(0.7);
        console.log(`[ ${Math.round(offset.current.x * 4)}, ${Math.round(offset.current.y * 4)} ],`)
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
                    width={1620}
                    height={805}
                    options={{ backgroundColor: 0xffffff }}>

                    {/* Create container for use collision */}
                    <Container
                        position={[0, 0]}
                        hitArea={new Rectangle(0, 0, 1620, 805)}>

                        {/* Create container for moving group sprite */}
                        <Container
                            interactive={true}
                            position={position}
                            scale={scale}
                            pointerdown={onStart}
                            pointerup={onEnd}
                            pointerupoutside={onEnd}
                            pointermove={onMove}
                        >

                            {/* Sprite building map */}
                            <Sprite
                                alpha={alpha}
                                anchor={0.5}
                                image={project}
                            />

                            {/* Sprite marker position terminal */}
                            {terminal && (

                                <Sprite
                                    position={positionTerminal}
                                    anchor={[0.5, 0.5]}
                                    image={marker}
                                />

                            )}

                            {/* This sections of code for click processing and set active zone*/}
                            {/* For hard shapes we use <Graphics/>, for simple shapes we use <Sprite/> (square) */}
                            {area && area[0]?.zone.map((item) =>

                                item.props.map((it, index) =>

                                    it.graphics &&

                                    <Graphics
                                        key={index}
                                        alpha={0}
                                        draw={(g) => {
                                            g.clear();
                                            g.lineStyle(0);
                                            g.beginFill(0xffa500, 0.5);

                                            g.moveTo(it.startPoint[0], it.startPoint[1])

                                            it.point.map(it => {
                                                g.lineTo(it[0], it[1])
                                            })

                                            g.closePath()
                                            g.endFill();
                                        }}

                                        interactive={true}
                                        ontap={() => {
                                            if (click) {
                                                // console.log("DRAGGING", click)
                                                setClick(false)
                                            } else {
                                                // console.log("TAP", click)
                                                setActiveZone(item)
                                            }
                                        }}
                                        onclick={() => {
                                            if (click) {
                                                // console.log("DRAGGING", click)
                                                setClick(false)
                                            } else {
                                                // console.log("TAP", click)
                                                setActiveZone(item)
                                            }
                                        }}

                                    />
                                )
                            )}

                            {/* This sections of code show active zone in building map*/}
                            {activeZone?.props &&
                                activeZone.props.map((item, index) =>

                                    item.graphics &&

                                    <Graphics
                                        key={index}

                                        draw={(g) => {
                                            g.clear();
                                            g.lineStyle(0);
                                            g.beginFill(0xffa500, 0.5);

                                            g.moveTo(item.startPoint[0], item.startPoint[1])

                                            item.point.map(it => {
                                                g.lineTo(it[0], it[1])
                                            })

                                            g.closePath()
                                            g.endFill();
                                        }}

                                        interactive={true}
                                        ontap={() => {
                                            if (click) {
                                                // console.log("DRAGGING", click)
                                                setClick(false)
                                            } else {
                                                // console.log("TAP", click)
                                                console.log(item)
                                                navigate(`/catalog/${activeZone.id}`)
                                            }
                                        }}
                                        onclick={() => {
                                            if (click) {
                                                // console.log("DRAGGING", click)
                                                setClick(false)
                                            } else {
                                                // console.log("TAP", click)
                                                navigate(`/catalog/${activeZone.id}`)
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
                        <button onClick={() => { setProject(getBuilding(city, item.name, item.floor)); setFloor(item.floor); setActiveZone() }} className={`h-[50px] w-[50px] flex border rounded mb-[10px] justify-center items-center ${item.floor == floor ? `border-[#008954]` : `border-[#dbdbdb]`}`}>{item.floor}</button>
                    </div>
                ))}

                {/* Button for scale */}
                <div>
                    <button onClick={() => scale < 0.55 && setScale(scale + 0.1)} className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mt-[30px] mb-[10px] justify-center items-center'>+</button>
                    <button onClick={() => scale > 0.25 && setScale(scale - 0.1)} className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mb-[10px] justify-center items-center'>-</button>
                </div>

            </div>

        </div>
    )
}

export default MapProject;