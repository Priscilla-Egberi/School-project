import React from 'react'
import { FaStar } from "react-icons/fa";
import {MdEdit} from "react-icons/md"
import {
    Button,
    Dialog,
    // DialogHeader,
    // DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
import Rating from "./Rating"



function Review() {
    const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  return (
    <>
    
        <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-medium'>Review</h2>
            <button onClick={handleOpen} className="flex items-center gap-x-2 bg-my-orange mt-4 py-1 text-white font-semibold mb-2 px-3 tracking-tight text-sm"> <MdEdit />write a review</button>
            
        
      <Dialog open={open} handler={handleOpen}>
        <Rating />
        
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
         
        </DialogFooter>
      </Dialog>
        </div>

        <div  className='flex gap-x-3 items-center'>
        <h2 className='text-2xl font-medium'>5.0 </h2>
        <span className='flex'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
        <p className='text-gray-500'>16 reviews</p>
        </div>

        <hr className='my-3'/>

        <div>
            <h2 className='font-bold'>Mitchel Coren</h2>
            <div  className='flex gap-x-3 items-center'>
                <span className='flex'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                <p className='text-gray-500'>2 weeks ago</p>
            </div>
            <p className='leading none'>I love this guy, he keeps to his words and he is no scam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, a?</p>
        </div>
        
    </>
  )
}

export default Review