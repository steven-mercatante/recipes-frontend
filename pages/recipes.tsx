import Head from "next/head";
import Link from "next/link";
import { GetServerSideProps } from "next";

export default function Home({ recipes }) {
  return (
    <div className="container">
      <Head>
        <title>Recipes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Recipes</h1>

        {recipes.map(recipe => (
          <div key={recipe.id}>
            <p>
              <Link href="/recipes/[id]" as={`/recipes/${recipe.id}`}>
                <a>{recipe.name}</a>
              </Link>
            </p>
          </div>
        ))}
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const res = await fetch(`${process.env.API_URL}/recipes`);
  const data = await res.json();

  return {
    props: { recipes: data }
  };
};
