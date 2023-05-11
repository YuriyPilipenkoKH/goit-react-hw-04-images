import { RotatingLines } from 'react-loader-spinner';
import { LoadOverlay } from './Loader.styled';

export default function Loader() {
  return (
    <LoadOverlay>
       <RotatingLines
  strokeColor="green"
  strokeWidth="5"
  animationDuration="1.5"
  width="96"
  visible={true}
/>
    </LoadOverlay>
  );
}