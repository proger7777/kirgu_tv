import Icons from "./Icons";

const PropFilterItem = ({pr, openData, openAccord, setFilterProp}) => {

    const hiddenCl = openData.id === pr.id && openData.open ? '' : 'hidden'

    

    return (
        <div className="accord border-b border-[#e6e6e6]">
            <div className="accord_title flex min-h-[65px] justify-between items-center cursor-pointer" onClick={() => openAccord(pr) }>
                <span className="font-bold">{pr.name}</span>
                <Icons name='pointer_b' className='w-[15px] h-[7px] fill-[#f0a83c]' />
            </div>

            <div className={`accord_content ${hiddenCl} pt-[10px]`}>
                {Object.keys(pr.values).map(key => 
                    <label className="flex items-center mb-[20px]" key={key}>
                        <input type="checkbox" value={pr.values[key].id} onChange={(e) => setFilterProp(e.target, pr.id)} />
                        <span className="text-[14px] ml-[12px]">{pr.values[key].name}</span>
                    </label>
                )}
            </div>
        </div>
    )

}

export default PropFilterItem;


