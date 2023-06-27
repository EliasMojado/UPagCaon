import star from '../../../Assets/Viands/star.svg';
import whitestar from '../../../Assets/Viands/whitestar.svg';

function Rating(rate) {
  let rating;
  
  if (rate === 0) {
    rating = Array(5).fill(whitestar);
  } else {
    rating = Array(rate).fill(star);
  }

  return rating;
}

export default Rating;
