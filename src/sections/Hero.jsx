import React,{useState} from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes,statistics } from '../constants'
import {bigShoe1, bigShoe2, bigShoe3} from '../assets/images'
import ShoeCard from '../components/ShoeCard'

const Hero = () => {
  const [bigShoeImg,setBigShoeImg] = useState(bigShoe3)
  console.log("bigShoeImg:",bigShoeImg)
  
  return (
    <section
    id="home"
    // border-2 border-red-500
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10">The new arrival</span>
          <br/>
          <span className="text-coral-red inline-block mt-3"> Nike </span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight}/>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat,index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screem max-xk:py-40 bg-primary bg-hero bg-cover bg-center">
      <img src={bigShoeImg}
        alt="shoe collection"
        width={610}
        height={540}
        className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
        {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default Hero
