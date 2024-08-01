import { Social } from "../../components/social";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLaptopCode,
} from "react-icons/fa";
import { db } from "../../services/firebaseConnection";
import {
  getDocs,
  collection,
  orderBy,
  query,
  doc,
  getDoc,
} from "firebase/firestore";
import { useState, useEffect } from "react";

interface LinkProps {
  id: string;
  name: string;
  url: string;
  bg: string;
  color: string;
}

interface SocialLinksProps {
  github: string;
  linkedin: string;
  instagram: string;
  portfolio: string;
}

const Home = () => {
  const [links, setLinks] = useState<LinkProps[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLinksProps>();

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, "links");
      const queryRef = query(linksRef, orderBy("created", "asc"));

      getDocs(queryRef)
        .then((snapshot) => {
          const lista = [] as LinkProps[];

          snapshot.forEach((doc) => {
            lista.push({
              id: doc.id,
              name: doc.data().name,
              url: doc.data().url,
              bg: doc.data().bg,
              color: doc.data().color,
            });
          });

          setLinks(lista);

          console.log(lista);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    loadLinks();
  }, []);

  useEffect(() => {
    const docRef = doc(db, "social", "link");
    getDoc(docRef).then((snapshot) => {
      if (snapshot.data() !== undefined) {
        setSocialLinks({
          github: snapshot.data()?.github,
          linkedin: snapshot.data()?.linkedin,
          instagram: snapshot.data()?.instagram,
          portfolio: snapshot.data()?.portfolio,
        });
      }
    });
  }, []);

  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">
        Gabriel Lemes
      </h1>
      <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        {links.map((item) => (
          <section
            key={item.id}
            style={{ backgroundColor: item.bg }}
            className=" mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer"
          >
            <a href={item.url} target="_blank">
              <p style={{ color: item.color }} className="md:text-lg text-base">
                {item.name}
              </p>
            </a>
          </section>
        ))}

        {socialLinks && Object.keys(socialLinks).length > 0 && (
          <footer className="flex justify-center gap-3 my-4">
            <Social url={socialLinks?.instagram}>
              <FaInstagram size={35} color="#fff" />
            </Social>
            
            <Social url={socialLinks?.linkedin}>
              <FaLinkedin size={35} color="#fff" />
            </Social>

            <Social url={socialLinks?.github}>
              <FaGithub size={35} color="#fff" />
            </Social>

            <Social url={socialLinks?.portfolio}>
              <FaLaptopCode size={35} color="#fff" />
            </Social>
          </footer>
        )}
      </main>
    </div>
  );
};

export default Home;
