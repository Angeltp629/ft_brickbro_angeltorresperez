import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import AddressSearch from '../components/AddressSearch';
import { useAddress } from '../context/AddressContext';
import styles from '../styles/Home.module.css';
import MapMarker from '../components/MapMarker';
import Image from 'next/image';

// Pagina con el mapa cargado - URL: localhost:3000/map

const Map = dynamic(() => import('google-map-react'), { ssr: false });

export default function MapPage() {
  const router = useRouter();
  const { address } = useAddress();
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    if (address) {
      fetch(`/api/geocode?address=${encodeURIComponent(address)}`)
        .then(res => res.json())
        .then(data => {
          if (data.location) {
            setLocation(data.location);
            setHistory(prev => [...prev, decodeURIComponent(address)]);
          } else {
            console.error(data.error);
          }
        })
        .catch(error => console.error('Error fetching geocode:', error));
    } else {
      router.push('/');
    }
  }, [address]);

  return (
    <div className={styles.container}>
      <Image
        src="/images/logo_brickbro.png"
        alt="Logo Brickbro"
        width={225}
        height={58}
        className={styles.logo_left}
      />
      <AddressSearch />
      <div style={{ height: '600px', width: '600px' }}>
        {location && (
          <Map
            bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY! }}
            center={location}
            zoom={15}
          >
            <MapMarker lat={location.lat} lng={location.lng} />
          </Map>
        )}
      </div>
      <div className={styles.historial}>
        <h2 className={styles.h2}>Búsquedas</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
