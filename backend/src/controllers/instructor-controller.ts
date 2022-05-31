import { Op } from 'sequelize';
import { Request, Response } from 'express';
import { ResponseType } from './auth-controller';
import CourseModel from '../models/course-model';
import TopicModel from '../models/topic-model';
import UserModel from '../models/user-model';
import { courseValidate, topicValidate } from '../utils/validations';

class Instructor {
  //DONE:
  //[POST] /instructor/create-course
  async createCourse(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    //@ts-ignore
    const instructorId = req.userData.id;
    const { price, description, name, image, type, watch } = req.body;
    const { error } = courseValidate({
      price,
      description,
      name,
      image,
      type,
      watch,
    });
    if (error) {
      resp.message = error.details[0].message;
      return res.status(200).json(resp);
    }

    try {
      const courseResp = await CourseModel.create({
        instructor_id: instructorId,
        price,
        description,
        name,
        image,
        type,
        watch,
      });
      const { createdAt, updatedAt, deletedAt, ...others } =
        courseResp.toJSON();
      resp.success = true;
      resp.message = others;
      return res.status(201).json(resp);
    } catch (error) {
      resp.message = error;
      console.log('--------------------------', error);
      return res.status(400).json(resp);
    }
  }
  //DONE:
  //[PUT] /instructor/update-course/:courseId
  async updateCourse(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    const { price, description, name, image, type, watch } = req.body;
    const courseId = req.params.courseId;
    //@ts-ignore
    const instructorId = req.userData.id;
    const { error } = courseValidate({
      price,
      description,
      name,
      image,
      type,
      watch,
    });
    if (error) {
      resp.message = error.details[0].message;
      return res.status(400).json(resp);
    }
    try {
      const [isUpdate] = await CourseModel.update(
        {
          price,
          description,
          name,
          image,
          type,
          watch,
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
      if (!isUpdate) {
        resp.success = false;
        resp.message = 'Course not found';
        return res.status(404).json(resp);
      }
      resp.success = true;
      resp.message = {
        price,
        description,
        name,
        image,
        type,
        watch,
        course_id: courseId,
      };
      return res.status(201).json(resp);
    } catch (error) {
      resp.message = error;
      return res.status(401).json(resp);
    }
  }
  //DONE:
  //[DELETE] /instructor/delete-course/:courseId
  async deleteCourse(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    //@ts-ignore
    const instructorId = req.userData.id;
    const courseId = req.params.courseId;
    try {
      const isRemove = await CourseModel.destroy({
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
      if (!isRemove) {
        resp.message = 'Course not found.';
        resp.success = false;
        return res.status(204).json(resp);
      }
      return res.status(204);
    } catch (error) {
      resp.message = error;
      return res.status(401).json(resp);
    }
  }
  //DONE:
  //[POST] /instructor/restore-course/:courseId
  async restoreCourse(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    //@ts-ignore
    const instructorId = req.userData.id;
    const courseId = req.params.courseId;
    try {
      await CourseModel.restore({
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
      resp.message = 'Course has been restored.';

      return res.status(200).json(resp);
    } catch (error) {
      resp.message = error;
      return res.status(401).json(resp);
    }
  }

  //DONE:
  //[POST] /instructor/create-topic
  async createTopic(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    //@ts-ignore
    const instructorId = req.userData.id;
    const { name, description, link, order, course_id } = req.body;
    const { error } = topicValidate({ name, description, link, order });
    if (error) {
      resp.message = error.details[0].message;
      return res.status(200).json(resp);
    }
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
                course_id,
              },
            ],
          },
        },
      });

      if (!passed) {
        resp.message = "You're not authorization.";
        return res.status(401).json(resp);
      }
      const topic = await TopicModel.create({
        name,
        description,
        link,
        order,
        course_id,
      });
      const { createdAt, updatedAt, ...others } = topic.toJSON();
      resp.success = true;
      resp.message = others;
      return res.status(200).json(resp);
    } catch (error) {
      resp.message = error;
      return res.status(401).json(resp);
    }
  }

  //DONE:
  // [PUT] /instructor/update-topic/:courseId
  async updateTopic(req: Request, res: Response) {
    const resp: ResponseType = { success: false };
    //@ts-ignore
    const instructorId = req.userData.id;
    const { name, description, link, order, course_id } = req.body;
    const { error } = topicValidate({ name, description, link, order });
    if (error) {
      resp.message = error.details[0].message;
      return res.status(200).json(resp);
    }
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
                course_id,
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
      const [isUpdate] = await TopicModel.update(
        {
          name,
          description,
          link,
        },
        {
          where: {
            course_id,
            order,
          },
        }
      );
      if (!isUpdate) {
        resp.message = 'Topic is not found.';
        return res.status(200).json(resp);
      } else {
        resp.success = true;
        resp.message = {
          name,
          description,
          link,
          course_id,
          order,
        };
        return res.status(200).json(resp);
      }
    } catch (error) {
      resp.message = error;
      return res.status(401).json(resp);
    }
  }
}

export default new Instructor();
