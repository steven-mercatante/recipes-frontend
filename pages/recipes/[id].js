export default function Recipe({ recipe }) {
  const { name, description, instructions, ingredients } = recipe;
  return (
    <article>
      <h2>{name}</h2>
      <p>Description</p>
      <p>{description}</p>

      <p>Instructions</p>
      <p>{instructions}</p>

      <p>Ingredients</p>
      <p>{ingredients}</p>
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
