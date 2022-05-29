import { Audio } from 'react-loader-spinner';

const Preloader = () => (
  <div className="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center">
    <Audio
      color="black"
      ariaLabel="loading"
    />
  </div>
);

export default Preloader;