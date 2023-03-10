import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/dist/client/router'
const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
const router = useRouter()
const viewDetails=(id)=>{
  router.push(`/product/${id}`)
}

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          {data.products.map((item)=>{
            return (
              <div key={item.id} style={{border:"1px solid blue"}} onClick={()=>viewDetails(item.id)}>
                <div>
                  {item.brand}
                </div>
                <div>
                  {item.title}
                </div>
                <div>
                  {item.description}
                </div>
                <img src={item.thumbnail} alt="phot" />
              </div>
            )
          })}
      </main>
    </>
  )
}


export async function getServerSideProps({req}) {


  const res = await fetch('https://dummyjson.com/products');
  const data =  await res.json();
  return {
    props: { data },
  };
}