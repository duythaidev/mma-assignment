import { Image } from 'expo-image';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const menuItems = [
    {
      id: 1,
      icon: require('../../assets/icons/icon_my_profile_new.svg'),
      label: 'My Profile',
      color: '#2196F3',
    },
    {
      id: 2,
      icon: require('../../assets/icons/ic_update_app_profile.svg'),
      label: 'Settings',
      color: '#2196F3',
    },
    {
      id: 3,
      icon: require('../../assets/icons/icon_support_my_profile.svg'),
      label: 'Support',
      color: '#2196F3',
    },
    {
      id: 4,
      icon: require('../../assets/icons/icon_faq_my_profile.svg'),
      label: 'FAQ',
      color: '#2196F3',
    },
    {
      id: 5,
      icon: require('../../assets/icons/icon_profile_admin.svg'),
      label: 'Admin',
      color: '#2196F3',
    },
  ];

  return (
    <SafeAreaView style={styles.profileContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal: 10,
          }}>
          <Image
            source={require('../../assets/icons/prf/bg-prf.png')}
            style={styles.headerImage}
          />
        </View>

        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>K</Text>
          </View>
          <TouchableOpacity style={styles.cameraButton}>
            <Image
              source={require('../../assets/icons/ic_upload_camera_avatar_onboarding.svg')}
              style={styles.cameraIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.userName}>Pham Quang Khang (KHANGPQ3)</Text>
          <Text style={styles.userRole}>(BM SE)</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              activeOpacity={0.7}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIconContainer}>
                  <Image source={item.icon} style={styles.menuIcon} />
                </View>
                <Text style={styles.menuItemText}>{item.label}</Text>
              </View>
              <Image
                source={require('../../assets/icons/ic_common_arrow_right.svg')}
                style={styles.chevronIcon}
              />
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            style={{
              ...styles.menuItem,
              borderBottomColor: '#fff',
            }}
            activeOpacity={0.7}>
            <View style={styles.menuItemLeft}>
              <View style={styles.menuIconContainer}>
                <Image
                  source={require('../../assets/icons/icon_logout_new.svg')}
                  style={styles.menuIcon}
                />
              </View>
              <Text style={styles.menuItemText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>myFPT Version 5.9.10</Text>
          <Text style={styles.footerText}>Copyright @ FPT Software 2021</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage: {
    position: 'relative',
    marginTop: 30,
    height: 100,
    borderRadius: 10,
    width: '100%',
  },
  avatarContainer: {
    position: 'absolute',
    top: 100 + 35 - 50,
    left: '50%',
    marginLeft: -40,
    zIndex: 10,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: '#E3F2FD',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  avatarText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  cameraButton: {
    position: 'absolute',
    right: -3,
    bottom: -3,
    width: 28,
    height: 28,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraIcon: {
    width: 28,
    height: 28,
  },
  userInfo: {
    alignItems: 'center',
    marginTop: 62,
    marginBottom: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
  },
  userRole: {
    fontSize: 14,
    color: '#757575',
    marginTop: 4,
  },
  menuContainer: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    marginHorizontal: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  menuIcon: {
    width: 20,
    height: 20,
  },
  menuItemText: {
    fontSize: 16,
    color: '#212121',
    fontWeight: '500',
  },
  chevronIcon: {
    width: 15,
    height: 15,
  },
  footer: {
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 20,
    paddingBottom: 40,
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    marginVertical: 2,
  },
});
