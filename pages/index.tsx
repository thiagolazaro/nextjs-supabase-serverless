import type { NextPage } from 'next'
import Image from 'next/image'
import { FormEvent, useCallback, useState } from 'react'
import styles from '../styles/Home.module.css'
import supabase from './api/supabase'

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  
  const signNewsletter = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    setIsSaving(true);


    if (email == "") {
      return;
    }

    const {data, error, status } = await supabase.from("users").insert([{ email }], {returning: 'minimal'});

    if (error) {
      if (status === 409) {
        alert("User already signed up");
        setEmail("");
      } else {
        alert("Error signing up for newsletter");
        return;
      }
      
      console.log("Error: ", error);
      setIsSaving(false);
      return;
    }
    
    alert("Successfully signed up for newsletter");
    console.log(data);
    setIsSaving(false);
    setEmail("");
  }, [email])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          alt="Newsletter"
          src="https://www.google.com/logos/doodles/2022/get-vaccinated-wear-a-mask-save-lives-january-20-copy-6753651837109686-s.png"
          width={60}
          height={40}
        />
        <p className={styles.title}>
          Assine a newsletter e receba os melhores conteúdos sobre Programação!
        </p>
        <form onSubmit={signNewsletter}>
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className={styles.emailInput}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button type="submit" className={styles.signButton} style={{pointerEvents: isSaving ? "none":"all"}}>Inscrever</button>
        </form>
      </div>
    </div>
  )
}

export default Home
