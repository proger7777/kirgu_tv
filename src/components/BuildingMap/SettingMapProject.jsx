import { Container, Sprite, Stage } from "@pixi/react";
import { BaseTexture, Rectangle, SCALE_MODES } from "pixi.js";
import { useEffect, useRef, useState } from "react";
import { getBuilding } from "./assetsMap";
import marker from "../../images/textureBuildingMap/markTerminal.png"

BaseTexture.defaultOptions.scaleMode = SCALE_MODES.NEAREST

const SettingMapProject = ({ city, buildingData, settingsTerm }) => {

    const bunny = "https://pixijs.io/pixi-react/img/bunny.png"

    // Variables Sprite map and scale Sprite, set values random in order to avoid error 
    const [activeFlour, setActiveFlour] = useState([1, 0]);
    const [project, setProject] = useState(getBuilding(city,( buildingData[0].name == "kirgu" ?  `set-${buildingData[0].name}` : buildingData[0].name ), 1));

    // Create collision border for canvas
    const border = new Rectangle(0, 0, 1620, 775)

    // Variable for moving mouse
    const [click, setClick] = useState(false);
    const [terminal, setTerminal] = useState(false);
    const [positionTerminal, setPositionTerminal] = useState({ x: 0, y: 0 });


    // Set active project and active floor and refresh data after change projectMap, floor and city
    useEffect(() => {
        setProject(getBuilding(city, ( buildingData[0].name == "kirgu" ?  `set-${buildingData[0].name}` : buildingData[0].name ) , 1))
        setActiveFlour([1, 0])
        setPosition({ x: 1620 / 2, y: 775 / 2 })
        setTerminal(false)
    }, [buildingData]);

    useEffect(() => {
        setPosition({ x: 1620 / 2, y: 775 / 2 })
        settingsTerm(false)
    }, [project]);

    useEffect(() => {
        console.log(buildingData)
    }, [buildingData]);

    // Realization moving mouse
    const isDragging = useRef(false);
    const offset = useRef({ x: 0, y: 0 });
    const [position, setPosition] = useState(0);
    const [alpha, setAlpha] = useState(1);

    function onStart(e) {
        isDragging.current = true;
        offset.current = {
            x: e.data.global.x - position.x,
            y: e.data.global.y - position.y,
        };
        setAlpha(0.5);
        setPositionTerminal({ x: offset.current.x, y: offset.current.y })
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
                    width={1620}
                    height={775}
                    options={{ backgroundColor: 0xffffff }}>
                    {/* Create container for use collision */}
                    <Container
                        position={[0, 0]}
                        hitArea={border}>

                        {/* Create container for moving group sprite */}
                        <Container
                            interactive={true}
                            position={position}
                            scale={1}
                            pointerdown={onStart}
                            pointerup={onEnd}
                            pointerupoutside={onEnd}
                            pointermove={onMove}

                            // Option setting! Put position terminal
                            ontap={() => {
                                // Check Tap or Dragging
                                if (click) {
                                    setClick(false)
                                } else {
                                    setTerminal(true)
                                    console.log(activeFlour)
                                    settingsTerm([activeFlour[0], activeFlour[1], { x: positionTerminal.x, y: positionTerminal.y }])
                                }
                            }}
                            onclick={() => {
                                // Check Tap or Dragging
                                if (click) {
                                    // console.log("DRAGGING", click)
                                    setClick(false)
                                } else {
                                    // console.log("TAP", click)
                                    setTerminal(true)
                                    settingsTerm([activeFlour, { x: positionTerminal.x, y: positionTerminal.y }])
                                }
                            }}
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
                                    cursor={"pointer"}
                                    image={marker} />

                            )}

                        </Container>

                    </Container>

                </Stage>
            </div>

            <div className='w-[80px] h-[775px] flex flex-col items-center justify-center bg-[yellowsd]'>

                {/* Block for move around map floor */}
                {buildingData.map((item, index) => (
                    <div key={item.name+item.floor}>
                        <button onClick={() => { setProject(getBuilding(city,( item.name == "kirgu" ? `set-${item.name}` : item.name ), item.floor)); setActiveFlour([item.floor, index]); setTerminal(false); settingsTerm(false) }} className={`h-[50px] w-[50px] flex border rounded mb-[10px] justify-center items-center ${item.floor == activeFlour[0] ? `border-[#008954]` : `border-[#dbdbdb]`}`}>{item.floor}</button>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default SettingMapProject;