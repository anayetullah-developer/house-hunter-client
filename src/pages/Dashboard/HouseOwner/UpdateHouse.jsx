import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const UpdateHouse = () => {
  const updateClassInfo = useLoaderData();
  const { name, photoURL, instructorName, price, email, seats, _id } = updateClassInfo;
  console.log(_id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    reset();
    const response = await axios.patch(`http://localhost:5000/house-owner/updateHouse/${_id}`, {
      ...data,
    });
    console.log(response);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center display-4 mb-4">Update Class</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="instructorName" className="form-label">
            Instructor Name
          </label>
          <input
            type="text"
            {...register("instructorName", { required: true })}
            placeholder="Instructor Name"
            value={instructorName}
            className="form-control"
          />
          {errors.instructorName && (
            <span className="text-danger">Instructor Name is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Class Name
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Class Name"
            defaultValue={name}
            className="form-control"
          />
          {errors.name && (
            <span className="text-danger">Class Name is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="photoURL" className="form-label">
            Class Image
          </label>
          <input
            type="url"
            defaultValue={photoURL}
            {...register("photoURL", { required: true })}
            placeholder="Image URL"
            className="form-control"
          />
          {errors.photoURL && (
            <span className="text-danger">Class Image is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className="form-control"
            value={email}
          />
          {errors.email && (
            <span className="text-danger">Email is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="seats" className="form-label">
            Available Seats
          </label>
          <input
            type="number"
            defaultValue={seats}
            {...register("seats", { required: true })}
            placeholder="Available Seats"
            className="form-control"
          />
          {errors.seats && (
            <span className="text-danger">Seats is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            defaultValue={price}
            {...register("price", { required: true })}
            placeholder="Price"
            className="form-control"
          />
          {errors.price && (
            <span className="text-danger">Price is required</span>
          )}
        </div>

        <div className="mt-4">
          <input className="btn btn-primary" type="submit" value="Update" />
        </div>
      </form>
    </div>
  );
};

export default UpdateHouse;
