import 'dotenv/config';
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

  static async getEducations(req, res) {
    const { body } = req;
    try {
      const educations = await Education.findAll({});
      const status = 200;
      return res.status(status).json({
        status,
        educations
      });
    } catch (err) {
      const status = 500;
      return res.status(status).json({
        status,
        message: err.message || 'Server error'
      });
    }
  }

  static async getEducation(req, res) {
    const { id } = req.params;
    let status = 200;

    try {
      const education = await Education.findOne({
        where: {
          id
        }
      });

      if (!education) {
        status = 404;
        return res.status(status).json({
          status,
          message: 'Education record not found'
        });
      }
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

  static async deleteEducation(req, res) {
    const { id } = req.params;
    let status = 200;

    try {
      const education = await Education.findOne({
        where: {
          id
        }
      });

      if (!education) {
        status = 404;
        return res.status(status).json({
          status,
          message: 'Education record not found'
        });
      }
      await education.destroy();
      return res.status(status).json({
        status,
        message: 'The record deleted successfully'
      });
    } catch (err) {
      const status = 500;
      return res.status(status).json({
        status,
        message: err.message || 'Server error'
      });
    }
  }

  static async updateEducation(req, res) {
    const { body } = req;
    const { id } = req.params;
    let status = 200;

    try {
      const education = await Education.findOne({
        where: {
          id
        }
      });

      if (!education) {
        status = 404;
        return res.status(status).json({
          status,
          message: 'Education record not found'
        });
      }
      await education.update(body);
      return res.status(status).json({
        status,
        message: 'The record updated successfully',
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
