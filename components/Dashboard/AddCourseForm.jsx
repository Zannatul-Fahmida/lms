import { useForm } from "react-hook-form";
import styles from "../../styles/Dashboard.module.css";

export default function AddCourseForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className={`${styles.skyBlueBg} my-4 rounded-lg p-4`}>
        <label className="w-full">
          <div className="label">
            <span className="label-text text-white">Course thumbnail</span>
          </div>
          <input
            type="file"
            className={`${styles.tealBg} file-input w-full mb-4 text-white`}
            {...register("thumbnail")}
          />
          </label>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Course title"
              className={`${styles.tealBg} input w-full`}
              {...register("title")}
            />
            <input
              type="number"
              placeholder="Price"
              className={`${styles.tealBg} input w-full`}
              {...register("price")}
            />
            <label className="w-full">
              <div className="label">
                <span className="label-text text-white">Start date</span>
              </div>
              <input
                type="date"
                placeholder="Start date"
                className={`${styles.tealBg} input text-white w-full`}
                {...register("startDate")}
              />
            </label>
            <label className="w-full">
              <div className="label">
                <span className="label-text text-white">End date</span>
              </div>
              <input
                type="date"
                placeholder="End date"
                className={`${styles.tealBg} input w-full mb-4 text-white`}
                {...register("endDate")}
              />
            </label>
          </div>
          <textarea
            type="text"
            placeholder="Course Description"
            className={`${styles.tealBg} textarea w-full mb-4`}
            {...register("description")}
          />
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Seats"
              className={`${styles.tealBg} input w-full mb-4`}
              {...register("sits")}
            />
            <input
              type="text"
              placeholder="Promo"
              className={`${styles.tealBg} input w-full mb-4`}
              {...register("promo")}
            />
          </div>
        </div>
        <div className={`${styles.skyBlueBg} my-4 rounded-lg`}>
          <h3 className="text-white text-xl font-semibold p-4">
            Instructor Details
          </h3>
        </div>
        <div className={`${styles.skyBlueBg} my-4 rounded-lg p-4`}>
          <input
            type="text"
            placeholder="Instructor photo"
            className={`${styles.tealBg} input w-full mb-4 text-white`}
            {...register("photo")}
          />
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Name"
              className={`${styles.tealBg} input w-full`}
              {...register("name")}
            />
            <input
              type="text"
              placeholder="Designation"
              className={`${styles.tealBg} input w-full`}
              {...register("designation")}
            />
            <input
              type="text"
              placeholder="Organization"
              className={`${styles.tealBg} input w-full`}
              {...register("organization")}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
