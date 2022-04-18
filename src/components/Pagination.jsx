import Icons from "./Icons";

const Pagination = ({pageNum, setPageNum, lastPage}) => {

    const pagePrevCl = pageNum === 1 ? 'opacity-25 pointer-events-none' : 'cursor-pointer'
    const pageNextCl = lastPage ? 'opacity-25 pointer-events-none' : 'cursor-pointer'

    return(
        <div className='flex h-[50px] border border-[#f5f5f5] rounded-[4px]'>
            <div onClick={() => setPageNum(pageNum - 1)} className={`flex items-center justify-center pl-[20px] pr-[20px] ${pagePrevCl}`}>
                <Icons name='page_prev' className="w-[4px] h-[9px] mr-[9px]" />
                <span>Назад</span>
            </div>

            <div className='page_num text-[16px] pl-[20px] pr-[20px] border-r border-l border-[#f5f5f5] flex justify-center items-center'>{pageNum}</div>

            <div onClick={() => setPageNum(pageNum + 1)} className={`flex items-center justify-center pl-[20px] pr-[20px] ${pageNextCl}`}>
                <span>Вперёд</span>
                <Icons name='page_next' className="w-[4px] h-[9px] ml-[9px]" />
            </div>
        </div>
    )
}

export default Pagination;