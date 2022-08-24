import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveDragon } from '../redux/dragons/dragonsSlice';

const DragonItem = (props) => {
  const dispatch = useDispatch();
  const { dragon } = props;
  return (
    <div className="rocket-container">
      <img src={dragon.flickr_images[1]} alt={dragon.name} className="rocket-img" />
      <div className="text-style">
        <h3>{dragon.name}</h3>
        <div>
          {dragon.reserved
            ? (
              <p>
                <span className="reserved-success">reserved</span>
                {' '}
                {dragon.description}
              </p>
            )
            : <p>{dragon.description}</p>}
        </div>
        <button className={dragon.reserved ? 'cancel-rocket' : 'reserve'} type="button" onClick={() => dispatch(reserveDragon({ dragon }))}>{dragon.reserved ? 'Cancel Reservation' : 'Reserve'}</button>
      </div>
    </div>
  );
};

DragonItem.propTypes = {
  dragon: PropTypes.shape(
    {
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      reserved: PropTypes.bool,
      flickr_images: PropTypes.arrayOf(PropTypes.string),
    },
  ).isRequired,
};
export default DragonItem;
