import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router'
import Header from '../../components/Header';

import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../services/prismic';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';


interface Post {
  uid: string,
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <>
        <Header />
        <div>Carregando...</div>
      </>
    )
  }

  const totalWords = post.data.content.reduce((acc, content) => {
    const numberWordsEachContent = content.heading.split(/\s/g).length + RichText.asText(content.body).split(/\s/g).length;
    acc += numberWordsEachContent;
    return acc;
  }, 0);
  const readTime = Math.ceil(totalWords / 200);

  return (
    <>
      <Head>
        <title>{post.data.title} | spacetraveling</title>
      </Head>

      <Header />
      <main className={styles.container}>
        <img src={post.data.banner.url} className={styles.banner} alt="banner" />
        <article className={styles.post}>
          <h1>{post.data.title}</h1>
          <div className={styles.postInfo}>
            <div>
              <FiCalendar />
              <time>{format(new Date(post.first_publication_date), "dd MMM yyyy", { locale: ptBR })}</time>
            </div>
            <div>
              <FiUser />
              <p>{post.data.author}</p>
            </div>
            <div>
              <FiClock />
              <p>{readTime} min</p>
            </div>
          </div>

          <div className={styles.postContent}>
            {post.data.content.map((content) => {
              return (
                <div key={content.heading} className={styles.singleContent}>
                  <h2>{content.heading}</h2>
                  <div className={styles.htmlContent} dangerouslySetInnerHTML={{ __html: RichText.asHtml(content.body) }}></div>
                </div>
              )
            })}
          </div>
        </article>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();

  const posts = await prismic.query([
    Prismic.predicates.at('document.type', 'posts')
  ], {
    pageSize: 1,
  })

  const postsUid = posts.results.map((post) => {
    return {
      uid: post.uid,
    }
  })
  const paths = postsUid.map((post) => {
    return (
      { params: { slug: post.uid } }
    )
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID('posts', String(slug), {});

  const post = {
    uid: response.uid,
    first_publication_date: response.first_publication_date,
    data: {
      title: response.data.title,
      subtitle: response.data.subtitle,
      banner: {
        url: response.data.banner.url,
      },
      author: response.data.author,
      content: response.data.content
    }
  }

  return {
    props: { post }
  }
};
