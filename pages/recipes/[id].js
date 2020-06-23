import ReactMarkdown from "react-markdown";

import { API_URL } from "../../constants";

export default function Recipe({ recipe }) {
  const { name, description, instructions, ingredients } = recipe;

  return (
    <article>
      <h2>{name}</h2>

      {description && (
        <>
          <p>Description</p>
          <ReactMarkdown source={description} />
        </>
      )}

      {instructions && (
        <>
          <p>Instructions</p>
          <ReactMarkdown source={instructions} />
        </>
      )}

      {ingredients && (
        <>
          <p>Ingredients</p>
          <ReactMarkdown source={ingredients} />
        </>
      )}
    </article>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`${API_URL}/recipes/${id}`);
  const data = await res.json();

  return {
    props: { recipe: data }
  };
}
