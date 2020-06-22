import { useForm } from "react-hook-form";

export default function Create() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    // TODO: catch error & show user friendly message
    const res = await fetch(`${process.env.API_URL}/recipes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    // TODO: is `res.ok` redirect or show success msg
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
      />
      {errors.name && <span>This field is required</span>}
      <p>Description:</p>
      <textarea
        name="description"
        ref={register}
        rows="20"
        cols="70"
      ></textarea>
      <p>Ingredients:</p>
      <textarea
        name="ingredients"
        ref={register}
        rows="20"
        cols="70"
      ></textarea>
      <p>Instructions:</p>
      <textarea
        name="instructions"
        ref={register}
        rows="20"
        cols="70"
      ></textarea>
      <input type="submit" />
    </form>
  );
}
