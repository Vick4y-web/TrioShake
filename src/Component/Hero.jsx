import React from 'react'
import Chowmin from '../assets/ChowMein.jpg'
import Shakes from '../assets/shakes.jpg'
import Roll from '../assets/Roll.jpg'
import Mocktail from '../assets/mocktail.jpeg'
import ChickenLollipop from '../assets/chicken lollipop.jpeg'
import Burger1 from '../assets/burger1.png'
import Chowmein from '../assets/Chowmein.png'
import Shakes1 from '../assets/Shakes1.png'

const ImageList =[
    {
        id:1,
        img:Burger1,
    },
    {
        id:2,
        img:Shakes1,
    },
    {
        id:3,
        img:Chowmein,
    },
]

const Hero = () => {
    const [imageId, setImageId] = React.useState(Chowmin)
    const [currentIndex, setCurrentIndex] = React.useState(0)
    
    const backgroundImages = [Chowmin, Burger1, Shakes1]
    
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % backgroundImages.length
                setImageId(backgroundImages[nextIndex])
                return nextIndex
            })
        }, 3000) // Change every 3 seconds
        
        return () => clearInterval(interval)
    }, [])
    
    const bgImage ={
        backgroundImage :`url(${imageId})`,
        backgroundPosition: "center",
        backgroundSize : "cover",
        backgroundRepeat : "no-repeat",
        width :"100%",
        height : "100%",
    }
  return (
    <>
     <div style={bgImage} className='min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center relative mb- pt-6' >
     {/* Dark overlay for better text visibility */}
     <div className='absolute inset-0 bg-black/80'></div>
<div className='container pb-8 sm:pb-0 relative z-10'>
<div className='grid grid-col-1 sm:grid-cols-2'>
<div 
data-aos="zoom-out"
data-aos-duration="400"
data-aos-once="true"
className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center order-2 sm:order-1'>
    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
        Welcome to {""}  <br />
        <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
    Trio Shakes & Co.
  </span>
    </h1>
    <p className='text-sm'>
    “Good Food. Great Coffee. Best Vibes.”</p>
</div>
<div className='order-1 sm:order-2 min-h[450px] sm:min-h[450px] flex justify-center items-center relative'>
     {/* Decorative line */}
     <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-80'></div>
     
     {/* main image section */}
     {/* <div className='flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden'>
 <img src={Burger1} 
 alt=" "
 className='w-[300px] sm:w-[450px] mx-auto spin float' />
      </div> */}
</div>
     {/* image list section */}
     <div className='flex flex-row lg:flex-col justify-center gap-2 lg:gap-4 absolute -bottom-20 left-1/2 transform -translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:right-4 lg:left-auto lg:transform-none lg:bottom-auto bg-white/30 rounded-full px-3 py-2 lg:px-2 lg:py-4' >
        {
            ImageList.map(item => (
                <img
                key={item.id}
                src={item.img}
                className='w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] object-cover rounded-full border-2 border-white/50 hover:scale-105 hover:border-white duration-200'
                onClick={
                    ()=>{
                        const imageIndex = item.id - 1
                        setCurrentIndex(imageIndex)
                        setImageId(backgroundImages[imageIndex])
                    }
                }
                />
            ))
        }
    </div>
</div>
</div>
    </div>
    </>
  )
}

export default Hero