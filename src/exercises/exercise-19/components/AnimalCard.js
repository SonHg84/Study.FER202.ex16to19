import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { animalPropTypes } from '../animalPropTypes';
const defaultAdditional = { notes: 'No Additional Information' };

export default function AnimalCard(props) {
  useEffect(() => {
    // React 19 không tự đọc component.propTypes. Gọi checkPropTypes để demo vẫn có cảnh báo dev.
    PropTypes.checkPropTypes(animalPropTypes, props, 'prop', 'AnimalCard');
  }, [props]);
  // Default parameter thay cho function.defaultProps đã bị bỏ trong React 19.
  const {
    name,
    scientificName,
    size,
    diet,
    image,
    additional = defaultAdditional,
    showAdditional,
  } = props;
  return (
    <article className="card bg-warning h-100">
      <img src={image} alt={name} className="card-img-top sample-image" />
      <div className="card-body">
        <h3 className="h5 text-danger">{name}</h3>
        <ul className="list-group mb-3">
          <li className="list-group-item small">Scientific Name: {scientificName}</li>
          <li className="list-group-item small">{size} kg</li>
          <li className="list-group-item small">{diet.join(', ')}.</li>
        </ul>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => showAdditional(additional)}
        >
          More Info: {name}
        </button>
      </div>
    </article>
  );
}
AnimalCard.propTypes = animalPropTypes; // Giữ khai báo kiểu theo slide để review.
