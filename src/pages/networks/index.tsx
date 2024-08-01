import { FormEvent, useEffect, useState } from "react";
import Header from "../../components/header";
import Input from "../../components/input";
import { db } from "../../services/firebaseConnection";

import {
  //addDoc -  Cria um item com o id aleatório
  setDoc, // Tem que passar um id para o item
  getDoc, // Buscar uma vez um unico documento
  doc
} from "firebase/firestore";

const Networks = () => {
  const [facebook, setFacebook] = useState("");
  const [youtube, setYoutube] = useState("");
  const [instagram, setInstagram] = useState("");

  useEffect(()=> {
    function loadLinks() {
      const docRef = doc(db, "social", "link")
      getDoc(docRef)
      .then((snapshot)=> {
        if (snapshot.data() !== undefined) {
          setFacebook(snapshot.data()?.facebook)
          setYoutube(snapshot.data()?.youtube)
          setInstagram(snapshot.data()?.instagram)
        }
      })
    }

    loadLinks()
  },[])

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      youtube: youtube,
      instagram: instagram
    })
    .then(() => {
      alert("Cadastrado com sucesso!");
    })
    .catch(error => {
      console.log(error);
      
    })
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas redes sociais
      </h1>

      <form className="flex flex-col w-full max-w-xl" onSubmit={handleRegister}>
        <label className="text-white my-2">Link do Facebook</label>
        <Input
          type="url"
          placeholder="Digite o link"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />

        <label className="text-white my-2">Link do Youtube</label>
        <Input
          type="url"
          placeholder="Digite o link"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />

        <label className="text-white my-2">Link do Instagram</label>
        <Input
          type="url"
          placeholder="Digite o link"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <button
          type="submit"
          className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium mt-3"
        >
          Salvar links
        </button>
      </form>
    </div>
  );
};

export default Networks;
