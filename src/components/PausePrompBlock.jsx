import React, { useState } from "react";
import { useIdleTimer } from 'react-idle-timer' 

const PausePrompBlock = (props) => {
    
    const [pausePromp, setPausePrompt] = useState(false)

    const onPrompt = () => {

        // Если текущая страница Главная, то перезапускает процесс
        if(window.location.pathname === '/tv') {
            start()
        } else {
            setPausePrompt(true)
        }
    }

    const deleteVariable = () => {
        // localStorage.clear('favorites')
        // localStorage.clear('articul')
        // localStorage.clear('compare')
        // localStorage.clear('saveCompare')
    }

    const onIdle = () => {
        deleteVariable()
        window.location.href = '/tv'
    }

    const { start } = useIdleTimer({
        onPrompt,
        onIdle,
        timeout: 1000 * 60 * 3,
        promptTimeout: 1000 * 3
    })

    function cancel() {
        setPausePrompt(false)
        start()
    }

    return(
        pausePromp &&
        <div onClick={cancel}>
            <div className='bg-[#000] absolute z-30 top-0 left-0 w-full h-full opacity-80 cursor-pointer'></div>
            <div className='absolute m-auto text-center top-0 left-0 right-0 bottom-0 z-30 w-[500px] h-[90px] bg-white p-[20px]'>
            Через 3 секунды произойдет перенаправление...<br />
            Нажмите, чтобы продолжить!
            </div>
        </div>
    )
}

export default PausePrompBlock;