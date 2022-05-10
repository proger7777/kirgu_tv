
const BgBlock = ({color, clickCallback}) => {

    if(color === 'none') {
        color = ''
    } else {
        color = color ? `bg-[${color}]` : 'bg-[#000]'
    }
    
    return(
        <div onClick={() => clickCallback() } className={`${color} absolute z-30 top-0 left-0 w-full h-full opacity-80 cursor-pointer`}></div>
    )
}

export default BgBlock;