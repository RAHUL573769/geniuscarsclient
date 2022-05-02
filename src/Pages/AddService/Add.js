import React from "react";
import { useForm } from "react-hook-form";

const Add = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = "http://localhost:5000/service";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="mx-auto w-50">
      <h2>Please Add Service</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Nmae"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2"
          placeholder="Desccription"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Photo Url"
          type="text"
          {...register("img")}
        />
        <input className="mb-2" placeholder="" type="submit" />
      </form>
    </div>
  );
};

export default Add;
