import { getEventPageIds } from './events';
import { getExternalPageIds } from './external';
import { getProjectPageIds } from './projects';

export const getAllPageIds = async () => {
  const projectPageIds = await getProjectPageIds();
  const eventPageIds = await getEventPageIds();
  const externalPageIds = await getExternalPageIds();

  return [...projectPageIds, ...eventPageIds, ...externalPageIds];
};
