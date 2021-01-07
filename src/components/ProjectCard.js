import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: 'flex',
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "space-between"
  },
  caps: {
    fontVariant: "all-small-caps"
  },
  content: {
    alignContent: "top"
  }
});

const ProjectCard = props =>  {
  const classes = useStyles();
  const {imageURL, title, description, githubURL, technology} = props.project
  const img = "images/" + imageURL

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link href={githubURL}>
        <CardMedia
          component="img"
          alt={description}
          image={img}
          title={title}
          height="250px"
        />
        </Link>
      </CardActionArea>
        <CardContent className={classes.content} >
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" className={classes.caps}>
            {technology}
          </Typography>
        </CardContent>
      <CardActions>
        
        
        <Button size="small" color="default" href={githubURL} aria-label="github">
          <Icon className="fa fa-github"/>
        </Button>
        
      </CardActions>
    </Card>
  );
}

export default ProjectCard