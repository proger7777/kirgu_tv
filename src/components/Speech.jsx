import { useRef, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import useDebounce from "../hooks/useDebounce";

const Speech = ({onChange, onStop, classes}) => {

    const { transcript } = useSpeechRecognition();
 
    useEffect(() => {
        if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
          alert("Упс, ваш браузер не поддерживает!");
        }  
    }, []);

    let context, requestId, analyser, array, src;

    let wrapRef = useRef(null)

    let num = 16

    let stream = null

    const debouncedSearchTerm = useDebounce(transcript, 1500);

    array = new Uint8Array(num * 2)

    async function startVoice() {
        SpeechRecognition.startListening({ continuous: true })

        SpeechRecognition.onaudiostart = function() {
            console.log('Audio capturing ended');
        }

        context = new AudioContext();

        analyser = context.createAnalyser();

        try {
            stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            src = context.createMediaStreamSource(stream);
            src.connect(analyser);
            loop();
        } catch(err) {
            alert(err + '\r\n\ Отклонено. Страница будет обновлена!');
        }
    } 

    function loop() {
        requestId = window.requestAnimationFrame(loop);
        analyser.getByteFrequencyData(array);
        for(var i = 0; i < num; i++){
            let height = array[i+num];
            wrapRef.current.children[i].style.minHeight = (height - 50) +'px';
            wrapRef.current.children[i].style.opacity = 0.008*height;
        }
    }

    useEffect(() => {
        if(debouncedSearchTerm) onStop()
    }, [debouncedSearchTerm])

    useEffect(() => {
        onChange(transcript)
    }, [transcript])

    useEffect(() => {
        startVoice()
    }, [])

    useEffect(()=>{
        return () => { 
            SpeechRecognition.stopListening() 
            window.cancelAnimationFrame(requestId)
            stream.getTracks().forEach((track) => track.stop())
        }
    }, [])

    return(
        <div className={`flex flex-col items-center justify-center ${classes}`}>
            <h2 className='text-[35px] text-gray'>Говорите...</h2>
            <div ref={wrapRef} className='flex items-center space-x-[30px] h-[300px]'>
                {[...Array(num).keys()].map(i =>
                    <span key={i} style={{height: '9px'}} className='w-[9px] bg-green rounded-[20px]'></span>
                )} 
            </div>   
        </div>
    )

}


export default Speech;