import { Role } from '../table/role';
export const initialRole: Role[] = [
  {
    name: 'System Admin',
    isPreset: 1,
    note: 'All permissions',
    id: 1,
  },
  {
    name: 'User',
    isPreset: 1,
    note: 'Submit training job, View VC, View cluster status, View all users job',
    id: 2,
  }
]