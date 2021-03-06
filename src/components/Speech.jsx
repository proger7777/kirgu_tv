import React, { useState }  from 'react';
import { useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import useDebounce from "../hooks/useDebounce";
import NoSupportSpeech from './NoSupportSpeech';

const Speech = ({onChange, onStop, classes}) => {

    const naviate = useNavigate()
    const { transcript } = useSpeechRecognition();

    const [noSupport, setNoSupport] = useState(false)

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
            setNoSupport(true)
            setTimeout(function() {
                naviate('/search')
            }, 2000)
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
            if(stream) stream.getTracks().forEach((track) => track.stop())
        }
    }, [])

    return(
        <>
            <div className={`flex flex-col items-center justify-center ${classes}`}>
                <h2 className='text-[35px] text-gray'>????????????????...</h2>
                <div ref={wrapRef} className='flex items-center space-x-[30px] h-[300px]'>
                    {[...Array(num).keys()].map(i =>
                        <span key={i} style={{height: '9px'}} className='w-[9px] bg-green rounded-[20px]'></span>
                    )} 
                </div>   
            </div>

            {noSupport && <NoSupportSpeech /> }
        </>
    )

}


export default Speech;