import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export default function EcommerceCard(props) {
  return (
    <Card className="min-w-[100px]">
      {/* <CardHeader shadow={false} floated={false} className="overflow-hidden min-h-[100px]">
        <img
          src={props.detail}
          alt="card-image"
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </CardHeader> */}
      <div className="px-3 pt-3">
<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-52 h-32">          
<img src={props.detail} alt="Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
</div></div>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium text-xs">
            {props.name}
          </Typography>
          <Typography color="blue-gray" className="font-medium text-xs">
            {props.amount}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {/* With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case. */}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-xs text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          {props.condition}
        </Button>
      </CardFooter>
    </Card>
  );
}




// import React from 'react'

// function Cards(props) {
//   return (
//     <div className={props.className}>
//         <div className="group relative  bg-white">
//         <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">          
//           <img src={props.detail} alt="Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
//         </div>
//         <div className="mt-4 flex justify-between">
//           <div>
//             <h3 className="text-sm text-gray-700">
//               <a href="#">
//                 <span aria-hidden="true" className="absolute inset-0"></span>
//                 {props.name}
//               </a>
//             </h3>
//             <p className="mt-1 text-sm text-gray-500">{props.condition}</p>
//           </div>
//           <p className="text-sm font-medium text-gray-900">{props.amount}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Cards