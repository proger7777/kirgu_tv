
const BgBlock = ({clickCallback}) => {

    return(
        <div onClick={() => clickCallback() } className='absolute z-30 top-0 left-0 w-full h-full bg-[#fff] opacity-80 cursor-pointer'></div>
    )
}

export default BgBlock;