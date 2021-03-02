import conn from '../infrastructure/connection';

export default {
  repoList: async (): Promise<unknown[]> => {
    const patient = await conn.select('*').from('paciente').limit(200);
    return patient;
  },
};
