export default function Recipe({ recipe }) {
  return <h2>{recipe.name}</h2>;
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`http://localhost:8000/recipes/${id}`);
  const data = await res.json();

  return {
    props: { recipe: data }
  };
}
