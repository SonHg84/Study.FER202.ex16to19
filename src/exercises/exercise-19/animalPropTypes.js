import PropTypes from 'prop-types';
export const animalPropTypes = {
  additional: PropTypes.shape({ link: PropTypes.string, notes: PropTypes.string }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
};
