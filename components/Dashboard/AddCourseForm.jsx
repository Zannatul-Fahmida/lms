import { useForm } from "react-hook-form";
import styles from "../../styles/Dashboard.module.css";
import { useState } from "react";

export default function AddCourseForm() {
  const { register, handleSubmit } = useForm();
  const [requirements, setRequirements] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [studyPlan, setStudyPlan] = useState([]);

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

  const onSubmit = () => {};
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className={`${styles.skyBlueBg} my-4 rounded-lg p-4`}>
          {/*<label className="w-full">
            <div className="label">
              <span className="label-text text-white">Course thumbnail</span>
            </div>
            <input
              type="file"
              className={`${styles.tealBg} file-input w-full mb-4 text-white`}
              {...register("thumbnail")}
            />
          </label>*/}
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
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`my-4 rounded-lg text-white`}>
              {requirements.map((requirement, index) => (
                <div key={index} className="mb-4">
                  <input
                    type="text"
                    placeholder="Requirement"
                    className={`${styles.tealBg} input w-full text-slate-400`}
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
                    className={`${styles.tealBg} input w-full text-slate-400`}
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
      </form>
    </div>
  );
}
