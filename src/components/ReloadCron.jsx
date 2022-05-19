import { useIdleTimer } from 'react-idle-timer' 

const ReloadCron = () => {
    
    const onIdle = () => {
        window.location.href = '/'
    }

    useIdleTimer({
        onIdle,
        timeout: 1000 * 60 * 60
    })

}

export default ReloadCron;