import React, { useRef, ReactNode } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Drawer from 'react-native-drawer';
import {
  LayoutDashboard,
  CalendarCheck,
  BookOpen,
  UserCircle,
  Menu,
  Bell,
} from 'lucide-react-native';
import { GlobalStyles, Colors } from '../../assets/styles';

interface SidebarProps {
  children: ReactNode;
  onNavigate: (id: string) => void;
  activeScreen: string;
}

const Sidebar = ({ children, onNavigate, activeScreen }: SidebarProps) => {
  const drawerRef = useRef<any>(null);

  const menuItems = [
    { id: 'Dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'Attendance', icon: CalendarCheck, label: 'Attendance' },
    { id: 'Courses', icon: BookOpen, label: 'My Courses' },
    { id: 'Profile', icon: UserCircle, label: 'Student Profile' }
  ];

  const navigationView = (
    <SafeAreaView style={GlobalStyles.drawerContainer}>
      <View style={GlobalStyles.sidebarUserSection}>
        <View style={GlobalStyles.sidebarAvatar}>
          <Text style={GlobalStyles.sidebarAvatarText}>AA</Text>
        </View>
        <View style={GlobalStyles.sidebarUserInfo}>
          <Text style={GlobalStyles.sidebarUserName}>Ansh Asthana</Text>
          <Text style={GlobalStyles.sidebarUserSubtitle}>BCA - 3rd Sem</Text>
        </View>
      </View>

      <ScrollView style={GlobalStyles.sidebarMenuList}>
        <Text style={GlobalStyles.sidebarSectionHeader}>MAIN NAVIGATION</Text>

        {menuItems.map(item => {
          const isActive = activeScreen === item.id;
          const Icon = item.icon;

          return (
            <TouchableOpacity
              key={item.id}
              style={[
                GlobalStyles.sidebarMenuItem,
                isActive && GlobalStyles.sidebarActiveItem,
              ]}
              onPress={() => {
                onNavigate(item.id);
                drawerRef.current?.close();
              }}
            >
              <Icon
                size={22}
                color={isActive ? Colors.primary : Colors.textSecondary}
              />
              <Text
                style={[
                  GlobalStyles.sidebarMenuText,
                  isActive && GlobalStyles.sidebarActiveMenuText,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );

  return (
    <Drawer
      ref={drawerRef}
      content={navigationView}
      type="overlay"
      tapToClose={true}
      openDrawerOffset={0.2}
      styles={{ drawer: { backgroundColor: '#FFF' } }}
    >
      <View style={GlobalStyles.flex1}>
        <SafeAreaView style={GlobalStyles.sidebarTopNav}>
          <TouchableOpacity
            onPress={() => drawerRef.current?.open()}
            style={GlobalStyles.hamburgerContainer}
            activeOpacity={0.7}
          >
            <Menu color={Colors.primary} size={24} />
          </TouchableOpacity>

          <View>
            <Text style={GlobalStyles.headerTitle}>{activeScreen}</Text>
          </View>

          <TouchableOpacity style={GlobalStyles.hamburgerContainer}>
          </TouchableOpacity>
        </SafeAreaView>

        <View style={GlobalStyles.flex1}>{children}</View>
      </View>
    </Drawer>
  );
};

export default Sidebar;
