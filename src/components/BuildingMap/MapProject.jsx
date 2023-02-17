import { Container, Sprite, Stage } from "@pixi/react";
import { Rectangle, SCALE_MODES, settings } from "pixi.js";
import { useEffect, useRef, useState } from "react";
import { getBuilding, Tech } from "./assetsMap";
import marker from "../../images/markKirgu.png"
// import marker from "../../images/iconTV.png"

settings.SCALE_MODE = SCALE_MODES.NEAREST;

const MapProject = ({ width, height, buildingData, city, activeTerminal }) => {

    const bunny = "https://pixijs.io/pixi-react/img/bunny.png"

    // Variables Sprite map and scale Sprite
    const [activeFlour, setActiveFlour] = useState(1);
    const [project, setProject] = useState(getBuilding(city, buildingData[0].name, buildingData[0].floor));
    const [scale, setScale] = useState(1);


    // Create collision border for canvas
    const border = new Rectangle(0, 0, width, height)

    // Variable for moving mouse
    const [terminal, setTerminal] = useState(false);
    const [positionTerminal, setPositionTerminal] = useState({ x: 0, y: 0 });

    // Set active project and active floor 
    useEffect(() => {

        // Default setting terminal of building map
        setProject(getBuilding(city, buildingData[0].name, 1))
        setActiveFlour(1)
        setScale(1)
        setPosition({ x: width / 2, y: height / 2 })
        setTerminal(false)

        // If terminal on this city, set building map and floor of setting
        if (activeTerminal) {
            setProject(getBuilding(city, buildingData[0].name, activeTerminal.floor))
            setActiveFlour(activeTerminal.floor)
            setTerminal(true)
            setPositionTerminal(activeTerminal.position)
        }
    }, [buildingData]);

    // Refresh setting after change projectMap, floor
    useEffect(() => {
        setPosition({ x: width / 2, y: height / 2 })
        setScale(1)

        if (activeFlour !== activeTerminal.floor) {
            setTerminal(false)
        } else {
            setTerminal(true)
        }
    }, [activeFlour]);


    // Realization moving mouse
    const isDragging = useRef(false);
    const offset = useRef({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: width / 2, y: height / 2 });
    const [alpha, setAlpha] = useState(1);

    function onStart(e) {
        isDragging.current = true;
        offset.current = {
            x: e.data.global.x - position.x,
            y: e.data.global.y - position.y,
        };
        setAlpha(0.5);
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
                        <button onClick={() => { setProject(getBuilding(city, item.name, item.floor)); setActiveFlour(item.floor); }} className={`h-[50px] w-[50px] flex border rounded mb-[10px] justify-center items-center ${ item.floor == activeFlour ? `border-[#008954]` : `border-[#dbdbdb]`}`}>{item.floor}</button>
                    </div>
                ))}

                {/* Button for scale */}
                <div>
                    <button onClick={() => scale != 2.5 && setScale(scale + 0.3)} className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mt-[30px] mb-[10px] justify-center items-center'>+</button>
                    <button onClick={() => scale != 1 && setScale(scale - 0.3)} className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mb-[10px] justify-center items-center'>-</button>
                </div>

            </div>

        </div>
    )
}

export default MapProject;