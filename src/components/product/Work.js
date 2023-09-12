import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import {useState} from "react"
import ProductRight from './ProductRight';
import { useParams } from 'react-router-dom';
import {serviceData} from '../../data/service'
import Review from "./Review"

function Product() {
    const params = useParams()
    console.log(params.cardId)
    const id = params.cardId
    // Function to find the object with the matching id
    const findObjectById = (id) => {
      return serviceData.find((item) => item.id === id);
    };
  
    const item = findObjectById(parseInt(id));
    console.log(item.name, item.id, item.name)

    const [src, setSrc] = useState(item.imgUrl[0])
    const clickHandler = (myIndex) =>{
        setSrc(item.imgUrl[myIndex])
        console.log(src)
    }

    // const selectedGoods = Img.find(goods => goods.id === Number(id));
    const selectedGoods = item;
  return (
    <div className='md:grid grid-cols-5 gap-x-8'>
       
        <div className="col-span-3 px-5 pt-10  leading-8 bg-white">
            {/* slide-section1 */}
            <div className="flex flex-row mb-3">
                <div id="sideslide" className="flex flex-col  justify-center  w-5/12 items-center gap-y-4">                        
                        <img src={item.imgUrl[0]} alt="" className="rounded-lg w-12"
                        key={1}
                        // key={Img[item.id].id}
                        onClick={() => clickHandler(0)} 
                        /> 
                        <img src={item.imgUrl[1]} alt="" className="rounded-lg w-12"
                        // key={Img[1].id}
                        key={2}
                        onClick={() => clickHandler(1)}
                        /> 
                        
                        
                        <img src={item.imgUrl[2]} alt="" className="rounded-lg w-12"
                        // key={Img[2].id}
                        key={3}
                        onClick={() => clickHandler(2)}
                        /> 
                        
                </div>
                <div className='w-7/12'>                
                        <img src={src} alt="" className="rounded-lg w-full" />  
                </div>
            </div>
            {/* descriptions-section2 */}
            <div className="py-5">
                    <div className="flex flex-row justify-between border-l-4 border-orange-900 rounded-sm mb-3">
                        <h1 className='text-2xl font-bold tracking-tight text-gray-900 pl-2'>{item.name}<br/>{item.condition}</h1>
                        <h1 className='text-2xl font-bold tracking-tight text-gray-900'>{item.amount}</h1>
                    </div>
                    <p className='flex flex-row items-center'><CiLocationOn /> Perm Site, University of Uyo</p>
            </div>
            <hr/>

            <div className="py-5">
                    <div className="border-l-4 border-orange-900 rounded-sm mb-3">
                        <h1 className='text-2xl font-bold tracking-tight text-gray-900 pl-2'>Introduction</h1>
                    </div>
                    <p>{item.description}</p>
            </div>
            
            <Review />
        </div>
    
       <section className='col-span-2 flex flex-col justify-between leading-6'>
            <ProductRight userId={selectedGoods.userId} />
       </section>
    </div>
  )
}

export default Product