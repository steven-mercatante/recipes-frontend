import ReactMarkdown from "react-markdown";

export default function Recipe({ recipe }) {
  const { name, description, instructions, ingredients } = recipe;

  return (
    <article>
      <h2>{name}</h2>

      {description && (
        <>
          <p>Description</p>
          <p>
            <ReactMarkdown source={description} />
          </p>
        </>
      )}

      {instructions && (
        <>
          <p>Instructions</p>
          <p>
            <ReactMarkdown source={instructions} />
          </p>
        </>
      )}

      {ingredients && (
        <>
          <p>Ingredients</p>
          <p>
            <ReactMarkdown source={ingredients} />
          </p>
        </>
      )}
    </article>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`http://localhost:8000/recipes/${id}`);
  const data = await res.json();

  return {
    props: { recipe: data }
  };
}
