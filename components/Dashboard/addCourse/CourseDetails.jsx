import { MdClose } from "react-icons/md";
import styles from "../../../styles/Dashboard.module.css";
import { useForm, useWatch } from "react-hook-form";

export default function CourseDetails({
  requirements,
  benefits,
  register,
  tags,
  handleTagChange,
  handleAddRequirement,
  handleAddBenefit,
  handleAddTag,
  handleRemoveBenefit,
  handleRemoveTag,
  handleRemoveRequirement,
  handleRequirementChange,
  handleBenefitChange,
  categories,
  errors,
}) {
  return (
    <div className={`${styles.skyBlueBg} my-4 rounded-lg p-4`}>
      <input
        type="text"
        placeholder="Course Thumbnail"
        className={`${styles.tealBg} input w-full text-white mb-4`}
        {...register("thumbnail", { required: true })}
      />
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Course title"
          className={`${styles.tealBg} input w-full text-white`}
          {...register("title", { required: true })}
        />
        <input
          type="number"
          placeholder="Price"
          className={`${styles.tealBg} input w-full text-white`}
          {...register("price", { required: true })}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <label className="w-full">
          <div className="label">
            <span className="label-text text-white">Start date</span>
          </div>
          <input
            type="date"
            placeholder="Start date"
            className={`${styles.tealBg} input text-white w-full`}
            {...register("startDate", { required: true })}
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
            {...register("endDate", { required: true })}
          />
        </label>
        <label className="w-full mb-4">
          <div className="label">
            <span className="label-text text-white">Category</span>
          </div>
          <select
            className={`${styles.tealBg} select w-full text-white`}
            {...register("categoryId", { required: true })}
          >
            <option disabled selected>
              Pick a category
            </option>
            {categories?.data?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <select
        className={`${styles.tealBg} select w-full text-white mb-4`}
        {...register("level", { required: true })}
      >
        <option disabled selected>
          Pick course level
        </option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Expert">Expert</option>
      </select>
      {errors.description && (
        <p className="text-rose-800">This field is required!</p>
      )}
      <textarea
        type="text"
        placeholder="Course Description"
        className={`${styles.tealBg} textarea w-full mb-4 text-white`}
        {...register("description", { required: true })}
      />
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Seats"
          className={`${styles.tealBg} input w-full mb-4 text-white`}
          {...register("sits", { required: true })}
        />
        <input
          type="text"
          placeholder="Promo"
          className={`${styles.tealBg} input w-full mb-4 text-white`}
          {...register("promo")}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className={`my-4 rounded-lg text-white`}>
          {requirements.map((requirement, index) => (
            <div key={index} className="mb-4 flex gap-4 items-center">
              <input
                type="text"
                placeholder="Requirement"
                className={`${styles.tealBg} input w-full  text-white`}
                value={requirement}
                onChange={(e) => handleRequirementChange(index, e.target.value)}
              />
              <button
                className="bg-rose-800 p-4 rounded-full text-white"
                type="button"
                onClick={() => handleRemoveRequirement(index)}
              >
                <MdClose />
              </button>
            </div>
          ))}
          <button
            className={`${styles.tealBg} p-3 rounded-md`}
            type="button"
            onClick={handleAddRequirement}
          >
            Add Requirement
          </button>
        </div>
        <div className={`my-4 rounded-lg text-white`}>
          {benefits.map((benefit, index) => (
            <div key={index} className="mb-4 flex items-center gap-4">
              <input
                type="text"
                placeholder="Benefit"
                className={`${styles.tealBg} input w-full  text-white`}
                value={benefit}
                onChange={(e) => handleBenefitChange(index, e.target.value)}
              />
              <button
                className="bg-rose-800 p-4 rounded-full text-white"
                type="button"
                onClick={() => handleRemoveBenefit(index)}
              >
                <MdClose />
              </button>
            </div>
          ))}
          <button
            className={`${styles.tealBg} p-3 rounded-md`}
            type="button"
            onClick={handleAddBenefit}
          >
            Add Benefit
          </button>
        </div>
      </div>
      <div className={`my-4 rounded-lg text-white`}>
        {tags.map((tag, index) => (
          <div key={index}>
            {errors.tags && errors.tags[index] && errors.tags[index].name && (
              <p className="text-rose-800">This field is required!</p>
            )}
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="Tag"
                className={`${styles.tealBg} input w-full text-white`}
                value={tag.name}
                onChange={(e) => handleTagChange(index, e.target.value)}
              />
              <button
                className={`bg-rose-800 p-4 rounded-full text-white`}
                type="button"
                onClick={() => handleRemoveTag(index)}
              >
                <MdClose />
              </button>
            </div>
          </div>
        ))}
        <button
          className={`${styles.tealBg} p-3 rounded-md`}
          type="button"
          onClick={handleAddTag}
        >
          Add Tag
        </button>
      </div>
    </div>
  );
}
