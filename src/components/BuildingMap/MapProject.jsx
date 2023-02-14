import { Container, Graphics, Sprite, Stage } from "@pixi/react";
import { Rectangle, SCALE_MODES, settings, Texture } from "pixi.js";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Garden, getBuilding, Tech } from "./assetsMap";
import marker from "../../images/markKirgu.png"

settings.SCALE_MODE = SCALE_MODES.NEAREST;

const MapProject = ({ buildingData }) => {

    const bunny = "https://pixijs.io/pixi-react/img/bunny.png"

    const [activeFlour, setActiveFlour] = useState(0);

    // Set active project and active floor
    useEffect(() => {
        setProject(getBuilding(buildingData[0].name, buildingData[0].floor))
        setActiveFlour(0)
        setScale(1)
        setPosition({ x: width / 2, y: height / 2 })
    }, [buildingData]);


    // Variables Sprite map and scale Sprite
    const [project, setProject] = useState(Tech(2));
    const [scale, setScale] = useState(1);

    // Create canvas
    const width = 1375
    const height = 812

    // Create collision border for canvas
    const border = new Rectangle(0, 0, width, height)

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
        console.log(e.data)
        console.log(position.x)
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
        <div className="flex justify-between">

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
                        pointermove={onMove}>

                        {/* Sprite building map */}
                        <Sprite
                            alpha={alpha}
                            // position={position}
                            anchor={0.5}
                            // scale={scale}
                            image={project} />

                        {/* Sprite marker position terminal */}
                        <Sprite
                            x={0}
                            y={0}
                            // position={[position.x + 290, position.y + 210]}
                            anchor={[0.5, 0.5]}
                            cursor={"pointer"}
                            // scale={scale}
                            image={marker} />

                    </Container>

                </Container>

            </Stage>

            <div className='w-[80px] h-[812px] flex flex-col items-center justify-center bg-[yellowsd]'>

                {/* Block for move around map floor */}
                {buildingData.map((item, index) => (
                    <div key={item.id}>
                        <button onClick={() => { setProject(getBuilding(item.name, item.floor)); setActiveFlour(index) }} className={`h-[50px] w-[50px] flex border rounded mb-[10px] justify-center items-center ${index == activeFlour ? `border-[#008954]` : `border-[#dbdbdb]`}`}>{item.floor}</button>
                    </div>
                ))}

                {/* Button for scale */}
                <button onClick={() => scale != 2.5 && setScale(scale + 0.3)} className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mt-[30px] mb-[10px] justify-center items-center'>+</button>
                <button onClick={() => scale != 1 && setScale(scale - 0.3)} className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mb-[10px] justify-center items-center'>-</button>

            </div>

        </div>
    )
}

export default MapProject;