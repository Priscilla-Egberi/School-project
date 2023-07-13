import React from 'react'
import SearchComponent from "../components/SearchComponent";
import DropDown from "../components/Goods/DropDown"
import Cards from "../components/Cards"

function Goods() {
  return (
    <div> 
      <h2 className="text-2xl semibold md:hidden ml-3">Goods</h2>
        <div className="flex flex-col md:hidden items-center justify-between g-y-5">
        <SearchComponent variant="gradient" size="sm" fullWidth className="md:hidden mb-5"/>
        <DropDown />
        </div>
        <div className="ml-20 my-12">
        <DropDown />
        </div>
                      <div className="mt-5 mx-3 md:mx-20 grid grid-cols-3 md:grid-cols-6 gap-4 ">
                              <Cards detail="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="col-span-1" />
                              <Cards detail="https://images.unsplash.com/photo-1601524909162-ae8725290836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="col-span-1" />
                              <Cards detail="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="col-span-1" />
                              <Cards detail="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoaW5nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                              <Cards detail="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" />
                              <Cards detail="https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                              <Cards detail="https://plus.unsplash.com/premium_photo-1671611822374-4719df5c89bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWxlc3MlMjBtb3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                              <Cards detail="https://images.unsplash.com/photo-1617775047746-5b36a40109f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwaHVtaWRpZmllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                      </div>
       
    </div>
  )
}

export default Goods