import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Colors = {
  primary: '#4F46E5', // Modern Indigo
  primaryLight: '#EEF2FF',
  secondary: '#10B981', // Success Green
  danger: '#EF4444',
  warning: '#F59E0B',
  background: '#F9FAFB', // Cool Gray background
  cardBackground: '#FFFFFF',
  text: '#111827',
  textSecondary: '#6B7280',
  textMuted: '#9CA3AF',
  inputBackground: '#FFFFFF',
  inputBorder: '#E5E7EB',
  headerBackground: '#F3F4F6',
  divider: '#F3F4F6',
  avatarBackground: '#E3F2FD',
  placeholder: '#999',
};

export const GlobalStyles = StyleSheet.create({
  // --- Layout Containers ---
  flex1: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100, // Space for FAB
  },

  // --- Header Styles ---
  pageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#6366f1', // Indigo primary
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
  },
  userName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  userEmail: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  // --- Card Wrapper (Used for Table & Form) ---
  card: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 16,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 12,
      },
      android: {
        elevation: 3,
      },
    }),
  },

  // --- Futuristic Table Styles ---
  tableHead: {
    height: 50,
    backgroundColor: Colors.headerBackground,
  },
  headText: {
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '700',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  row: {
    height: 65,
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: Colors.cardBackground,
  },
  rowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  cellText: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.textSecondary,
  },
  boldCellText: {
    color: Colors.text,
    fontWeight: '600',
    paddingLeft: 8,
  },

  // --- Status Pills ---
  pill: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignSelf: 'center',
  },
  pillText: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  // --- Modern Form Styles ---
  formPadding: {
    padding: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
  },
  input: {
    backgroundColor: Colors.inputBackground,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    marginBottom: 20,
    color: Colors.text,
  },

  // --- Buttons ---
  primaryButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  toggleBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  cancelBtn: {
    backgroundColor: Colors.danger,
  },
  toggleBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },

  // --- Floating Action Button (FAB) ---
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: Colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  fabIcon: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '300',
  },

  // --- Dashboard/Stat Cards ---
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: Colors.cardBackground,
    padding: 15,
    borderRadius: 12,
    width: (width - 48) / 3, // Dynamic width calculation
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  statLabel: {
    fontSize: 10,
    color: Colors.textMuted,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.text,
    marginTop: 4,
  },
  // --- Sidebar Specific Styles ---
  drawerContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  sidebarUserSection: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sidebarAvatar: {
    width: 50,
    height: 50,
    borderRadius: 12, // Matches the squareCard rounding
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidebarAvatarText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  sidebarUserInfo: {
    marginLeft: 15,
  },
  sidebarUserName: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  sidebarUserSubtitle: {
    color: Colors.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
  sidebarMenuList: {
    padding: 15,
  },
  sidebarSectionHeader: {
    fontSize: 11,
    color: Colors.textMuted,
    fontWeight: '800',
    marginBottom: 15,
    letterSpacing: 1,
    paddingLeft: 10,
  },
  sidebarMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 4,
  },
  sidebarActiveItem: {
    backgroundColor: Colors.primaryLight, // Light Indigo wash
  },
  sidebarMenuText: {
    fontSize: 15,
    color: Colors.textSecondary,
    fontWeight: '500',
    marginLeft: 12,
  },
  sidebarActiveMenuText: {
    color: Colors.primary,
    fontWeight: '700',
  },
  sidebarTopNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  sidebarHamburger: {
    width: 30,
  },
  hamburgerContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidebarBar: {
    height: 2,
    backgroundColor: Colors.text,
    width: 22,
    borderRadius: 2,
    marginVertical: 2.5,
  },
  // --- Dashboard Grid System ---
  grid: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  // This matches the square layout seen in your recent progress
  dashboardCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 24,
    padding: 20,
    width: '48%', // Two cards per row
    aspectRatio: 1, // Keeps it a perfect square
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 12,
      },
      android: {
        elevation: 3,
      },
    }),
  },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  cardValue: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -0.5,
  },

  cardLabel: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
    fontWeight: '500',
  },
  // --- Login/Auth Styles ---
  centerAll: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: Colors.background,
  },
  loginTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: -1,
  },
  loginSubtitle: {
    fontSize: 15,
    color: Colors.textSecondary,
    marginBottom: 32,
    textAlign: 'center',
  },
});
