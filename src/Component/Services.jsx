import React from 'react'
import Chowmin from '../assets/Chowmein.png'
import ChickenChowmein from '../assets/ChickenChowmein.jpeg'
import ChickenRoll from '../assets/ChickenRoll.jpg'
import ChickenLollipop from '../assets/chicken lollipop.jpeg'
import BabyCorn from '../assets/BabyCorn.jpeg'
import Combo1 from '../assets/Combo1.jpg'
import Combo2 from '../assets/Combo2.jpg'
import Combo3 from '../assets/Combo3.jpg'
import Combo4 from '../assets/Combo4.jpg'

const CobmoData =[
    {
        id:1,
        img:Combo1,
        name:"Paneer Chilli With Lachha Paratha",
        description:"Spicy paneer tossed with peppers, paired with crispy, flaky lachha paratha—a fiery bite wrapped in buttery layers."
    },
    {
        id:2,
        img:Combo2,
        name:"Manchurian with Lachha Paratha",
        description:"Crispy veggie balls in a zesty Manchurian sauce, teamed with flaky lachha paratha—fusion with a crunch!"
    },
    {
        id:3,
        img:Combo3,
        name:"Chicken Chilly BoneLess with Lachha Paratha",
        description:"Flaky, golden Lachha Paratha paired with tender, juicy boneless chicken, marinated in aromatic spices and cooked to perfection. A perfect blend of crispiness and succulent flavor in every bite!”"
    },
    {
        id:4,
        img:Combo4,
        name:"Paneer Mushroom mix Rice",
        description:"Fragrant basmati rice tossed with soft paneer cubes and earthy mushrooms, sautéed in mild spices for a rich, comforting flavor in every bite"
    },
   

]

const ServicesData =[
    {
        id:1,
        img:ChickenChowmein,
        name:"Chicken Mix Chowmin",
        description:"wok-tossed noodles with juicy chicken, fresh veggies, and bold sauces, finished with a smoky touch and served piping hot."
    },
    {
        id:2,
        img:ChickenRoll,
        name:"Chicken Roll",
        description:"Juicy chicken wrapped in a soft paratha, spiced to perfection — our signature Chicken Roll"
    },
    {
        id:3,
        img:ChickenLollipop,
        name:"Chicken LolliPop",
        description:"Crispy on the outside, juicy on the inside — the ultimate Chicken Lollipop"
    },
    {
        id:4,
        img:BabyCorn,
        name:"Baby Corn Chilly",
        description:"A crunchy, fiery appetizer with the perfect balance of heat and flavor."
    },
    

]

const Services = () => {
  return (
    <>
    <div className='py-16 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-yellow-50'>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-orange-400/10 rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-red-400/10 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-yellow-500/20 rotate-12 animate-spin"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-orange-500/15 rounded-full animate-pulse"></div>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-yellow-100/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-100/30 to-transparent"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
      
        <div className='container relative z-10'>
            {/* Header Section */}
            <div className='text-center mb-20 max-w-[400px] mx-auto'>
                <h1 className='text-2xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600'>Our Services</h1>
                 <h1 className='text-4xl font-bold text-black'>Our Top Selling</h1><br />
                <p className='text-xs text-gray-900'>
                    {""}
                “Delicious food, refreshing drinks, and cozy café vibes — everything you need, all under one roof.”
                </p>
            </div>
              {/* Card Section */}
              <div>
              <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-14 md:gap-5 place-items-center'>
                   {ServicesData.map(({id, img, name, description}) =>{
                          return <div
                          data-aos="zoom-in"
                          data-aos-duration="300" 
                          key={id} className='max-w-[300px] w-full group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary duration-300 shadow-xl relative pt-20 pb-6'>
                              <div className='absolute -top-8 left-1/2 transform -translate-x-1/2'>
                                  <img src={img} alt="" 
                                  className='w-[140px] h-[140px] object-cover rounded-full shadow-lg group-hover:scale-110 group-hover:-translate-y-2 duration-300'/>
                              </div>
                              <div className='p-4 text-center pt-8'>
                                  <h1 className='text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-white duration-300'>{name}</h1>
                                  <p className='text-gray-500 dark:text-gray-300 text-sm line-clamp-2 group-hover:text-white duration-300'>{description}</p>
                              </div>
                          </div>
                      })
                  }
              </div>
              </div>
              <div className='text-center mb-20 max-w-[400px] mx-auto'>
                 <h1 className='text-4xl font-bold text-black mt-10'>Cobmo Meals</h1>
                
            </div>
            <div>
              <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 md:gap-5 place-items-center '>
                  {CobmoData.map(({id, img, name, description}) =>{
                          return <div data-aos="zoom-in"
                          data-aos-duration="300"  key={id} className='max-w-[300px] w-full group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary duration-300 shadow-xl relative pt-20 pb-6'>
                              <div className='absolute -top-8 left-1/2 transform -translate-x-1/2'>
                                  <img src={img} alt="" 
                                  className='w-[140px] h-[140px] object-cover rounded-full shadow-lg group-hover:scale-110 group-hover:-translate-y-2 duration-300'/>
                              </div>
                              <div className='p-4 text-center pt-8'>
                                  <h1 className='text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-white duration-300'>{name}</h1>
                                  <p className='text-gray-500 dark:text-gray-300 text-sm line-clamp-2 group-hover:text-white duration-300'>{description}</p>
                              </div>
                          </div>
                      })
                  }
              </div>
              </div>
        </div>
    </div>
    </>
  )
}

export default Services