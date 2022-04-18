import Icons from "./Icons";
import userPhoto from '../images/user.png';

const ProductReviewItem = ({item, noFirst}) => {

    const noFirstCl = noFirst ? 'pt-[50px] border-t border-[#e6e6e6]' : ''

    return(
        <div className={`${noFirstCl} pb-[50px]`}>    

            <div className='flex justify-between'>

                <div className='flex items-center'>
                    <img src={userPhoto} alt='' className='object-contain w-[40px] h-[40px] rounded-full' />
                    <span className='ml-[16px] text-[22px] font-semibold'>{item.AuthorName}</span>
                </div>

                <div className='flex items-center'>
                    <span className='text-[16px] text-[#8f8f8f]'>{item.Date}</span>
                    <span className='flex space-x-[3px] ml-[18px]'>
                        {[1,2,3,4,5].map(i =>
                            item.Rate >= i 
                            ? <Icons key={i} name='star' className='w-[19px] h-[19px] fill-[#f0a83c]' />
                            : <Icons key={i} name='star' className='w-[19px] h-[19px] fill-[#e6e6e6]' />
                        )}
                    </span>
                </div>

            </div>

            <div>
                {item.Pros &&
                    <><p className='text-[22px] font-semibold mt-[30px] mb-[10px]'>Достоинства:</p>
                    <div className='text-[#505050] leading-[25px]'>{item.Pros}</div></>
                }

                {item.Cons &&
                    <><p className='text-[22px] font-semibold mt-[30px] mb-[10px]'>Недостатки:</p>
                    <div className='text-[#505050] leading-[25px]'>{item.Cons}</div></>
                }

                {item.ReviewText &&
                    <><p className='text-[22px] font-semibold mt-[30px] mb-[10px]'>Комментарий:</p>
                    <div className='text-[#505050] leading-[25px]'>{item.ReviewText}</div></>
                }
            </div>

        </div>
    )
}

export default ProductReviewItem;