import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserve } from '../../redux/rockets/rockets';

const MyProfileRocket = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;
  return (
    <div className="mission-wrapper">
      <h4 className="name">
        {rocket.rocket_name}
        {/* <a href={rocket.wikipedia} target="_blank" rel="noopener noreferrer">
          ➕
        </a> */}
      </h4>
      <button
        className={rocket.reserved ? 'leave-mission' : 'join'}
        type="button"
        onClick={() => dispatch(reserve({ rocket }))}
      >
        {rocket.reserved ? 'Cancel Rocket' : 'Join Rocket' }
      </button>
    </div>
  );
};

MyProfileRocket.propTypes = {
  rocket: PropTypes.shape(
    {
      id: PropTypes.number,
      rocket_name: PropTypes.string,
      reserved: PropTypes.bool,
    },
  ).isRequired,
};
export default MyProfileRocket;
