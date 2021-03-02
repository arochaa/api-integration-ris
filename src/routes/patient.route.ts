import { Router } from 'express';
import patientController from '../controllers/patient.controller';

const patientRoute = Router();

patientRoute.get('/', patientController.controllerList);
patientRoute.get('/:id');
patientRoute.post('/:id');
patientRoute.put('/:id');
patientRoute.delete('/:id');

export default patientRoute;
