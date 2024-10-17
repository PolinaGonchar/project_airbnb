import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";
import "./index.css";

export default function Reviews({ title, guestReviews }) {
  return (
    <div className="review__block">
      <Heading border>{title}</Heading>

      <div className="review__list">
        {guestReviews.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="review">
      <span className="review__name">
        {guestName}
        <span className="review__rating">Rating: {rating}</span>
      </span>

      <span className="review__description">{review}</span>
    </Box>
  );
}