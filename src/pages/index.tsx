import AddressSearch from '../components/AddressSearch';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

// Pagina de Inicio 

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/logo_brickbro.png"
        alt="Logo Brickbro"
        width={225}
        height={58}
        className={styles.logo}
      />
      <AddressSearch />
    </div>
  );
}
