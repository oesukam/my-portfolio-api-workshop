import 'dotenv';
import { Education } from '../database/models';

export default class EducationController {
  static async postEducation(req, res) {
    const { body } = req;
    try {
      const education = await Education.create(body);
      const status = 201;
      return res.status(status).json({
        status,
        education
      });
    } catch (err) {
      const status = 500;
      return res.status(status).json({
        status,
        message: err.message || 'Server error'
      });
    }
  }
}
