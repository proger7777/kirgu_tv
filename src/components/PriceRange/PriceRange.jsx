import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect, useState } from 'react';
import './PriceRange.css'

function PriceRange({minPr, maxPr}) {

    const [min, setMin] = useState(minPr)
    const [max, setMax] = useState(maxPr)

    const [startMin] = useState(minPr)
    const [startMax] = useState(maxPr)

    function updateRangeInfo(value) {
        setMin(value[0])
        setMax(value[1])
    }

    function updateCatalog() {
        console.log(min, max)
    }

    useEffect(()=>{
        console.log(min, max)
    }, [])

    return(
        <div className='h-[75px] flex flex-col justify-center border-b border-[#e6e6e6] pb-[30px]'>
            <div className="price-input flex justify-between">
            <div><span className="range_cost_val">{min}</span> ₽</div>
            <div><span className="range_cost_val">{max}</span> ₽</div>
            </div>
            <div className='pl-[7px]'>
                <Slider 
                    range 
                    allowCross={false} 
                    defaultValue={[min, max]} 
                    min={startMin}
                    max={startMax}
                    onChange={updateRangeInfo} 
                    onAfterChange={updateCatalog}
                    trackStyle={[{ backgroundColor: '#008954' }, { backgroundColor: '#008954' }]}
                    handleStyle={[{ backgroundColor: '#008954' }, { backgroundColor: '#008954' }]}
                    railStyle={{ backgroundColor: '#ddd' }}
                />
            </div>
        </div>
    )

}

export default PriceRange