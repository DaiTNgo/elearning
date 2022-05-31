import { Request, Response } from 'express';
import UserModel from '../models/user-model';
import CourseModel from '../models/course-model';
import TopicModel from '../models/topic-model';
import FavouriteCourseModel from '../models/favourite-course-model';
import { ResponseType } from './auth-controller';
import { Op } from 'sequelize';
class Course {
  //DONE: [GET] lấy tất cả khóa học của instructorid + info instructor
  //[GET] /instructor/:instructorId
  async getAllCourseInstructorId(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
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
      resp.success = true;
      resp.message = info;
      return res.status(200).json(resp);
    } catch (error) {
      resp.message = error;
      return res.status(400).json(resp);
    }
  }
  // DONE: lấy tất cả các khóa yêu thích của user + info course + info instructor
  //[GET] /favourite
  async getAllCourseFavourite(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
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
      resp.success = true;
      resp.message = course;
      return res.status(200).json(resp);
    } catch (error) {
      resp.message = error;
      return res.status(400).json(resp);
    }
  }

  //DONE:lấy all thông tin khóa học + instructor + topic
  //DONE: lấy khóa học tutorial hay livestream với ?istutorial or ?islivestream
  // [GET] /  || /?istutorial=1 || /?islivestream=1
  async getAllCourse(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
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
        resp.success = true;
        resp.message = course;
      } else {
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
          where: {
            [Op.and]: [
              { isLivestream: islivestream ?? 0 },
              { isTutorial: istutorial ?? 0 },
            ],
          },
        });
        resp.success = true;
        resp.message = course;
      }
      return res.status(200).json(resp);
    } catch (error) {
      resp.message = error;
      return res.status(400).json(resp);
    }
  }
  //DONE: lấy thông tin 1 khóa học course_id + instructor + topics => truyền instructor_id xuống cho component lấy thông tin của instructor + khóa học
  //[GET] /:courseId
  async getOneCourse(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    const courseId = req.params.courseId;
    try {
      const course = await CourseModel.findOne({
        include: [
          {
            model: TopicModel,
            // required: true,
          },
          {
            model: UserModel,
            // required: true,
          },
        ],
        where: {
          course_id: courseId,
        },
      });
      resp.success = true;
      resp.message = course;
      return res.status(200).json(resp);
    } catch (error) {
      resp.message = error;
      return res.status(400).json(resp);
    }
  }
}

export default new Course();
