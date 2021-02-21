import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

class InstaFeed extends React.Component {
  render() {
    const { data } = this.props
    const { totalCount } = data.allInstaNode
    const { nodes } = data.allInstaNode
    // const { edges: posts } = data.allMarkdownRemark

    console.log("SRC>>>>", nodes)

    return (
      <div className="insta-wrap">
        <Grid container
        spacing={0}
        >
          {nodes.map((post,index) => {
            if(index<8){
                          return (
              <Grid key={post.thumbnails[2].src} item xs={12} sm={3}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={post.thumbnails[2].src}
                      title="Contemplative Reptile"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            )
            }
          })}

        </Grid>
      </div>

    )
  }
}

InstaFeed.propTypes = {
  data: PropTypes.shape({
    allInstaNode: PropTypes.object,
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query InstaFeedQuery {
        allInstaNode {
          totalCount
          nodes {
            thumbnails {
              src
            }
          }
        }
      }
    `}
    render={(data, count) => <InstaFeed data={data} count={count} />}
  />
)
