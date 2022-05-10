// import Icons from "./Icons";

// const PaginationOld = ({pageNum, setPageNum, limit, totalCount}) => {

//     const pageCount = Math.ceil(totalCount / parseInt(limit))


//     const pagePrevCl = pageNum === 1 ? 'opacity-25 pointer-events-none' : 'cursor-pointer'
//     const pageNextCl = lastPage ? 'opacity-25 pointer-events-none' : 'cursor-pointer'

//     return(
//         <div className='flex h-[50px] border border-[#f5f5f5] rounded-[4px]'>
//             <div onClick={() => setPageNum(pageNum - 1)} className={`flex items-center justify-center pl-[20px] pr-[20px] ${pagePrevCl}`}>
//                 <Icons name='page_prev' className="w-[4px] h-[9px] mr-[9px]" />
//                 <span>Назад</span>
//             </div>

//             <div className='flex justify-center items-center space-x-[12px] text-[16px] pl-[20px] pr-[20px] border-r border-l border-[#f5f5f5]'>
//                 <div className='w-[25px] h-[25px] border border-green text-green rounded-[4px] text-center'>{pageNum}</div>
//                 <div>2</div>
//                 <div>3</div>
//                 <div>4</div>
//                 <div>...</div>
//                 <div>15</div>
//             </div>

//             <div onClick={() => setPageNum(pageNum + 1)} className={`flex items-center justify-center pl-[20px] pr-[20px] ${pageNextCl}`}>
//                 <span>Вперёд</span>
//                 <Icons name='page_next' className="w-[4px] h-[9px] ml-[9px]" />
//             </div>
//         </div>
//     )
// }

// export default PaginationOld;

