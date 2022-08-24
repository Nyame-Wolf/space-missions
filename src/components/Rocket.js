import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserve } from '../redux/rockets/rockets';
import './Rockets.css';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;
  return (
    <div className="rocket-container">
      <img src={rocket.flickr_images} alt="rocket" className="rocket-img" />
      <div className="text-style">
        <h3>{rocket.reserved ? `${rocket.rocket_name} (reserved)` : rocket.rocket_name}</h3>
        <p>{rocket.description}</p>
        <button className={rocket.reserved ? 'cancel-rocket' : 'reserve'} type="button" onClick={() => dispatch(reserve({ rocket }))}>{rocket.reserved ? 'Cancel Reservation' : 'Reserve'}</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape(
    {
      id: PropTypes.number,
      rocket_name: PropTypes.string,
      description: PropTypes.string,
      reserved: PropTypes.bool,
      flickr_images: PropTypes.arrayOf(PropTypes.string),
    },
  ).isRequired,
};
export default Rocket;
