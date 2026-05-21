export const DB_CONSTRAINTS = {
  USERS_EMAIL_UNIQUE: 'uq_users_email',

  ROLES_CODE_UNIQUE: 'uq_roles_code',

  PERMISSIONS_CODE_UNIQUE: 'uq_permissions_code',

  INSTITUTES_CODE_UNIQUE: 'uq_institutes_code',

  BRANCHES_CODE_UNIQUE: 'uq_branches_code',
};

export const DB_FOREIGN_KEYS = {
  USER_BRANCH_ID: 'fk_users_branch_id',

  USER_INSTITUTE_ID: 'fk_users_institute_id',

  USER_ROLE_USER_ID: 'fk_user_roles_user_id',

  USER_ROLE_ROLE_ID: 'fk_user_roles_role_id',
};