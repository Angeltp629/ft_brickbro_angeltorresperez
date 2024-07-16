import { createContext, useState, ReactNode, useContext } from 'react';

// Pasar la direccion a todas las paginas y componentes

interface AddressContextProps {
  address: string;
  setAddress: (address: string) => void;
}

const AddressContext = createContext<AddressContextProps | undefined>(undefined);

export const AddressProvider = ({ children }: { children: ReactNode }) => {
  const [address, setAddress] = useState('');

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error('useAddress must be used within an AddressProvider');
  }
  return context;
};
