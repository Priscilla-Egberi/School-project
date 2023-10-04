import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
   
  export default function EcommerceCard(props) {
    
    const handleClick = () =>{
      window.scrollTo(0, 0);    
        }
    return (
      <Card className="min-w-[100px]">
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
            {props.condition}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          
          <Link to={props.link}   onClick={handleClick}>
            {console.log(props.link)}
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-xs text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            View
            
          </Button></Link>
        </CardFooter>
      </Card>
    );
  }