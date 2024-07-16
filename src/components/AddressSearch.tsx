import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAddress } from '../context/AddressContext';
import styles from '../styles/Home.module.css';

// Componente input + boton Buscar

const AddressSearch = () => {
  const router = useRouter();
  const { setAddress } = useAddress();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAddress(inputValue);
    router.push('/map');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Q Address"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Search</button>
    </form>
  );
};

export default AddressSearch;
