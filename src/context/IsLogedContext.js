import React, {useState} from 'react';

const UserContext = React.createContext();

export function IsLogedContextProvider({children}) {
  const [isLoged, setIsLoged] = useState(false);

  return (
    <UserContext.Provider value={{isLoged, setIsLoged}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
