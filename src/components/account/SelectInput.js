import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({prop}) {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{prop.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={true}>{prop.first}</MenuItem>
          <MenuItem value={false}>{prop.second}</MenuItem>
          <MenuItem value={30}>{prop.third}</MenuItem>
          <MenuItem value={30}>{prop.fourth}</MenuItem>
          <MenuItem value={30}>{prop.fifth}</MenuItem>
          <MenuItem value={30}>{prop.sixth}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
