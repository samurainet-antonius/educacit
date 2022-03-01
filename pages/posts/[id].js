import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Post({postData}){
    return(
        <div className={styles.container}>
          <Head>
            <title>{postData.title} - Education of IT</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta charset="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="keywords" content="online course, kopi koding, kursus programming, bikin web, belajar programming, cerita developer"/>
            <meta name="description" content={postData.description} />
            <meta property="og:title" content={`${postData.title} - Education of IT`} />
            <meta property="og:description" content={postData.description} />
            <meta property="og:url" content={`https://educacit.com${postData.link}`} />
            <meta property="og:type" content="website"></meta>
            <link rel="icon" type="image/x-icon" href="/img/logo/favicon.png" />
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
              <div>
  <p className="text-sm leading-5 text-gray-500"><time dateTime="2021-1-28">{postData.tanggal}</time></p>
  <div>
    <h2 className="mt-2 text-xl leading-7 font-semibold text-gray-900">{postData.title}</h2>
    <p className="mt-3 text-base leading-6 text-gray-500">{postData.description}</p>
    <iframe width="100%" height="315" src={postData.url_video} title={postData.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <div className="mt-4 prose">
      <strong>Topics:</strong>
      <ul>
        <li>Putting yourself in the shoes of the person reviewing your application</li>
        <li>Crafting a high quality application tailored to a specific position</li>
        <li>Standing out in a more traditional hiring process by doing something a little extra</li>
        <li>Showcasing very specific examples of your work instead of asking the person reviewing your application to go hunting for it</li>
        <li>Having good questions for the person interviewing you</li>
        <li>Sharing your ideas and what you think the company should be focused on</li>
        <li>Creating a job for yourself that doesn’t even exist</li>
        <li>Proving that you can take ownership of projects and ship them by yourself</li>
        <li>Showing off skills you have that aren’t directly related to the job</li>
      </ul>
      <strong>Links:</strong>
      <ul>
        <li><a href="https://twitter.com/r00k">Ben on Twitter</a></li>
        <li><a href="https://tuple.app">Tuple</a></li>
        <li><a href="https://jobs.tailwindui.com">Tailwind Labs job postings</a></li>
      </ul>
      <strong>Supporting the show:</strong><br/>I decided to stop taking sponsors for the show because I think advertisements are annoying and no one wants to listen to them.If you do want to support the show, the best way to do it is to purchase one of my products:
      <ul>
        <li>
          <a href="https://tailwindui.com/">Tailwind UI</a>, a collection of professionally designed, fully responsive HTML components built with Tailwind CSS.
        </li>
        <li>
          <a href="https://refactoringui.com/book">Refactoring UI</a>, a book and video series I put together with Steve Schoger on designing beautiful user interfaces, without relying on a designer.
        </li>
        <li>
          <a href="https://adamwathan.me/advanced-vue-component-design">Advanced Vue Component Design</a>, a course on designing simpler, more flexible Vue components that are both more powerful and easier to maintain.
        </li>
        <li>
          <a href="https://course.testdrivenlaravel.com/">Test-Driven Laravel</a>, a massive video course on designing robust Laravel applications with TDD. Learn how to build a real-world application from scratch without writing a single line of untested code.
        </li>
        <li>
          <a href="https://adamwathan.me/refactoring-to-collections">Refactoring to Collections</a>, a book and video course that teaches you how to apply functional programming principles to break down ugly, complex code into simple transformations — free of loops, complex conditionals, and temporary variables.
        </li>
      </ul>
    </div>
  </div>
</div>
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

async function getAllPostIds(){
    const apiUrl = "http://localhost:3001/posts";
    const response = await fetch(apiUrl);
    const allPosts = await response.json();
    const allPostIds = allPosts.map((post) => {
        return { params: { id: post.slug } };
      });
    
    return allPostIds;
}

export async function getStaticPaths() {
    const paths = await getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }
  
  async function getPostData(id) {
    const apiURL = `http://localhost:3001/posts?slug=${id}`;
  
    const response = await fetch(apiURL);
  
    const postData = await response.json();
  
    return postData;
  }
  
  export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
      props: {
        postData: postData[0],
      },
    };
  }