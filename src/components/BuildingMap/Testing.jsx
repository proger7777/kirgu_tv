// import { Container, Graphics, Sprite, Stage } from "@pixi/react";
// import { Rectangle, SCALE_MODES, settings, Texture } from "pixi.js";
// import { useCallback, useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import flour from "../../images/textureBuildingMap/tech_0.png"
// import { assetsMap } from "./assetsMap";
// // import { assetsMap, Garden } from "./assetsMap";

// settings.SCALE_MODE = SCALE_MODES.NEAREST;

// const MapProject = () => {
    
//     const bunny = "https://pixijs.io/pixi-react/img/bunny.png"
//     // const map = Texture.from(bunny)//("Tech-0")
//     // const ttt = assetsMap.sprites.Tech[0]
//     const buildingData = useSelector(state => state.buildingMap.building)
    
//     const [startClick, setStartClick] = useState({x:1, y:1});
//     const [endClick, setEndClick] = useState({x:1, y:1});
    
//     const width = 1375
//     const height = 859
//     const border = new Rectangle(0, 0, width, height)
//     const [position, setPosition] = useState({ x: width / 2, y: height / 2 });

//     const sprite = useRef();
//     const [isDragging, setIsDragging] = useState(false);
//     const [click, setClick] = useState(false);
//     const onDown = useCallback((e) => {
//         setIsDragging(true)
//         setStartClick({ x:e.data.global.x, y:e.data.global.y})
//         console.log(e.data.global.x)
//     }, []);

//     const onUp = useCallback((e) => {
//         setIsDragging(false)
//         setEndClick({ x:e.data.global.x, y:e.data.global.y})
//         console.log(e.data.global.x)
//     }, []);

//     const onMove = useCallback((e) => {
//         if (isDragging && sprite.current) {
//             // console.log(e.data.global.x)
//             setPosition(({ x: e.data.global.x, y: e.data.global.y }));
//             setClick(true)
//         }
//     }, [isDragging, setPosition]
//     );

//     useEffect(() => {
//         // console.log(startClick.x-endClick.x)
//         // console.log(ttt)
//         console.log("../../images/textureBuildingMap/tech_0.png")
//     }, [startClick, endClick]);

//     const [scale, setScale] = useState(1);


//     const draw = useCallback((g) => {
//         g.clear();
//         g.lineStyle(0);
//         g.beginFill(0xfff, 1);
//         g.drawCircle(position.x, position.y, 20);
//         g.endFill();
//     }, []);


//     const io = "../../images/textureBuildingMap/tech_0.png"
//     const ipo = require(io)
//     const im = Image(io)

//     return (
//         <div className="flex justify-between">

//             <Stage
//                 width={width}
//                 height={height}
//                 options={{ backgroundColor: 0xffffff }}>
//                 <Container
//                     position={[0, 0]}
//                     hitArea={border}

//                 >
//                     <Sprite
//                         ref={sprite}
//                         x={position.x}
//                         y={position.y}
//                         anchor={0.5}
//                         interactive={true}
//                         cursor={"pointer"}
//                         scale={scale}
//                         // texture={Texture.from(im)}
//                         // image={require("../../images/textureBuildingMap/tech_0.png")}
//                         image={assetsMap.sprites.Tech}
//                         alpha={isDragging ? 0.5 : 1}
//                         ontap={() => {
//                             if (click) {
//                                 console.log("1", click)
//                                 setClick(false)
//                             } else console.log("2", click)
//                         }}
//                         onclick={() => {
//                             if (click) {
//                                 console.log("1", click)
//                                 setClick(false)
//                             } else console.log("2", click)
//                         }}


//                         pointerdown={onDown}
//                         pointerup={onUp}
//                         pointerupoutside={onUp}
//                         pointermove={onMove}
//                     />
//                     <Graphics draw={draw} />
//                 </Container>
//             </Stage>

//             <div className='w-[80px] h-[879px] flex flex-col items-center justify-center bg-[yellowsd]'>

//                 {buildingData.tech.map((item) => (
//                     <div key={item.id}>
//                         <button className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mb-[10px] justify-center items-center'>{item.floor}</button>
//                     </div>
//                 ))}

//                 <button onClick={() => scale != 2.5 && setScale(scale + 0.3)} className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mt-[30px] mb-[10px] justify-center items-center'>+</button>
//                 <button onClick={() => scale != 1 && setScale(scale - 0.3)} className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mb-[10px] justify-center items-center'>-</button>

//             </div>
//         </div>
//     )
// }

// export default MapProject;





// import { Container, Graphics, Sprite, Stage } from "@pixi/react";
// import { Rectangle, SCALE_MODES, settings, Texture } from "pixi.js";
// import { useCallback, useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import { Garden, Tech } from "./assetsMap";
// import marker from "../../images/markKirgu.png"

// settings.SCALE_MODE = SCALE_MODES.NEAREST;

// const MapProject = () => {

//     const bunny = "https://pixijs.io/pixi-react/img/bunny.png"
//     // const map = Texture.from(bunny)//("Tech-0")
//     // const ttt = assetsMap.sprites.Tech[0]
//     const buildingData = useSelector(state => state.buildingMap.building)

