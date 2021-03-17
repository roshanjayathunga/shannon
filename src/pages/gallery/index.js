import React from 'react'

import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

import image1 from '../../img/gallery/gallery1.jpg'
import image2 from '../../img/gallery/gallery2.jpg'
import image3 from '../../img/gallery/gallery3.jpg'
import image4 from '../../img/gallery/gallery4.jpg'

import image5 from '../../img/gallery/gallery5.jpg'
import image6 from '../../img/gallery/gallery6.jpg'
import image7 from '../../img/gallery/gallery7.jpg'
import image8 from '../../img/gallery/gallery8.jpg'


class GalleryPage extends React.Component {

  state = {
    tileData: [
      { img: image1, cols: 2, title: 'image1' },
      { img: image2, cols: 1, title: 'image2' },
      { img: image3, cols: 1, title: 'image3' },
      { img: image4, cols: 2, title: 'image4' },
      { img: image5, cols: 1, title: 'image1' },
      { img: image6, cols: 1, title: 'image2' },
      { img: image7, cols: 1, title: 'image3' },
      { img: image8, cols: 2, title: 'image4' }
    ],
    open: false,
    previewImg: null
  }

  handlePreview = (e) => {
    console.log(e.target.src);
    this.setState({
      open:!this.state.open,
      previewImg: e.target.src
    })
  }

  render() {
    return (
      <Layout>
        <section className="section-gallery">
          <div className="gallery-wrap">
            <GridList cellHeight={250} className={"grid-list"} cols={3}>
              {this.state.tileData.map((tile) => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                  <img className="gallery-img" src={tile.img} alt={tile.title} onClick={this.handlePreview} />
                </GridListTile>
              ))}
            </GridList>
          </div>
          <div>
          <Dialog className="p-0" onClose={this.handlePreview} aria-labelledby="customized-dialog-title" open={this.state.open}>

              <img src={this.state.previewImg}></img>
          
          </Dialog>
        </div>
        </section>

      </Layout>
    )
  }

}

export default GalleryPage;
