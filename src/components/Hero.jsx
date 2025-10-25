import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>IT'S TIME TO GET</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'><span className='text-blue-400'>Strive</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I hereby acknowledge that I will <span className='text-blue-400 font-medium'>strive for excellence</span> and accept all challenges of becoming the best version of myself, committed to <span className='text-blue-400 font-medium'>continuous improvement</span> and personal growth.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}