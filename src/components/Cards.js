
 
export default function EcommerceCard(props) {
  return (
    
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <img class="p-8 rounded-t-lg" src={props.detail} alt="product image" />
    
    <div class="px-5 pb-5">
        
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
        
        
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">{props.amount}</span>
            <p class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.condition}</p>
        </div>
    </div>
</div>

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