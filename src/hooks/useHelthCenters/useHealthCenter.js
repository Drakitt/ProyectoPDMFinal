import React, {useState, useEffect, useContext} from 'react';
import firebase, {FirebaseContext} from '../../firebase/index';

const useHealthCenter = () => {
  const [centros, guardarCentros] = useState([]);
  const {firebase} = useContext(FirebaseContext);

  useEffect(() => {
    const obtenerCentros = () => {
      firebase.db.collection('health_centers').onSnapshot(manejarSnapshot);
    };
    obtenerCentros();
  }, []);

  function manejarSnapshot(snapshot) {
    const centro = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    guardarCentros(centro);
  }

  return {
    centros,
  };
};

export default useHealthCenter;
