import Rockets from './Rockets';

const Profile = () => <div><Rockets rocketFilter={((rocket) => rocket.reserved)} /></div>;

export default Profile;
