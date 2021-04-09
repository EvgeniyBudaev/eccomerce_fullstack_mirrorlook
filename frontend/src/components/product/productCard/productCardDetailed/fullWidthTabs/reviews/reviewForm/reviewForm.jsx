import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addReview} from '../../../../../../../redux/actions/actions'
import useForm from '../../../../../../../hooks/use-form'
import styles from './reviewForm.module.scss'
import Rate from '../../../../../../rate'
import Button from '../../../../../../UI/button'

const INITIAL_VALUES = {name: '', text: '', rating: 5}

const ReviewForm = (props) => {
  //console.log('[ReviewForm][props]', props)
  const {onSubmit} = props
  const {values, handlers, reset} = useForm(INITIAL_VALUES)

  const handleSubmit = (ev) => {
    ev.preventDefault()
    onSubmit(values)
    reset()
  }
  return (
    <div className={styles.reviewForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inner}>
          <div className={styles.rateWrap}>
            <Rate {...handlers.rating} />
          </div>
          <div className={styles.reviewFormItem}>
            <input
              placeholder="Ваше имя"
              className={styles.message}
              {...handlers.name}
            />
          </div>
          <div className={styles.reviewFormItem}>
					<textarea
            placeholder="Напишите ваш отзыв о товаре"
            className={styles.message}
            {...handlers.text}
          />
          </div>
          <div className={styles.publish}>
            <Button text="Оставить отзыв"></Button>
          </div>
        </div>
      </form>
    </div>
  )
}

ReviewForm.propTypes = {
  restaurantId: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
}

export default connect(null, (dispatch, props) => ({
  onSubmit: (review) => dispatch(addReview(review, props.productId)),
}))(ReviewForm)
