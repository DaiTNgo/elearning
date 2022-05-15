import CourseModel from './course-model';
import FavouriteCourseModel from './favourite-course-model';
import TopicModel from './topic-model';
import UserModel from './user-model';

export { default as TopicModel } from './topic-model';
export { default as UserModel } from './user-model';
export { default as FavouriteCourseModel } from './favourite-course-model';
export { default as CourseModel } from './course-model';

CourseModel.hasMany(TopicModel, { foreignKey: 'course_id' });

CourseModel.belongsToMany(UserModel, {
  through: FavouriteCourseModel,
  foreignKey: 'course_id',
});

UserModel.belongsToMany(CourseModel, {
  through: FavouriteCourseModel,
  foreignKey: 'user_id',
});

UserModel.hasMany(CourseModel, {
  foreignKey: 'instructor_id',
});
