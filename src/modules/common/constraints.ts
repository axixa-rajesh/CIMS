export const UNIQUE_KEYS = {
  USER_EMAIL: 'users.email',
  INSTITUTE_CODE: 'institutes.code',
  ROLE_CODE: 'roles.code',
};

export const FOREIGN_KEYS = {
  USER_INSTITUTE: 'users.institute_id -> institutes.id',
  USER_BRANCH: 'users.branch_id -> branches.id',

  ROLE_PERMISSION_ROLE: 'role_permissions.role_id -> roles.id',
  ROLE_PERMISSION_PERMISSION: 'role_permissions.permission_id -> permissions.id',

  USER_ROLE_USER: 'user_roles.user_id -> users.id',
  USER_ROLE_ROLE: 'user_roles.role_id -> roles.id',
};