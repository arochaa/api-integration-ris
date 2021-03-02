import { Router } from 'express';
import patientRoute from './patient.route';

const route = Router();

route.use(patientRoute);

export default route;
