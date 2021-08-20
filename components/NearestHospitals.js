import { useRouter } from 'next/router';
import EnableLocation from './EnableLocation';
import RefreshLocation from './RefreshLocation';

export default function NearestHospitals({ refresh }) {
  const router = useRouter();

  const getCoordinates = (position) => {
    router.replace({
      pathname: '/',
      query: { lat: position.coords.latitude, long: position.coords.longitude },
    });
  };

  const getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      {refresh ? (
        <RefreshLocation getGeoLocation={getGeoLocation} />
      ) : (
        <EnableLocation getGeoLocation={getGeoLocation} />
      )}
    </div>
  );
}
