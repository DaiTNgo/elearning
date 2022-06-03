export interface CourseType {
  course_id?: number;
  name: string;
  type: string;
  description: string;
  image: string;
  price: string;
  watch: 'normal' | 'livestream' | 'tutorial';
}
export interface TopicType {
  course_id?: number;
  order?: number;
  name: string;
  link: string;
  description: string;
}
export interface ICourseTypes {
  label: string;
  value: string;
}
