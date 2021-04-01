import React from 'react';

const Review = ({headline, byline, link, summary_short}) => {
    return(
        <div key={headline} className="review">
           <header>
             <a
               className="review-link"
               href={link.url}>
            {headline}
            </a>
             <br/>
             <h5 className="author">{byline}</h5>
        </header>
            <p>{summary_short}</p>
        </div>
    )
}


const MovieReviews = ({reviews}) => {
    return(
    <div className="review-list">
        {reviews.map(Review)}
    </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;