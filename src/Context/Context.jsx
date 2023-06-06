import React, { createContext, useState, useEffect } from 'react';
import { getDoc, setDoc, doc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import app from '../firebaseConfig';

export const UserContext = createContext(null);

const Context = ({ children }) => {

    const [card, setCard] = useState([]);
    const [products, setProducts] = useState(null);
    const [control, setControl] = useState(false);


    const db = getFirestore(app);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const data = await getDoc(doc(db, 'user', 'added'));
                const dataFirebase = data.data();
                setCard(dataFirebase.card);
                setControl(true);
            } catch (error) {
                console.error('Error al obtener los favoritos:', error);
            }
        };

        fetchFavorites();
    }, []);

    const updateCart = async () => {
       if(control) 
       {await setDoc(doc(db, "user", "added"), { card: [...card]});}

    }

    useEffect(() => {
        updateCart()
    }, [card]);

    return (
        <UserContext.Provider value={{ card, setCard, products, setProducts }}>
            {children}
        </UserContext.Provider>
    );
};

export default Context;