import patientRepo from '../repositories/patient.repository';

export default {
  serviceList: (): Promise<unknown[]> => {
    return patientRepo.repoList();
  },
};
