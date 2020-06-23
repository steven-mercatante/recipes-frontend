import { useForm } from "react-hook-form";

import { API_URL } from "../../../constants";

export default function Edit({ recipe }) {
  const { name, description, instructions, ingredients } = recipe;
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    console.log("onSubmit", data);
    // TODO: catch error & show user friendly message
    const res = await fetch(`${API_URL}/recipes/${recipe.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    // TODO: if `res.ok` redirect or show success msg
    if (res.ok) {
      console.log("recipe added!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="name"
        placeholder="Recipe name"
        ref={register({ required: true })}
        defaultValue={name}
      />

      <p>Description:</p>
      <textarea
        name="description"
        ref={register}
        rows="20"
        cols="70"
        defaultValue={description}
      />

      <p>Ingredients:</p>
      <textarea
        name="ingredients"
        ref={register}
        rows="20"
        cols="70"
        defaultValue={ingredients}
      />

      <p>Instructions:</p>
      <textarea
        name="instructions"
        ref={register}
        rows="20"
        cols="70"
        defaultValue={instructions}
      />

      <input type="submit" />
    </form>
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
