import instance from '@redhat-cloud-services/frontend-components-utilities/interceptors';
import { load } from 'js-yaml';

export const getConfig = async () => {
  const config = await instance.get(
    `${insights.chrome.isBeta() ? '/beta' : ''}/config/main.yml`
  );
  return load(config);
};

export const getApplicationSchema = async (application, apiVersion = 'v1') =>
  instance.get(`/api/${application}/${apiVersion}/settings`);

export const saveValues = async (application, values, apiVersion = 'v1') =>
  instance.post(`/api/${application}/${apiVersion}/settings/`, { ...values });
