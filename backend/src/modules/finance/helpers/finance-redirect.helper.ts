export interface RoleAccess {
  redirect_url: string;
  allowed_modules: string[];
}

export function getRoleAccessConfig(role: string): RoleAccess {
  switch (role) {
    case 'ADMIN':
      return {
        redirect_url: '/dashboard',
        allowed_modules: ['all'],
      };

    case 'FINANCE':
    case 'ACCOUNTANT':
      return {
        redirect_url: '/dashboard/finance',
        allowed_modules: [
          'fee-structures',
          'student-fee-plans',
          'invoices',
          'payments',
          'receipts',
          'finance-reports',
        ],
      };

    case 'TEACHER':
      return {
        redirect_url: '/dashboard/academic',
        allowed_modules: ['attendance', 'marks', 'assignments'],
      };

    case 'STUDENT':
      return {
        redirect_url: '/dashboard/student',
        allowed_modules: ['my-fees', 'my-attendance', 'my-marks'],
      };

    case 'PARENT':
      return {
        redirect_url: '/dashboard/parent',
        allowed_modules: ['child-fees', 'child-attendance', 'child-marks'],
      };

    default:
      return {
        redirect_url: '/dashboard',
        allowed_modules: [],
      };
  }
}

// Keeping the original function name for backward compatibility if needed, 
// but pointing to the new config logic
export function getLoginRedirect(role: string): string {
  return getRoleAccessConfig(role).redirect_url;
}
