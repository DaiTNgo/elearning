import { Request, Response } from 'express';
import { ResponseType } from './auth-controller';
import CourseModel from '../models/course-model';
import TopicModel from '../models/topic-model';
import UserModel from '../models/user-model';

class User {
  //TODO:
  //[POST] /instructor/create-course
  async createCourse(req: Request, res: Response) {
    //@ts-ignore
    const instructorId = req.userData.id;
    const { courseName, courseType, price, description, image, topics } =
      req.body;
    let course;
    try {
      course = await CourseModel.create({
        instructor_id: instructorId,
        price,
        description,
        name: courseName,
        image: image,
        type: courseType,
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
      return res.status(201).json({ success: true });
    } catch (error) {
      if (course) {
        CourseModel.destroy({
          where: {
            course_id: course.course_id,
          },
          force: true,
        });
      }
      return res.status(400).json(error);
    }
  }
  //TODO:
  //[PATCH] /instructor/?course_id&&?topic_id
  async updateCourse(req: Request, res: Response) {
    const { courseName, courseType, price, description, image } = req.body;
    const courseId = req.params.courseId;

    try {
      const course = await CourseModel.findOne({
        where: {
          course_id: courseId,
        },
      });
      if (!course) {
        return res.status(400).json('Course not found.');
      }
      //@ts-ignore
      if (!(course.instructor_id === req.userData.id)) {
        return res.status(401).json('You are not authorizaion.');
      }
      course.price = price;
      course.description = description;
      course.image = image;
      course.name = courseName;
      course.type = courseType;
      course?.save();

      return res.status(201).json({ success: true });
    } catch (error) {
      return res.status(401).json(error);
    }
  }
  //TODO:
  //[DELETE] /instructor/:courseId
  async deleteCourse(req: Request, res: Response) {
    //@ts-ignore
    const user = req.userData;
    const courseId = req.params.courseId;
    try {
      const course = await CourseModel.findOne({
        where: {
          course_id: courseId,
        },
      });
      if (!course) {
        return res.status(400).json('Course not found.');
      }
      if (!(course.instructor_id === user.id || user.role === 'admin')) {
        return res.status(401).json({ message: "You're not authorization." });
      }
      CourseModel.destroy({
        where: {
          course_id: courseId,
        },
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(401).json(error);
    }
  }
  //TODO:
  //[POST] /instructor/restore/:courseId
  async restoreCourse(req: Request, res: Response) {
    //@ts-ignore
    const instructorId = req.userData.id;
    const courseId = req.params.courseId;
    try {
      const course = await CourseModel.findOne({
        where: {
          course_id: courseId,
        },
        paranoid: false,
      });
      if (!course) {
        return res.status(400).json('Course not found.');
      }
      if (!(course.instructor_id === instructorId)) {
        return res.status(401).json({ message: "You're not authorization." });
      }
      course.restore();
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(401).json(error);
    }
  }

  //TODO:
  //[DELETE] /instructor/:topicId
  async deleteTopic(req: Request, res: Response) {
    //@ts-ignore
    const user = req.userData;
    const { topicId } = req.query;

    try {
      const topic = await CourseModel.findAll({
        include: UserModel,

        // where: {
        //   topic_id: topicId,
        // },
      });
      console.log(
        'file: instructor-controller.ts >>> line 140 >>> topic:',
        topic
      );
      //   const course = await CourseModel.findOne({
      //     where: {
      //       course_id: topic?.course_id,
      //     },
      //   });

      //   if (topic && course?.instructor_id === user.id) {
      //     TopicModel.destroy({
      //       where: {
      //         topic_id: topicId,
      //       },
      //     });
      //     return res.status(200).json({ success: true });
      //   }
      //   return res.status(200).json('topic not found');
      return res.status(200).json('ok');
    } catch (error) {
      return res.status(401).json(error);
    }
  }
  //TODO:
  //[POST] /instructor/restore/:courseId/:topicId
  async restoreTopic(req: Request, res: Response) {
    //@ts-ignore
    const instructorId = req.userData.id;
    const courseId = req.params.courseId;
    try {
      const course = await CourseModel.findOne({
        where: {
          course_id: courseId,
        },
        paranoid: false,
      });
      if (!course) {
        return res.status(400).json('Course not found.');
      }
      if (course?.instructor_id === instructorId) {
        await course.restore();
        return res.status(200).json('ok');
      }
      return res.status(401).json({ message: "You're not authorization." });
    } catch (error) {
      return res.status(401).json(error);
    }
  }
}

export default new User();
