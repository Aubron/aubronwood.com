import React from 'react'
import { graphql } from "gatsby"
import Img from 'gatsby-image';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = {
    heading: {
        textAlign: 'right'
    }
}


const Blog = ({classes, edges}) => {
    console.log(edges);
    return (
        <React.Fragment>
            <h1 className={classes.heading}>Blog Posts</h1>
            {edges.map((edge) => {
                let { node } = edge;
                console.log(node);
                return (
                    <Paper>
                        <Img style={{height: 212, width: 212}} sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
                    </Paper>
                )
            })}
        </React.Fragment>
    )
}

export default withStyles(styles)(Blog)