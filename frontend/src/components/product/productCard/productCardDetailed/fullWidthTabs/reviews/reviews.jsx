import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {loadReviews, loadUsers} from '../../../../../../redux/actions/actions'
import {reviewsLoadedSelector, usersLoadedSelector} from '../../../../../../redux/selectors'
import Loader from '../../../../../loader'
import Review from './review'
import styles from './reviews.module.scss'
import animationStyles from './reviews-animation.module.scss'
import ReviewForm from './reviewForm'


const Reviews = (props) => {
  //console.log('[Reviews][props]', props)
  const {
    reviews,
    productId,
    loadReviews,
    loadUsers,
    usersLoaded,
    reviewsLoaded,
  } = props

  const nodeRef = React.useRef(null)

  useEffect(() => {
    loadUsers()
    loadReviews(productId)
  }, [loadUsers, loadReviews, productId])

  if (!usersLoaded || !reviewsLoaded) return <Loader />

  return (
    <div className={styles.reviews}>
      <TransitionGroup>
        {reviews.map((id) => (
          <CSSTransition key={id} timeout={500} classNames={animationStyles} nodeRef={nodeRef}>
            <div ref={nodeRef}>
              <Review id={id} />
            </div>

          </CSSTransition>
        ))}
      </TransitionGroup>
      <ReviewForm productId={productId} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  reviewsLoaded: reviewsLoadedSelector,
  usersLoaded: usersLoadedSelector,
})


export default connect(mapStateToProps, {loadReviews, loadUsers})(Reviews)
