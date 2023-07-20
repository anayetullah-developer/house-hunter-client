import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const UpdateHouse = () => {
  const {user} = useAuth();
  const updateClassInfo = useLoaderData();
  const { _id, name, address, photoURL, bedrooms, bathrooms, size, rent, city, date, desc } = updateClassInfo;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    reset();
    const response = await axios.patch(`http://localhost:5001/house-owner/updateHouse/${_id}`, {
      ...data,
    });
    console.log(response);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center display-4 mb-4">Add A House</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-75 mx-auto">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
             Name
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Name"
            defaultValue={name}
            className="form-control"
          />
          {errors.name && (
            <span className="text-danger">Name is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Address
          </label>
          <input
            type="text"
            {...register("address", { required: true })}
            placeholder="Address"
            className="form-control"
            defaultValue={address}
          />
          {errors.address && (
            <span className="text-danger">Address is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="photoURL" className="form-label">
            Image
          </label>
          <input
            type="url"
            {...register("photoURL", { required: true })}
            placeholder="Image URL"
            className="form-control"
            defaultValue={photoURL}
          />
          {errors.photoURL && (
            <span className="text-danger">Image is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            {...register("city", { required: true })}
            placeholder="City"
            className="form-control"
            defaultValue={city}
          />
          {errors.city && (
            <span className="text-danger">City is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="bedrooms" className="form-label">
            Bedrooms
          </label>
          <input
            type="number"
            {...register("bedrooms", { required: true })}
            placeholder="Number of Bedrooms"
            className="form-control"
            defaultValue={bedrooms}
            />
          {errors.bedrooms && (
            <span className="text-danger">Bedrooms is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="bathrooms" className="form-label">
            Bathrooms
          </label>
          <input
            type="number"
            {...register("bathrooms", { required: true })}
            placeholder="Number of Bathrooms"
            className="form-control"
            defaultValue={bathrooms}
          />
          {errors.bathrooms && (
            <span className="text-danger">Bathrooms is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="size" className="form-label">
            Room Size
          </label>
          <input
            type="number"
            {...register("size", { required: true })}
            placeholder="Size of rooms in foot"
            className="form-control"
            defaultValue={size}
          />
          {errors.size && (
            <span className="text-danger">Size is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            {...register("date", { required: true })}
            placeholder="Availability Date"
            className="form-control"
            defaultValue={date}
          />
          {errors.size && (
            <span className="text-danger">Date is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="rent" className="form-label">
            Rent
          </label>
          <input
            type="number"
            {...register("rent", { required: true })}
            placeholder="Rent Per Month"
            className="form-control"
            defaultValue={rent}
          />
          {errors.rent && (
            <span className="text-danger">Rent is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            {...register("phone", { required: true })}
            placeholder="Phone Number"
            className="form-control"
            value={user?.phone}
          />
          {errors.phone && (
            <span className="text-danger">Phone Number is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <textarea
            {...register("desc", { required: true })}
            placeholder="Description"
            rows="5"
            defaultValue={desc}
            className="form-control"
          ></textarea>
          {errors.desc && (
            <span className="text-danger">Description Number is required</span>
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


