import { useIdleTimer } from 'react-idle-timer' 

const ReloadCron = () => {
    
    const onIdle = () => {
        window.location.href = '/'
    }

    useIdleTimer({
        onIdle,
        timeout: 1000 * 60 * 30
    })

}

export default ReloadCron;