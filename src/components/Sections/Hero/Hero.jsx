import React from 'react'

export const Hero = () => {
  return (
    <section id='hero'>
      <div className='flex relative justify-center items-center '>
        <img src="./images/HeroImg3.jpg" alt="hero" className='w-full pt-36 h-screen object-cover' />
        <div className='bg-[#111111] blur-3xl pt-16 absolute bottom-12 w-full'>{" "}</div>
      </div>
    </section>
  )
}
