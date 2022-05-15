import TopicModel from './topic-model';
import UserModel from './user-model';
import FavouriteCourseModel from './favourite-course-model';
import CourseModel from './course-model';

CourseModel.hasMany(TopicModel);

UserModel.hasMany(CourseModel, { foreignKey: 'instructor_id' });

CourseModel.belongsToMany(UserModel, {
  through: FavouriteCourseModel,
  timestamps: false,
});

UserModel.belongsToMany(CourseModel, {
  through: FavouriteCourseModel,
  timestamps: false,
});
