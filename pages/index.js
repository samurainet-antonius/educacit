import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ externalPostData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Educacit - Education of IT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet='utf-8'/>
        <meta httpEquiv='X-UA-Compatible' content="IE=edge"/>
        <meta name="keywords" content="online course, kopi koding, kursus programming, bikin web, belajar programming, cerita developer"/>
        <meta name="description" content="Belajar ngoding sambil ngopi" />
        <meta property="og:title" content="Belajar ngoding sambil ngopi - Educacit" />
        <meta property="og:description" content="Belajar ngoding sambil ngopi" />
        <meta property="og:url" content="https://educacit.com/" />
        <meta property="og:type" content="website"></meta>
        <link rel="icon" type="image/x-icon" href="/img/logo/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&family=Roboto&display=swap" rel="preconnect"/>
      </Head>

      <div className='container pt-5'>
        <div className='row'>
          <div className="col-md-8 col-xl-8 col-sm-8 col-xs-12 offset-md-2 offset-sm-2 offset-xl-2">
              <div className="row">
                <div className="col-md-3 col-sm-3 col-xl-3 col-xs-3">
                  <Link href='/'>
                    <a>
                      <Image src="/img/logo/logo.png" alt="logo educacit" className="img-fluid rounded" width={116} height={116}/>
                    </a>
                  </Link>
                </div>
                <div className="col-md-9 col-sm-9 col-xl-9 col-xs-9 text-left">
                    <h1 className="font-extrabold tracking-tight">
                      Educacit - Education of IT
                    </h1>
                  <p className="text-grey-500 leading-7 text-xl">
                  (Baca: e-du-ka-cit) Tempat untuk kalian yang ingin ngopi, ngobrol dan ngoding bersama Antonius.
                  </p>
                  <ul className="list-horizontal">
                    <li>
                      <span>
                        <a href="#" className="link-color-coffee">Instagram</a>
                      </span>
                    </li>
                    <li>
                      <span>
                      <a href="https://www.youtube.com/channel/UCy-rQYzAcIyrEw0Gpck31rA" className="link-color-coffee">Youtube</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-5 mb-5">
                <main className="mt-4 grid gap-12 border-t-2 border-gray-100 py-8">
                  {externalPostData.map((data) => {
                    return (
                      <div className="relative" key={data.id}>
                        <p className="text-sm leading-5 text-gray-500"><time dateTime='2021-1-28'>Jan 28, 2021</time></p>
                        <div>
                          <h2 className="mt-2 text-xl leading-7 font-semibold text-gray-900">{data.title}</h2>
                          <p className="mt-3 text-base leading-6 text-gray-500">{data.description}</p>
                        </div>
                        <div className="mt-3">
                          <Link href={data.link}>
                            <a className="link-text link-color-coffee text-base leading-6 font-semibold text-teal-600 hover:text-teal-700 focus:outline-none focus:underline">Show notes</a>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </main>
              </div>
              <footer className={styles.footer}>
        <Link
          href="/" passHref>
          <div>
          Powered by Antonius
            <div className='text-center'>
              <Image src="/img/logo/logo.png" alt="Educacit Logo" width="60" height="60" />
            </div>
          </div>
        </Link>
      </footer>
          </div>
        </div>
      </div>
    </div>
  )
}


export async function getStaticProps(){
  const apiURL = "http://localhost:3001/posts";
  const response = await fetch(apiURL);
  const data = await response.json();
  return {
    props:{
      externalPostData: data
    }
  };
}