import { DOTS, usePagination } from '../../hooks/usePagination';
import Icons from '../Icons';

const Pagination = ({onPageChange, totalCount, currentPage, pageSize, className }) => {

    const siblingCount = 1

    const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });

    if(totalCount < 1) return null;

    const onNext = () => onPageChange(currentPage + 1)
    const onPrevious = () => onPageChange(currentPage - 1)

    let lastPage = paginationRange[paginationRange.length - 1] === currentPage

    const pagePrevCl = currentPage === 1 ? 'opacity-25 pointer-events-none' : 'cursor-pointer'
    const pageNextCl = lastPage ? 'opacity-25 pointer-events-none' : 'cursor-pointer'
    const activePageNumCl = 'w-[25px] h-[25px] border border-green text-green rounded-[4px] text-center'

    return (
        <div className='flex h-[50px] border border-[#f5f5f5] rounded-[4px]'>
            <div onClick={onPrevious} className={`flex items-center justify-center pl-[20px] pr-[20px] ${pagePrevCl}`}>
                <Icons name='page_prev' className="w-[4px] h-[9px] mr-[9px]" />
                <span>Назад</span>
            </div>
            
            <div className='flex justify-center items-center space-x-[12px] text-[16px] pl-[20px] pr-[20px] border-r border-l border-[#f5f5f5]'>
                {paginationRange.map(pageNumber => {
                    if (pageNumber === DOTS) return <div key={Date.now() + Math.random().toFixed(3)}>&#8230;</div>;
                    
                    return (
                        <div key={Date.now() + Math.random().toFixed(3)} className={`${pageNumber === currentPage ? activePageNumCl : '' } cursor-pointer`} onClick={() => onPageChange(pageNumber)}>
                            {pageNumber}
                        </div> 
                    );
                })}
            </div>

            <div onClick={onNext} className={`flex items-center justify-center pl-[20px] pr-[20px] ${pageNextCl}`}>
                <span>Вперёд</span>
                <Icons name='page_next' className="w-[4px] h-[9px] ml-[9px]" />
            </div>
        </div>
    );
};

export default Pagination;
