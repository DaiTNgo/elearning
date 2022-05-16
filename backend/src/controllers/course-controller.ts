import { Request, Response } from 'express';
import UserModel from '../models/user-model';
import CourseModel from '../models/course-model';
import TopicModel from '../models/topic-model';
import FavouriteCourseModel from '../models/favourite-course-model';
import { Op } from 'sequelize';
class Course {
  //DONE: [GET] lấy tất cả khóa học của instructorid + info instructor
  //[GET] /instructor/:instructorId
  async getAllCourseInstructorId(req: Request, res: Response) {
    const instructorId = req.params.instructorId;
    try {
      const info = await CourseModel.findAll({
        include: {
          model: UserModel,
          required: true,
          where: { id: instructorId },
        },
        raw: true,
      });
      return res.status(200).json(info);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  // DONE: lấy tất cả các khóa yêu thích của user + info course + info instructor
  //[GET] /favourite
  async getAllCourseFavourite(req: Request, res: Response) {
    //@ts-ignore
    const userId = req.userData.id;
    try {
      const course = await CourseModel.findAll({
        include: [
          {
            model: FavouriteCourseModel,
            required: true,
            where: {
              user_id: userId,
            },
          },
          {
            model: UserModel,
            required: true,
          },
        ],
        nest: true,
        raw: true,
      });
      return res.status(200).json(course);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  //DONE:lấy all thông tin khóa học + instructor + topic
  //DONE: lấy khóa học tutorial hay livestream với ?istutorial or ?islivestream
  // [GET] /  || /?istutorial=1 || /?islivestream=1
  async getAllCourse(req: Request, res: Response) {
    const { istutorial, islivestream } = req.query;
    try {
      if (!(islivestream || istutorial)) {
        const course = await CourseModel.findAll({
          include: [
            {
              model: TopicModel,
              required: true,
            },
            {
              model: UserModel,
              required: true,
            },
          ],
        });
        return res.status(200).json(course);
      } else {
        const test = await CourseModel.findAll({
          include: [
            {
              model: TopicModel,
              required: true,
            },
            {
              model: UserModel,
              required: true,
            },
          ],
          where: {
            [Op.and]: [
              { isLivestream: islivestream ?? 0 },
              { isTutorial: istutorial ?? 0 },
            ],
          },
        });
        return res.status(200).json(test);
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  //DONE: lấy thông tin 1 khóa học course_id + instructor + topics => truyền instructor_id xuống cho component lấy thông tin của instructor + khóa học
  //[GET] /:courseId
  async getOneCourse(req: Request, res: Response) {
    const courseId = req.params.courseId;
    try {
      const course = await CourseModel.findOne({
        include: [
          {
            model: TopicModel,
            required: true,
          },
          {
            model: UserModel,
            required: true,
          },
        ],
        where: {
          course_id: courseId,
        },
      });
      return res.status(200).json(course);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new Course();
