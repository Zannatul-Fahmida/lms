import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  status: "idle",
  error: null,
};

export const fetchSingleCourse = createAsyncThunk(
  "singleCourse/fetchSingleCourse",
  async (courseId) => {
    try {
      if (!courseId) {
        throw new Error("Invalid courseId");
      }

      const response = await axios.get(`https://online-learning-platform-backend.vercel.app/api/courses/${courseId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

const singleCourseSlice = createSlice({
  name: "singleCourse",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleCourse.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSingleCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { reducer: singleCourseReducer } = singleCourseSlice;
export default singleCourseReducer;
