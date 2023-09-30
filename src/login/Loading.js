import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
// import Button from '@mui/material/Button';

export default function SimpleBackdrop(prop) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    prop.func && setOpen(true);
  };

  return (
    <div>
      <button onClick={handleOpen} type="submit" className="block w-full bg-my-orange mt-4 py-2 rounded-2xl text-white font-semibold mb-2">{prop.name}</button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}