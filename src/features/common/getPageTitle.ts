import { isString } from './typeGuards';
import { SITE_TITEL } from '@/constants/meta';

export const getPageTitle = (title?: string): string => {
  if (isString(title)) {
    return `${title} - ${SITE_TITEL}`;
  }
  return SITE_TITEL;
};
