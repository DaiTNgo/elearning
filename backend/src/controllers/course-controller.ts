import { Request, Response } from 'express';
import UserModel from '../models/user-model';
import CourseModel from '../models/course-model';
import TopicModel from '../models/topic-model';
class Course {
  async test(req: Request, res: Response) {
    try {
      const test = await UserModel.findAll({
        include: { model: CourseModel, required: true },
        raw: true,
      });
      console.log('>>> tst :', test.length);
      return res.status(200).json(test);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new Course();
