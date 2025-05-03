const HeroSection = () => {
    return (
        <div>
            <div className='flex justify-between p-6 my-36 border border-yellow-600 rounded-full w-1/3'>
                <input className='bg-transparent text-yellow-200 text-2xl mx-7 focus:outline-none w-full'
                placeholder='My projects here ...' 
                onBlur={(e)=>e.target.value=""}/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" className="size-10 stroke-yellow-400 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
        </div>
    )
}

export default HeroSection
