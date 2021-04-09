import React from 'react'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {reviewWitUserSelector} from '../../../../../../../redux/selectors'
import Rate from '../../../../../../rate'
import styles from './review.module.scss'


const Review = (props) => {
  //console.log('[Review][props]', props)
  const {review: {user = 'Anonymous', text, rating}} = props

  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {user}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={rating} />
        </div>
      </div>
    </div>
  )
}

export default connect(
  createStructuredSelector({
    review: reviewWitUserSelector,
  })
)(Review)
