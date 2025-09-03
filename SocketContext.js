import {createContext, useContext, useState, useEffect} from 'react';
import {io} from 'socket.io-client';
import {AuthContext} from './AuthContext';

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({children}) => {
  const [socket, setSocket] = useState(null);
  const {authUser, userId} = useContext(AuthContext);

  useEffect(() => {
    if (authUser) {
      const socket = io('http://192.168.1.7:8000', {
        query: {
          userId: userId,
        },
      });

      setSocket(socket);

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [userId]);
  return (
    <SocketContext.Provider value={{socket, setSocket}}>
      {children}
    </SocketContext.Provider>
  );
};
