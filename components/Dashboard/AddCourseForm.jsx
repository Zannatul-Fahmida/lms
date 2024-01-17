import { useForm } from "react-hook-form";
import styles from "../../styles/Dashboard.module.css";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import CourseDetails from "./CourseDetails";
import InstructorDetails from "./InstructorDetails";
import StudyPlan from "./StudyPlan";

export default function AddCourseForm() {
  const { register, handleSubmit } = useForm();
  const [requirements, setRequirements] = useState(['']);
  const [benefits, setBenefits] = useState(['']);
  const [studyPlan, setStudyPlan] = useState([
    {
      title: '',
      modules: [
        {
          title: '',
          type: '',
          src: ''
        }
      ]
    }
  ]);
  const [instructors, setInstructors] = useState([
    {
      name: "",
      photo: "",
      designation: "",
      organization: "",
    },
  ]);
  const [tags, setTags] = useState(['']);
  const { token } = useSelector((state) => state.auth.token);

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

  const handleRemoveInstructor = (index) => {
    const updatedInstructors = [...instructors];
    updatedInstructors.splice(index, 1);
    setInstructors(updatedInstructors);
  };

  const handleAddRequirement = () => {
    setRequirements([...requirements, ""]);
  };

  const handleRemoveRequirement = (index) => {
    const updatedRequirements = [...requirements];
    updatedRequirements.splice(index, 1);
    setRequirements(updatedRequirements);
  };

  const handleRequirementChange = (index, value) => {
    const updatedRequirements = [...requirements];
    updatedRequirements[index] = value;
    setRequirements(updatedRequirements);
  };

  const handleAddBenefit = () => {
    setBenefits([...benefits, ""]);
  };

  const handleRemoveBenefit = (index) => {
    const updatedBenefits = [...benefits];
    updatedBenefits.splice(index, 1);
    setBenefits(updatedBenefits);
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

  const handleRemoveStudyPlan = (index) => {
    const updatedStudyPlan = [...studyPlan];
    updatedStudyPlan.splice(index, 1);
    setStudyPlan(updatedStudyPlan);
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

  const handleRemoveModule = (planIndex, moduleIndex) => {
    const updatedStudyPlan = [...studyPlan];
    updatedStudyPlan[planIndex].modules.splice(moduleIndex, 1);
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
    console.log(formData);

    try {
      const response = await axios.post(
        "https://online-learning-platform-backend.vercel.app/api/courses",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: ` ${token}`,
          },
        }
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <CourseDetails
          register={register}
          handleRequirementChange={handleRequirementChange}
          requirements={requirements}
          handleRemoveRequirement={handleRemoveRequirement}
          handleAddRequirement={handleAddRequirement}
          benefits={benefits}
          handleBenefitChange={handleBenefitChange}
          handleRemoveBenefit={handleRemoveBenefit}
          handleAddBenefit={handleAddBenefit}
          tags={tags}
          handleTagChange={handleTagChange}
          handleRemoveTag={handleRemoveTag}
          handleAddTag={handleAddTag}
        />
        <div className={`${styles.skyBlueBg} my-4 rounded-lg`}>
          <h3 className="text-white text-xl font-semibold p-4">
            Instructor Details
          </h3>
        </div>
        <InstructorDetails
          register={register}
          instructors={instructors}
          handleInstructorChange={handleInstructorChange}
          handleRemoveInstructor={handleRemoveInstructor}
          handleAddInstructor={handleAddInstructor}
        />
        <div className={`${styles.skyBlueBg} my-4 rounded-lg`}>
          <h3 className="text-white text-xl font-semibold p-4">Study plan</h3>
        </div>
        <StudyPlan
          studyPlan={studyPlan}
          handleStudyPlanChange={handleStudyPlanChange}
          handleModuleChange={handleModuleChange}
          handleRemoveModule={handleRemoveModule}
          handleAddModule={handleAddModule}
          handleRemoveStudyPlan={handleRemoveStudyPlan}
          handleAddStudyPlan={handleAddStudyPlan}
        />
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
