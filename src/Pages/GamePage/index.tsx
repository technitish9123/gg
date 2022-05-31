import React from 'react'
import Header from '../../Layouts/Header'
import "./index.css"

const GamePage = () => {
  return (
      <div className='gamePage'>
      <Header />
      <div className='w-screen h-screen '>
          <div className='grid grid-rows-2'>
            <div className=' justify-center'>
               
                <div className='flex flex-row justify-center flex-wrap uppercase'>
                    <div className='flex flex-row px-6 py-4 mr-10 justify-center relative '> 
                        <div className=' text-center text-4xl game_font absolute bottom-5 -left-8    text-inherit  vertical-text'> game 1 </div>
                        <div className='w-48 h-60 bg-[#1F2326]'> </div>
                    </div>
                    <div className='flex flex-row px-6 mr-10 py-4 justify-center relative '> 
                        <div className=' text-center text-4xl game_font absolute bottom-5 -left-8 text-inherit  vertical-text'> game 1 </div>
                        <div className='w-48 h-60 bg-[#1F2326]'> </div>
                    </div>
                    <div className='flex flex-row px-6 mr-10 py-4 justify-center relative '> 
                        <div className=' text-center text-4xl game_font absolute bottom-5 -left-8 text-inherit  vertical-text'> game 1 </div>
                        <div className='w-48 h-60 bg-[#1F2326]'> </div>
                    </div>
                    <div className='flex flex-row px-6 py-4 justify-center relative '> 
                        <div className=' text-center text-4xl game_font absolute bottom-5 -left-8 text-inherit  vertical-text'> game 1 </div>
                        <div className='w-48 h-60 bg-[#1F2326]   '> </div>
                    </div>
                    
                    
                </div>
                
            </div>
            <div className='bg-pink-  justify-center '>
               
                <div className='mt-10 self-center  text-white backdrop-blur-2xl backdrop-brightness-150 bg-[#3e3c3c52] py-4 backdrop-opacity-30 h-60 mx-16 rounded-3xl flex flex-row justify-evenly  flex-wrap uppercase'>

                    <div className='backdrop-blur-2xl backdrop-brightness-150 bg-[#3e3c3c52]  backdrop-opacity-30 rounded-3xl w-52  p-6 '>
                        <img src='' alt=''/>
                        <p> Experience the world through VR glasses</p>
                    </div>
                    <div className='backdrop-blur-2xl backdrop-brightness-150 bg-[#3e3c3c52]  backdrop-opacity-30 rounded-3xl w-52  p-6 '>
                        <p> Experience the world through VR glasses</p>
                    </div>
                    <div className='backdrop-blur-2xl backdrop-brightness-150 bg-[#3e3c3c52]  backdrop-opacity-30 rounded-3xl w-52  p-6 '>
                        <p> Experience the world through VR glasses</p>
                    </div>
                    <div className='backdrop-blur-2xl backdrop-brightness-150 bg-[#3e3c3c52]  backdrop-opacity-30 rounded-3xl w-52  p-6 '>
                        <p> Experience the world through VR glasses</p>
                    </div>
                   
                </div>
                
            </div>
          </div>


      </div>
      </div>
    
  )
}

export default GamePage