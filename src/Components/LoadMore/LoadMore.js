import React from 'react';
import Button from '@material-ui/core/Button';
import './LoadMore.css';
const LoadMore = ({
  onLoadMoreEvt = () => { },
}) => {
  return (
    <Button className='showBtn' onClick={() => onLoadMoreEvt()} >
      Load More
    </Button>
  );
};

export default LoadMore;
