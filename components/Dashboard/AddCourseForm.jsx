import { useForm } from "react-hook-form";
import styles from "../../styles/Dashboard.module.css";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import axios from "axios";
import { useSelector } from "react-redux";

export default function AddCourseForm() {
  const { register, handleSubmit } = useForm();
  const [requirements, setRequirements] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [studyPlan, setStudyPlan] = useState([]);
  const [instructors, setInstructors] = useState([
    {
      name: "",
      photo: "",
      designation: "",
      organization: "",
    },
  ]);
  const [tags, setTags] = useState([]);
  const {token} = useSelector(state => state.auth.token)

  const handleInstructorChange = (index, field, value) => {
    const updatedInstructors = [...instructors];
    updatedInstructors[index][field] = value;
    setInstructors(updatedInstructors);
  };

  const handleAddInstructor = () => {
    setInstructors([
      ...instructors,
      {
        name: "",
        photo: "",
        designation: "",
        organization: "",
        _id: "",
      },
    ]);
  };

  const handleAddRequirement = () => {
    setRequirements([...requirements, ""]);
  };

  const handleRequirementChange = (index, value) => {
    const updatedRequirements = [...requirements];
    updatedRequirements[index] = value;
    setRequirements(updatedRequirements);
  };

  const handleAddBenefit = () => {
    setBenefits([...benefits, ""]);
  };

  const handleBenefitChange = (index, value) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index] = value;
    setBenefits(updatedBenefits);
  };

  const handleAddStudyPlan = () => {
    setStudyPlan([
      ...studyPlan,
      { title: "", modules: [{ title: "", type: "", src: "" }] },
    ]);
  };

  const handleStudyPlanChange = (planIndex, field, value) => {
    const updatedStudyPlan = [...studyPlan];
    updatedStudyPlan[planIndex][field] = value;
    setStudyPlan(updatedStudyPlan);
  };

  const handleAddModule = (planIndex) => {
    const updatedStudyPlan = [...studyPlan];
    updatedStudyPlan[planIndex].modules.push({ title: "", type: "", src: "" });
    setStudyPlan(updatedStudyPlan);
  };

  const handleModuleChange = (planIndex, moduleIndex, field, value) => {
    const updatedStudyPlan = [...studyPlan];
    updatedStudyPlan[planIndex].modules[moduleIndex][field] = value;
    setStudyPlan(updatedStudyPlan);
  };
  const handleTagChange = (index, value) => {
    const updatedTags = [...tags];
    updatedTags[index] = { name: value };
    setTags(updatedTags);
  };

  const handleAddTag = () => {
    setTags([...tags, { name: "" }]);
  };

  const handleRemoveTag = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  const onSubmit = async (data) => {
    const formData = {
      title: data.title,
      price: data.price,
      startDate: data.startDate,
      endDate: data.endDate,
      description: data.description,
      sits: data.sits,
      promo: data.promo,
      tags: tags.map((tag) => tag.name),
      requirements: requirements,
      benefits: benefits,
      instructors: data.instructors.map((instructor) => ({
        name: instructor.name,
        photo: instructor.photo,
        designation: instructor.designation,
        organization: instructor.organization,
      })),
      studyPlan: studyPlan.map((plan) => ({
        title: plan.title,
        modules: plan.modules.map((module) => ({
          title: module.title,
          type: module.type,
          src: module.src,
        })),
      })),
    };

    try {
      const response = await axios.post('https://online-learning-platform-backend.vercel.app/api/courses', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ` ${token}`
        },
      });

      console.log('Response:', response.data);
  
    } catch (error) {
      console.error('Error:', error);

    }

  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className={`${styles.skyBlueBg} my-4 rounded-lg p-4`}>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Course title"
              className={`${styles.tealBg} input w-full text-white`}
              {...register("title")}
            />
            <input
              type="number"
              placeholder="Price"
              className={`${styles.tealBg} input w-full text-white`}
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
            className={`${styles.tealBg} textarea w-full mb-4 text-white`}
            {...register("description")}
          />
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Seats"
              className={`${styles.tealBg} input w-full mb-4 text-white`}
              {...register("sits")}
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
                <div key={index} className="mb-4">
                  <input
                    type="text"
                    placeholder="Requirement"
                    className={`${styles.tealBg} input w-full  text-white`}
                    value={requirement}
                    onChange={(e) =>
                      handleRequirementChange(index, e.target.value)
                    }
                  />
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
                <div key={index} className="mb-4">
                  <input
                    type="text"
                    placeholder="Benefit"
                    className={`${styles.tealBg} input w-full  text-white`}
                    value={benefit}
                    onChange={(e) => handleBenefitChange(index, e.target.value)}
                  />
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
              <div key={index} className="flex gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Tag"
                  className={`${styles.tealBg} input w-full text-white`}
                  value={tag.name}
                  onChange={(e) => handleTagChange(index, e.target.value)}
                />
                <button
                  className={`${styles.tealBg} p-4 rounded-full text-white`}
                  type="button"
                  onClick={() => handleRemoveTag(index)}
                >
                  <MdClose />
                </button>
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
        <div className={`${styles.skyBlueBg} my-4 rounded-lg`}>
          <h3 className="text-white text-xl font-semibold p-4">
            Instructor Details
          </h3>
        </div>
        <div className={`${styles.skyBlueBg} my-4 rounded-lg px-4`}>
          {instructors.map((instructor, index) => (
            <div key={index} className="py-4">
              <input
                type="text"
                placeholder="Instructor photo"
                className={`${styles.tealBg} input w-full mb-4 text-white`}
                {...register(`instructors[${index}].photo`, {
                  value: instructor.photo,
                })}
                onChange={(e) =>
                  handleInstructorChange(index, "photo", e.target.value)
                }
              />
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className={`${styles.tealBg} input w-full text-white`}
                  {...register(`instructors[${index}].name`, {
                    value: instructor.name,
                  })}
                  onChange={(e) =>
                    handleInstructorChange(index, "name", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Designation"
                  className={`${styles.tealBg} input w-full text-white`}
                  {...register(`instructors[${index}].designation`, {
                    value: instructor.designation,
                  })}
                  onChange={(e) =>
                    handleInstructorChange(index, "designation", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Organization"
                  className={`${styles.tealBg} input w-full text-white`}
                  {...register(`instructors[${index}].organization`, {
                    value: instructor.organization,
                  })}
                  onChange={(e) =>
                    handleInstructorChange(
                      index,
                      "organization",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          ))}
          <button
            className={`${styles.tealBg} p-3 rounded-md text-white my-4`}
            type="button"
            onClick={handleAddInstructor}
          >
            Add Instructor
          </button>
        </div>
        <div className={`${styles.skyBlueBg} my-4 rounded-lg`}>
          <h3 className="text-white text-xl font-semibold p-4">Study plan</h3>
        </div>
        <div className={`${styles.skyBlueBg} my-4 rounded-lg p-4`}>
          {studyPlan.map((plan, planIndex) => (
            <div key={planIndex} className="mb-4">
              <input
                type="text"
                placeholder="Week Title"
                className={`${styles.tealBg} input w-full mb-2 text-white`}
                value={plan.title}
                onChange={(e) =>
                  handleStudyPlanChange(planIndex, "title", e.target.value)
                }
              />
              {plan.modules.map((module, moduleIndex) => (
                <div key={moduleIndex} className="grid md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Module Title"
                    className={`${styles.tealBg} input w-full mb-2 text-white`}
                    value={module.title}
                    onChange={(e) =>
                      handleModuleChange(
                        planIndex,
                        moduleIndex,
                        "title",
                        e.target.value
                      )
                    }
                  />
                  <input
                    type="text"
                    placeholder="Module Type"
                    className={`${styles.tealBg} input w-full mb-2 text-white`}
                    value={module.type}
                    onChange={(e) =>
                      handleModuleChange(
                        planIndex,
                        moduleIndex,
                        "type",
                        e.target.value
                      )
                    }
                  />
                  <input
                    type="text"
                    placeholder="Module Source"
                    className={`${styles.tealBg} input w-full mb-2 text-white`}
                    value={module.src}
                    onChange={(e) =>
                      handleModuleChange(
                        planIndex,
                        moduleIndex,
                        "src",
                        e.target.value
                      )
                    }
                  />
                </div>
              ))}
              <button
                className={`${styles.tealBg} p-2 rounded-md mb-2 text-white`}
                type="button"
                onClick={() => handleAddModule(planIndex)}
              >
                Add Module
              </button>
            </div>
          ))}
          <button
            className={`${styles.tealBg} p-3 rounded-md text-white`}
            type="button"
            onClick={handleAddStudyPlan}
          >
            Add Study Plan
          </button>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="submit"
            value="Add this course"
            className={`bg-teal-700 btn text-white border-0 hover:bg-teal-600 w-80 mx-auto mt-8 mb-4`}
          />
        </div>
      </form>
    </div>
  );
}
