import React,{useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const SimpleRating=() =>{
  const [value, setValue] =useState(2);

  return (
    <div>
      <Box component="fieldset"  borderColor="transparent">
        {/* <Typography component="legend">Rating</Typography> */}
        <Rating
          name="Rating"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    
    </div>
  );
}
export default SimpleRating;