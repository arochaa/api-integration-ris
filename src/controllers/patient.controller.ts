import { Request, Response } from 'express';
import patientServices from '../services/patient.service';

export default {
  controllerList: async (
    req: Request,
    res: Response,
  ): Promise<Response<unknown, Record<string, unknown>>> => {
    const patient = await patientServices.serviceList();
    return res.json(patient);
  },
};
