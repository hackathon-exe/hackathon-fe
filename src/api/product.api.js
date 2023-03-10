import {
  addDoc, collection, doc, getDoc, getDocs, query
} from "firebase/firestore";
import { db } from "../configuration/firebase/firebase.config";

export const getAllProduct = async () => {
  const q = query(collection(db, "product"));
  const querySnapshot = await getDocs(q);
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, data: doc.data() });
  });
  return data;
};

export const getProductDetailById = async (id) => {
  const docRef = doc(db, "product", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

export const createNewCard = async (data) => {
  const docRef = await addDoc(collection(db, "card", data));
  return docRef.id;
}

export const getCardDetailById = async (cardId) => {
  const docRef = doc(db, "card", cardId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
  else {
    console.log("No such document!");
  }
}
