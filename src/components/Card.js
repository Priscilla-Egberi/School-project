import {
    Card,
    CardHeader,
    CardBody,
 
    Typography,
   
  } from "@material-tailwind/react";
   
  export default function Example(props) {
    return (
      <Card className="max-w-[24rem] overflow-hidden pb-0 h-72 rounded-sm shadow-none bg-transparent">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0  h-3/4 flex rounded-none"
        >
        

                <img
                 src={props.detail}
                 // src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="ui/ux review check"
                  className="w-full justify-self-center self-center"
                />
       
        </CardHeader>
        <CardBody className="p-1 h-1/4" style={{backgroundColor:"#F3F3F3 !important"}}>
          <Typography variant="h3" color="blue-gray" className="text-sm">
            $4000
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal text-xs">
            Because it's about 
          </Typography>
        </CardBody>
        
      </Card>
    );
  }