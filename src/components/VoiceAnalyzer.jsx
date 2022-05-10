// import { useEffect, useRef } from "react";
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

// const VoiceAnalyzer = () => {

//     let context, analyser, src;

//     let wrapRef = useRef()

//     let num = 16
//     let array = new Uint8Array(num*2)

//     function start() {
//         SpeechRecognition.startListening({ continuous: true })

//         context = new AudioContext(); /*СОЗДАЕМ НОВЫЙ ЭКЗЕМПЛЯР КЛАССА AudioContext*/

//         analyser = context.createAnalyser();

//         navigator.mediaDevices.getUserMedia({
//             audio: true
//         }).then(stream => {
//             src = context.createMediaStreamSource(stream);
//             src.connect(analyser);
//             loop();
//         }).catch(error => {
//             alert(error + '\r\n\ Отклонено. Страница будет обновлена!');
//             window.location.reload();
//         });
//     }
    
//     function loop() {
//         window.requestAnimationFrame(loop);
//         analyser.getByteFrequencyData(array);
//         for(var i = 0; i < num; i++){
//             wrapRef.current.children[i].style.minHeight = array[i+num]+'px';
//         }
//     }

   
//     useEffect(() => {
//         start()
//     }, [])

//     return(
//         <div ref={wrapRef} className='flex space-x-[30px] h-[200px] items-center'>
//             {[...Array(num).keys()].map(i =>
//                 <span key={i} style={{height: '9px'}} className='w-[9px] bg-green rounded-[20px]'></span>
//             )} 
//         </div>
//     )
// }

// export default VoiceAnalyzer;