import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
});

const Program = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} className="program-card">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imgSrc}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div className="info-wrap">
            <Typography gutterBottom variant="h5" component="h6">
                {props.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p" className="sub-title">
                {props.subtitle}
            </Typography>
          </div>
          <div size="small" color="primary">
          Learn More
        </div>
          
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
      </CardActions> */}
    </Card>
  );
}

export default Program;