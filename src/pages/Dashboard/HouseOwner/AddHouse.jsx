import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const AddHouse = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    reset();
    const response = await axios.post("http://localhost:5000/house-owner/addHouse", {
      ...data,
    });
    console.log(response);
  };
  return (
    <div className="container py-5">
      <h2 className="text-center display-4 mb-4">Add A Class</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="instructorName" className="form-label">
            Instructor Name
          </label>
          <input
            type="text"
            {...register("instructorName", { required: true })}
            placeholder="Instructor Name"
            value={user?.displayName}
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
            value={user?.email}
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
            {...register("price", { required: true })}
            placeholder="Price"
            className="form-control"
          />
          {errors.price && (
            <span className="text-danger">Price is required</span>
          )}
        </div>

        <div className="mt-4">
          <input className="btn btn-primary" type="submit" value="Add Class" />
        </div>
      </form>
    </div>
  );
};

export default AddHouse;
