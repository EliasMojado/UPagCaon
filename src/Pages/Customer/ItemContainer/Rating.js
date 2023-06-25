import star from '../../../Assets/Viands/star.svg';

function Rating(rate) {
  const rating = Array(rate).fill(star);
  return rating;
}

export default Rating;
