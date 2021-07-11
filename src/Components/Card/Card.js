import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, } from '@material-ui/core';
import { Link} from 'react-router-dom';


const AboutCard = ({img,heading,detail}) => {
  
  return (
    <div>
      <Card className='rootP'>
        <CardActionArea>
          <Link to='About Us'>
            <CardMedia
              component="img"
              alt="ERR"
              height="140px"
              image={img}
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              <Link className='cardLink' to='About Us' >
                <span className='aboutCardHead'>{heading}</span>
              </Link>
            </Typography>
            <Typography variant="body2" variant="h6" component="h2">
              <Link to='About Us' className='cardLink' >
                <span className='aboutCardDetail'>{detail}</span> 
              </Link>
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions className='card_align'>
          <Button size="small" className='showBtn'>
            <Link className='linkItem' to='About Us'>Learn More..</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default AboutCard;