//     const [project, setProject] = useState(Tech(2));

//     const [startClick, setStartClick] = useState({ x: 1, y: 1 });
//     const [endClick, setEndClick] = useState({ x: 1, y: 1 });

//     const width = 1375
//     const height = 859
//     const border = new Rectangle(0, 0, width, height)







//     const isDragging = useRef(false);
//     const offset = useRef({ x: 0, y: 0 });
//     const [position, setPosition] = useState({ x: width / 2, y: height / 2 });
//     const [alpha, setAlpha] = useState(1);
//     // const [zIndex, setZIndex] = useState(index);

//     function onStart(e) {
//         isDragging.current = true;
//         offset.current = {
//             x: e.data.global.x - position.x,
//             y: e.data.global.y - position.y,
//         };

//         setAlpha(0.5);
//         //   setZIndex(index++);
//     }

//     function onEnd(e) {
//         isDragging.current = false;
//         setAlpha(1);
//         console.log(e.data)
//         console.log(position.x)
//     }

//     function onMove(e) {
//         if (isDragging.current) {
//             setPosition({
//                 x: e.data.global.x - offset.current.x,
//                 y: e.data.global.y - offset.current.y,
//             });
//         }
//     }











//     // const [position, setPosition] = useState({ x: width / 2, y: height / 2 });
//     // const sprite = useRef();
//     // const [isDragging, setIsDragging] = useState(false);
//     // const [click, setClick] = useState(false);
//     // const onDown = useCallback((e) => {
//     //     setIsDragging(true)
//     //     setStartClick({ x:e.data.global.x, y:e.data.global.y})
//     //     console.log(e.data.global.x)
//     // }, []);

//     // const onUp = useCallback((e) => {
//     //     setIsDragging(false)
//     //     setEndClick({ x:e.data.global.x, y:e.data.global.y})
//     //     console.log(e.data.global.x)
//     // }, []);

//     // const onMove = useCallback((e) => {
//     //     if (isDragging && sprite.current) {
//     //         // console.log(e.data.global.x)
//     //         setPosition(({ x: e.data.global.x, y: e.data.global.y }));
//     //         setClick(true)
//     //     }
//     // }, [isDragging, setPosition]
//     // );

//     useEffect(() => {
//         // console.log(startClick.x-endClick.x)
//         // console.log(ttt)
//         // console.log("../../images/textureBuildingMap/tech_0.png")
//     }, [startClick, endClick]);

//     const [scale, setScale] = useState(1);


//     const draw = useCallback((g) => {
//         g.clear();
//         g.lineStyle(0);
//         g.beginFill(0xfff, 1);
//         g.drawCircle(position.x, position.y, 20);
//         g.endFill();
//     }, []);


//     // const io = "../../images/textureBuildingMap/tech_0.png"
//     // const ipo = require(io)
//     // const im = Image(io)

//     return (
//         <div className="flex justify-between">

//             <Stage
//                 width={width}
//                 height={height}
//                 options={{ backgroundColor: 0xffffff }}>
//                 <Container
//                 position={[0, 0]}
//                 hitArea={border}>

//                 <Container
//                     // position={[0, 0]}
//                     // hitArea={border}
//                     interactive={true}
//                     pointerdown={onStart}
//                         pointerup={onEnd}
//                         pointerupoutside={onEnd}
//                         pointermove={onMove}
//                 >
//                     <Sprite
//                         x={100}
//                         y={100}
//                         alpha={alpha}
//                         position={position}
//                         anchor={0.5}
//                         scale={scale}
//                         // texture={PIXI.Texture.WHITE}
//                         image={project}
//                         // width={100}
//                         // height={100}
//                         // zIndex={zIndex}
//                         // tint={0xff00ff}
//                         // interactive={true}
//                         // pointerdown={onStart}
//                         // pointerup={onEnd}
//                         // pointerupoutside={onEnd}
//                         // pointermove={onMove}
//                     />
//                     <Sprite
//                         x={200}
//                         y={200}
//                         position={[position.x+290, position.y+210]}
//                         anchor={[0.5, 0.5]}
//                         // interactive={true}
//                         cursor={"pointer"}
//                         scale={scale}
//                         image={marker}
//                     />
//                     <Graphics draw={draw} zIndex={1} hitArea={new Rectangle(0,0,30,30)}/>
//                 </Container>

//                 </Container>

//             </Stage>

//             <div className='w-[80px] h-[879px] flex flex-col items-center justify-center bg-[yellowsd]'>

//                 {buildingData.tech.map((item) => (
//                     <div key={item.id}>
//                         <button onClick={() => setProject(Tech(item.floor))} className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mb-[10px] justify-center items-center'>{item.floor}</button>
//                     </div>
//                 ))}

//                 <button onClick={() => scale != 2.5 && setScale(scale + 0.3)} className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mt-[30px] mb-[10px] justify-center items-center'>+</button>
//                 <button onClick={() => scale != 1 && setScale(scale - 0.3)} className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mb-[10px] justify-center items-center'>-</button>

//             </div>
//         </div>
//     )
// }

// export default MapProject;