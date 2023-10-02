import React, { useEffect, useRef, useState } from "react";

import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { Button, Form } from "react-bootstrap";

/**
 * Renders a component for managing and displaying a user's moto.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the Moto component.
 */
function Moto() {
  const [moto, setMoto] = useState([]);
  const [input, setInput] = useState();
  const { currentUser } = useAuth();
  const categoryRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "motos"),
        where("userId", "==", currentUser.uid)
      );
      const querySnapshot = await getDocs(q);
      const motosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMoto(motosData[0]);
    };

    fetchData();
  }, [input, currentUser.uid]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await setDoc(doc(db, "motos", currentUser.uid), {
        userId: currentUser.uid,
        moto: categoryRef.current.value,
      });

      setInput(categoryRef.current.value);
      categoryRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mt-4 mb-4">
      <h2 className="w-100 text-center">{moto && moto.moto}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group id="email">
          <Form.Control
            type="text"
            ref={categoryRef}
            required
            placeholder="Enter a moto that inspires you"
          ></Form.Control>
        </Form.Group>
        <Button className="w-100 mt-2" type="submit">
          Set your moto
        </Button>
      </Form>
    </div>
  );
}

export default Moto;
