import { Op } from 'sequelize';
import { Request, Response } from 'express';
import { ResponseType } from './auth-controller';
import CourseModel from '../models/course-model';
import TopicModel from '../models/topic-model';
import UserModel from '../models/user-model';

class Instructor {
  //DONE:
  //[POST] /instructor/create-course
  async createCourse(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    //@ts-ignore
    const instructorId = req.userData.id;
    const {
      courseName,
      courseType,
      price,
      description,
      image,
      isTutorial,
      isLivestream,
      topics,
    } = req.body;
    let course;
    try {
      course = await CourseModel.create({
        instructor_id: instructorId,
        price,
        description,
        name: courseName,
        image: image,
        type: courseType,
        isTutorial,
        isLivestream,
      });
      const lengthOfTopic = topics.length;
      for (let i = 0; i < lengthOfTopic; i++) {
        await TopicModel.create({
          name: topics[i].name,
          description: topics[i].description,
          link: topics[i].link,
          order: i + 1,
          course_id: course.course_id,
        });
      }
      resp.success = true;
      resp.message = course;
      return res.status(201).json(resp);
    } catch (error) {
      if (course) {
        CourseModel.destroy({
          where: {
            course_id: course.course_id,
          },
          force: true,
        });
      }
      resp.message = error;
      return res.status(400).json(resp);
    }
  }
  //DONE:
  //[PATCH] /instructor/course/:courseId
  async updateCourse(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    const {
      courseName,
      courseType,
      price,
      description,
      image,
      isTutorial,
      isLivestream,
    } = req.body;
    const courseId = req.params.courseId;
    //@ts-ignore
    const instructorId = req.userData.id;
    try {
      const course = await CourseModel.update(
        {
          price: price,
          description: description,
          image: image,
          name: courseName,
          type: courseType,
          isTutorial,
          isLivestream,
        },
        {
          where: {
            [Op.and]: [
              {
                instructor_id: instructorId,
              },
              {
                course_id: courseId,
              },
            ],
          },
        }
      );
      if (!course[0]) {
        resp.success = false;
        resp.message = 'Course not found';
        return res.status(404).json(resp);
      }
      resp.success = true;
      resp.message = course;
      return res.status(201).json(resp);
    } catch (error) {
      resp.message = error;
      return res.status(401).json(resp);
    }
  }
  //DONE:
  //[DELETE] /instructor/:courseId
  async deleteCourse(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    //@ts-ignore
    const instructorId = req.userData.id;
    const courseId = req.params.courseId;
    try {
      const course = await CourseModel.destroy({
        where: {
          [Op.and]: [
            {
              instructor_id: instructorId,
            },
            {
              course_id: courseId,
            },
          ],
        },
      });
      if (!course) {
        resp.message = 'Course not found';
        resp.success = false;
        return res.status(404).json(resp);
      }
      resp.success = true;
      return res.status(204).json(resp);
    } catch (error) {
      resp.message = error;
      return res.status(401).json(resp);
    }
  }
  //DONE:
  //[POST] /instructor/restore/course/:courseId
  async restoreCourse(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    //@ts-ignore
    const instructorId = req.userData.id;
    const courseId = req.params.courseId;
    try {
      const course = await CourseModel.restore({
        where: {
          [Op.and]: [
            {
              instructor_id: instructorId,
            },
            {
              course_id: courseId,
            },
          ],
        },
      });
      resp.success = true;
      resp.message = {
        isExistCourse: course,
      };
      return res.status(200).json(resp);
    } catch (error) {
      resp.message = error;
      return res.status(401).json(resp);
    }
  }

  //DONE:
  //[POST] /instructor/topic?courseId&&order
  async updateOrCreateTopic(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    //@ts-ignore
    const instructorId = req.userData.id;
    const { order, courseId } = req.query;
    const { name, description, link } = req.body;
    try {
      const passed = await UserModel.findOne({
        include: {
          model: CourseModel,
          where: {
            [Op.and]: [
              {
                instructor_id: instructorId,
              },
              {
                course_id: courseId,
              },
            ],
          },
        },
      });

      if (!passed) {
        resp.success = false;
        resp.message = "You're not authorization.";
        return res.status(401).json(resp);
      }
      const [topic] = await TopicModel.update(
        {
          name,
          description,
          link,
        },
        {
          where: {
            [Op.and]: [
              {
                order: order,
              },
              {
                course_id: courseId,
              },
            ],
          },
        }
      );
      console.log(
        'file: instructor-controller.ts >>> line 228 >>> topic',
        topic
      );
      if (!topic) {
        const topic = await TopicModel.create({
          order: order,
          course_id: courseId,
          name,
          description,
          link,
        });
        if (!topic) {
          resp.success = false;
          resp.message = 'Something is wrong topic';
          return res.status(404).json(resp);
        }
      }
      resp.success = true;
      resp.message = topic;
      return res.status(200).json(resp);
    } catch (error) {
      resp.message = error;
      return res.status(401).json(resp);
    }
  }
  //DONE:
  //[DELETE] /instructor/topic?courseId&&order
  async deleteTopic(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    //@ts-ignore
    const instructorId = req.userData.id;
    const { order, courseId } = req.query;

    try {
      const passed = await UserModel.findOne({
        include: {
          model: CourseModel,
          where: {
            [Op.and]: [
              {
                instructor_id: instructorId,
              },
              {
                course_id: courseId,
              },
            ],
          },
        },
      });

      if (!passed) {
        resp.success = false;
        resp.message = "You're not authorization.";
        return res.status(401).json(resp);
      }
      const topic = await TopicModel.destroy({
        where: {
          [Op.and]: [
            {
              order: order,
            },
            {
              course_id: courseId,
            },
          ],
        },
      });
      if (!topic) {
        resp.success = false;
        resp.message = 'Topic not found';
        return res.status(404).json(resp);
      }
      resp.success = true;
      return res.status(204).json(resp);
    } catch (error) {
      resp.message = error;
      return res.status(401).json(resp);
    }
  }
  //DONE:
  //[POST] /instructor/restore/topic?courseId&&order
  async restoreTopic(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    //@ts-ignore
    const instructorId = req.userData.id;
    const { order, courseId } = req.query;
    try {
      const passed = await UserModel.findOne({
        include: {
          model: CourseModel,
          where: {
            [Op.and]: [
              {
                instructor_id: instructorId,
              },
              {
                course_id: courseId,
              },
            ],
          },
        },
      });

      if (!passed) {
        resp.success = false;
        resp.message = "You're not authorization.";
        return res.status(401).json(resp);
      }

      const isTopic = await TopicModel.restore({
        where: {
          [Op.and]: [
            {
              order: order,
            },
            {
              course_id: courseId,
            },
          ],
        },
      });
      resp.success = true;
      resp.message = {
        isTopic,
      };
      return res.status(401).json(resp);
    } catch (error) {
      resp.message = error;
      return res.status(401).json(resp);
    }
  }
}

export default new Instructor();
