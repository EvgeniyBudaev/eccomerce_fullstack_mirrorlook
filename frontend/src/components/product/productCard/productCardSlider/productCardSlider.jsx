import React, {Component} from 'react'
import Slider from 'react-slick'

import styles from './productCardSlider.module.scss'

class ProductCardSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
    }
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }

  render() {
    const {image, product_photo1, product_photo2, product_photo3, product_photo4} = this.props.product

    const settingsFor = {
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      focusOnSelect: true,
    }

    const settingsNav = {
      slidesToShow: 2,
      arrows: false,
      dots: true,
      centerMode: true,
      variableWidth: false,
      swipeToSlide: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 2,
            centerMode: true,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            centerMode: true,
          },
        },
      ],
    }

    return (
      <div className={styles.cardSlider}>
        <div>
          <Slider
            asNavFor={this.state.nav2}
            ref={(slider) => (this.slider1 = slider)}
            className="for"
            {...settingsFor}
          >
            <div className={styles.item}>
              <img src={image} alt="images" />
            </div>
            <div className={styles.item}>
              <img src={product_photo1} alt="images" />
            </div>
          </Slider>

          <Slider
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            className="nav"
            {...settingsNav}
          >
            <div className={styles.navItem}>
              <img src={product_photo2} alt="images" className={styles.navItemImg} />
            </div>
            <div className={styles.navItem}>
              <img src={product_photo3} alt="images" className={styles.navItemImg} />
            </div>
            <div className={styles.navItem}>
              <img src={product_photo4} alt="images" className={styles.navItemImg} />
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}

export default ProductCardSlider
