import ReviewDAO from '../services/ReviewDAO';
import { ADDED_REVIEW, UPDATED_REVIEW } from '../services/Constants';


const INITIAL_STATE = ReviewDAO.loadReviews();
const reviewsReducer = (reviews = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADDED_REVIEW:
            return [...reviews, action.review];
        case UPDATED_REVIEW:
            const newReviews = reviews.filter(r => r.id != action.review.id)
            return [...newReviews, action.review];
        default:
            return reviews
    }
};
export default reviewsReducer;