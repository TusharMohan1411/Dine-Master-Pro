import OwnerImage from '../../../public/images/owner-image.png'

export default function Owner() {
    return (
        <div className="flex flex-col h-full w-full gap-3 p-3 justify-evenly items-center">
            <p>Meet the Owner</p>
            <div className='h-48 w-48 2xl:w-60 2xl:h-60'>
                <img src={OwnerImage} className='w-full h-full object-cover' alt="Owner Image" />
            </div>
            <div>
                <h1 className="text-[25px] font-bold text-white mb-2 italic">Tushar Mohan</h1>
                <p className='text-[13px] 2xl:text-[16px] leading-5 font-normal italic'>"Eating is my Favourite Hobby"</p>
            </div>
        </div>
    )
}