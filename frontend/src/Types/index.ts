import { AxiosResponse } from 'axios';
// import { CourseResponse } from './../Pages/index';
export interface TopicResponse {
  course_id?: number;
  order: number;
  name: string;
  description: string;
  link: string;
}
export interface UserResponse {
  id: number;
  email: string;
  role: string;
  user_name: string;
  avatar: string;
  description: string;
  acc_twiter: string;
  my_website: string;
}

export interface CourseResponse {
  course_id: number;
  instructor_id: number;
  price: string;
  description: string;
  name: string;
  image: string;
  type: string;
  watch: string;
}

export type GetAllCourseResponse = Omit<CourseResponse, 'instructor_id'> & {
  count: number;
  id: number;
  user_name: string;
  user_desc: string;
  acc_twiter: string;
  avatar: string;
};

export type ResponseAxiosType<T> = AxiosResponse<{
  success: boolean;
  message: T;
}>;

export type GetTutorialResponse = CourseResponse & {
  Topics: TopicResponse[];
  User: UserResponse;
};
