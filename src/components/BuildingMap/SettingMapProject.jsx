import { Container, Graphics, Sprite, Stage } from "@pixi/react";
import { Rectangle, SCALE_MODES, settings, Texture } from "pixi.js";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Garden, getBuilding, Tech } from "./assetsMap";
import marker from "../../images/iconTV.png"

settings.SCALE_MODE = SCALE_MODES.NEAREST;

const SettingMapProject = ({ width, height, city, buildingData, settingsTerm }) => {

    const bunny = "https://pixijs.io/pixi-react/img/bunny.png"

    // Variables Sprite map and scale Sprite, set values random in order to avoid error 
    const [activeFlour, setActiveFlour] = useState([3, 0]);
    const [project, setProject] = useState(getBuilding(city, buildingData[0].name, buildingData[0].floor));

    // Create collision border for canvas
    const border = new Rectangle(0, 0, width, height)

    // Variable for moving mouse
    const [click, setClick] = useState(false);
    const [terminal, setTerminal] = useState(false);
    const [positionTerminal, setPositionTerminal] = useState({ x: 0, y: 0 });


    // Set active project and active floor and refresh data after change projectMap, floor and city
    useEffect(() => {
        setProject(getBuilding(city, buildingData[0].name, buildingData[0].floor))
        setActiveFlour([buildingData[0].floor, 0])
        setPosition({ x: width / 2, y: height / 2 })
        setTerminal(false)
    }, [buildingData]);

    useEffect(() => {
        setPosition({ x: width / 2, y: height / 2 })
        settingsTerm(false)
    }, [project]);


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
                    width={width}
                    height={height}
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
                        <button onClick={() => { setProject(getBuilding(city, item.name, item.floor)); setActiveFlour([item.floor, index]); setTerminal(false); settingsTerm(false) }} className={`h-[50px] w-[50px] flex border rounded mb-[10px] justify-center items-center ${index == activeFlour[1] ? `border-[#008954]` : `border-[#dbdbdb]`}`}>{item.floor}</button>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default SettingMapProject;