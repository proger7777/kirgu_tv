import React from "react";


const CompareProps = ({ allProps, props, upNumber, downNumber }) => {

    function uniqueness(array, prop) {

        let arr = array.filter((item, index) => index >= downNumber && index <= upNumber)
        let toggle = []

        arr.map(item => {

            if (item.properties[prop] !== undefined) {
                toggle.push(item.properties[prop])
            }

        })

        if (toggle.length > 1) {

            return (toggle.reduce((boolean, item, i, ar) => boolean && !(ar.indexOf(item) === i)))

        } else {

            return true
        }

    }

    return (

        <div className='w-[1720px] h-[620px] overflow-x-scroll'>

            <div className='mb-[20px] border-b'>

                <p className='text-[18px] font-semibold'>Цены</p>

                <div className='flex h-[80px]'>

                    {allProps.map((item, i) => (

                        (i >= downNumber && i <= upNumber) ? (

                            <div className="flex items-center" key={i}>

                                <p className=' text-[22px] text-[#008954] font-semibold w-[332px] mr-[10px]'>{item.price}</p>

                            </div>

                        ) : (<></>)

                    ))}

                </div>

            </div>


            {props.map((pr, i) => (

                <div key={i} className='mb-[20px] border-b'>

                    <p className='text-[18px] font-semibold'>{pr}</p>

                    <div className={`flex h-[80px] ${(uniqueness(allProps, pr)) ? ('') : ('bg-[#00895420]')}`}>

                        {allProps.map((item, i) => (
                            (i >= downNumber && i <= upNumber) ? (

                                <div className="flex items-center" key={i}>

                                    <p className=' text-[14px] w-[332px] mr-[5px] ml-[5px]'>{item.properties[pr]}</p>

                                </div>

                            ) : (<></>)
                        ))}

                    </div>

                </div>

            ))}

        </div>

    )

}

export default CompareProps