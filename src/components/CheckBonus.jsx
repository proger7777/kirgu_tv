import { useEffect, useState } from "react";
import { useRef } from "react";
import { useIMask } from "react-imask";
import { Link, useNavigate } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import KirguSource from "./API/KirguSource";
import BgBlock from "./BgBlock";
import Icons from "./Icons";
import PhoneNumberBlock from "./PhoneNumberBlock";

const CheckBonus = ({setEnableCheckBonus}) => {

    function close() {
        setEnableCheckBonus(false)
    }

    const navigate = useNavigate()

    const { ref, setValue, unmaskedValue } = useIMask({ mask: '+{7} (000) 000 - 00 - 00' });

    const [stage, setStage] = useState(1)
    const [checkCode, setCheckCode] = useState()

    const [codeReviewError, setCodeReviewError] = useState(false)
    
    const sendCheckCodeButt = useRef(null)

    const codeRef = useRef(null)
    

    const phoneFormRef = useRef(null)
    const codeFormRef = useRef(null)    
    
    const [sendCode, isSendCodeLoading, sendCodeError] = useFetching(async() => {
        if(unmaskedValue.length !== 11) return;
        phoneFormRef.current.classList.add('pointer-events-none', 'opacity-25')
        const code = await KirguSource.sendCode('forBonus', unmaskedValue)
        setCheckCode(code)
        setStage(2)
    })

    function setPhoneNumber(num){
        const newVal = unmaskedValue + num
        setValue(newVal)

        if(newVal.length === 11) {
            sendCheckCodeButt.current.classList.remove('bg-[#8f8f8f]')
            sendCheckCodeButt.current.classList.add('bg-[#008954]')
        }
    }

    function clearPhoneNumber(){
        if(unmaskedValue.length === 11) {
            sendCheckCodeButt.current.classList.add('bg-[#8f8f8f]')
            sendCheckCodeButt.current.classList.remove('bg-[#008954]')
        }

        var newVal = unmaskedValue.substring(0, unmaskedValue.length - 1)
        setValue(newVal)
    }

    function setCodeNumber(num){
        for (var i = 0; i < 4; i++) {
            
            if(!codeRef.current.children[i].value) {
                codeRef.current.children[i].value = num
                break;
            }

        }

        let code = ''

        for (var i = 0; i < 4; i++) {
            if(codeRef.current.children[i].value) code += codeRef.current.children[i].value
        }

        if(code.length !== 4) return;

        console.log(code + '---' + checkCode)
        
        if(code === checkCode) {
            close()
            navigate('')
        } else {
            setCodeReviewError(true)
        }
    }

    function clearCodeNumber(){
    
        for (var i = 3; i !== -1; i--) {
            if(codeRef.current.children[i].value) {
                codeRef.current.children[i].value = ''
                break;
            }
        }

        setCodeReviewError(false)
    }
    
    useEffect(()=> {

        if(sendCodeError) {
            phoneFormRef.current.classList.remove('pointer-events-none', 'opacity-25')
        }

    }, [isSendCodeLoading])

    useEffect(()=> {
        setValue('7')
    }, [])

    return(
        <>
            <BgBlock clickCallback={close} />
            <div className='absolute m-auto top-0 left-0 right-0 bottom-0 z-30 w-[736px] h-[685px] bg-white p-[20px]'>
                <span onClick={() => close() } className='absolute top-[20px] right-[20px] w-[24px] h-[24px] cursor-pointer'>
                    <Icons name='close'  className='w-[24px] h-[24px]' />
                </span>

                {stage === 1 &&
                    <div ref={phoneFormRef}>
                        <p className='text-[22px] text-center'>Введите номер телефона</p>

                        <div className='w-[336px] m-auto mt-[70px] grid grid-cols-3 gap-[10px]'>
                            <input ref={ref} className='focus:border-green focus:outline-none col-span-3 pl-[25px] pr-[25px] h-[58px] border border-[#e6e6e6] text-[20px]' /> 

                            <PhoneNumberBlock setNumber={setPhoneNumber} clearNum={clearPhoneNumber}  />
            
                            <button ref={sendCheckCodeButt} onClick={() => sendCode() } className='bg-[#8f8f8f] mt-[10px] text-[16px] text-[#fff] flex items-center justify-center rounded-[4px] h-[48px] cursor-pointer col-span-3'>Отправить</button>
                            {sendCodeError && <p className='col-span-3 text-[#E6141E] text-center mt-[20px]'>{sendCodeError}</p> }
                        </div>
                    </div>
                }

                {stage === 2 &&
                    <div ref={codeFormRef}>
                        <p className='text-[22px] text-center'>Проверка кода</p>

                        <p className='text-center mt-[70px] mb-[20px]'>Введите код из SMS сообщения</p>

                        <div ref={codeRef} className='flex m-auto w-[334px] space-x-[10px] mb-[30px] text-[20px]'>
                            {[1,2,3,4].map(i => 
                                <input  key={i} type='text' className='focus:border-green focus:outline-none w-[76px] h-[58px] border border-[#e6e6e6] text-center' />
                            )}
                        </div>

                        {codeReviewError && <p className='text-[#E6141E] text-center mt-[-20px] mb-[20px]'>Неверный код. Введите заново!</p> }

                        <div className='w-[336px] m-auto grid grid-cols-3 gap-[10px]'>
                            <PhoneNumberBlock setNumber={setCodeNumber} clearNum={clearCodeNumber} />
                        </div>
                    </div>
                }


            </div>
        </>
    )
}

export default CheckBonus;