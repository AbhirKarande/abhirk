import {data, contactItems, blogPosts, skills} from '../services/data'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Icon from '@material-ui/core/Icon';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';



import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexWrap: "wrap",
      justifyContent: "space-between"
    },
    paper: {
      minHeight: "65px",
      display: 'flex',
      flexWrap: "wrap",
      justifyContent: "space-evenly"
    },
    media: {
      width: "100%",
      minHeight: 250,
      minWidth: 250,
    },
    skills: {
      fontVariant: "all-small-caps",
      fontSize: "large",
      border: "thin",
      borderStyle: "dotted",
      borderRadius: "5px",
      margin: "5px 5px 5px 8px",
      padding: "5px",
      background: "#dbe9f1",
      fontWeight: "bold",
      textDecoration: "none",
      color: "#0a3f5e"
    },
    contact: {
      margin: "20px 10px 0px 0px",
    },
    items: {
      margin: "5px",
    },
    links: {
      color: "black",
      borderBottomStyle: "dotted",
      border: "thin",
    },
    header: {
      textAlign: "left",
      padding: "5%",
      margin: "1%"
    }
  });
  
  export default function Home() {
    const {firstName, headline, profilePic} = data
    const profilepic= "images/" + profilePic;
    const classes = useStyles();
  
    return (
      <Grid container spacing={5} className={classes.root}>
  
  {/* Begin main/profile pic card */}
        <Grid item xs={12}>
          <Card style={{backgroundColor: "#a8d5baff"}}>
            {/* Container within the card for flex grid */}
            <Grid container className={classes.root}>
              {/* Profile Picture */}
              <Grid item sm={3} className={classes.media}>
                <CardMedia
                  className={classes.media}
                  image={profilepic}
                />
              </Grid>
              {/* Main card title and text */}
              <Grid item sm={5}>
                <CardContent className={classes.header}>
                  <Typography gutterBottom variant="h2" component="h2">
                    Hey! I'm {firstName}!
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {headline}
                  </Typography>
                <div className={classes.contactItems}>  
                <Button
                  variant="outlined"
                  color="default"
                  href="https://www.linkedin.com/in/abhirkarande/"
                  aria-label="Linkedin"
                >
                  <Icon><LinkedInIcon /></Icon>
                </Button>
                <Button
                  variant="outlined"
                  color="default"
                  href="https://github.com/AbhirKarande"
                  aria-label="Github"
                >
                  <Icon><GitHubIcon /></Icon>
                </Button> 
                </div>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
  {/* End main card */}
  
  {/* Begin 'about me' card */}
        <Grid item xs={12} >
          <Card className={classes.root} style={{backgroundColor: "#a8d5baff"}}>
              <CardContent>
                <Typography variant="body2" gutterBottom>
                I am currently a <strong>Freshman at the University of Virginia in the Engineering School</strong>. I have experience in fields like <code>Computer Vision</code>, <code>Natural Language Processing</code>, <code>Cyber Security</code>, and <code>Full-Stack Development</code>. I want to apply my technical and interpersonal skills towards solving problems.
                <br></br>
                <br></br>
                My other likings include: <strong>Basketball</strong>, <strong>Drawing</strong>, <strong>Weight Training</strong>, and <strong>Nutrition</strong>
                  </Typography>
              </CardContent>
          </Card>
        </Grid> 
  {/* End about me */}
  
  {/* Begin skills card */}
        <Grid item >
          <Card className={classes.root} style={{backgroundColor: "#a8d5baff"}}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Technical Skills
              </Typography>
              <CardActions className={classes.paper}>
                {skills.map(skill => <a href={skill.href} className={classes.skills}><span key={skill.name}><code>{skill.name}</code></span></a>)}
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
  {/* End skills */}
        <Grid item >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
              I made this website with the ReactJS JavaScript Framework to showcase some of my skills while displaying a little bit about me. I want to expand the capabilities of this website by adding a feedback/communication section that allows viewers to reach out to me.
              </Typography>
              <CardActions className={classes.paper}>
                {blogPosts.map(item => 
                <Button 
                  key={blogPosts.indexOf(item)}
                  className={classes.items} 
                  href={item.href}
                  aria-label={item.title}
                  variant="outlined"
                >
                    <strong>{item.title}</strong>
                </Button>
                )}
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid> // End container
    );
  }