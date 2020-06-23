import Markdown from "markdown-to-jsx";

import { API_URL } from "../../constants";

export default function Recipe({ recipe }) {
  const { name, description, instructions, ingredients } = recipe;

  return (
    <article>
      <h2>{name}</h2>

      {description && (
        <>
          <p>Description</p>
          <Markdown>{description}</Markdown>
        </>
      )}

      {instructions && (
        <>
          <p>Instructions</p>
          <Markdown>{instructions}</Markdown>
        </>
      )}

      {ingredients && (
        <>
          <p>Ingredients</p>
          <Markdown>{ingredients}</Markdown>
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
