import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export const FiveStarRating = ({ rating }) => {
  const starFillArray = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= 1) {
      rating--;
      starFillArray.push(<StarFill key={"star-fill" + i} />);
    } else if (rating < 1) {
      rating <= 0
        ? starFillArray.push(<StarEmpty key={"star-empty" + i} />)
        : starFillArray.push(<StarHalf key={"star-half"} />);
      rating--;
    }
  }
  return <div>{starFillArray}</div>;
};
