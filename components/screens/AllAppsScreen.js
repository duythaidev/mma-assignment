import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
} from "react-native";

import { useState } from "react";
import { getIconSource } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";

const Icon = ({ name, size = 24 }) => {
  const iconMap = {
    search: require("../../assets/icons/ic_search.svg"),
    grid: require("../../assets/icons/ic_common_gridview.svg"),
    category: require("../../assets/icons/ic_common_listview.svg"),
  };

  return (
    <Image
      source={iconMap[name]}
      style={{ width: size, height: size }}
      contentFit="contain"
    />
  );
};

const AppItem = ({
  iconName,
  title,
  description,
  onPress,
  style,
  isGridView,
}) => {
  const iconSource = getIconSource(iconName);

  if (isGridView) {
    return (
      <TouchableOpacity style={[styles.gridAppItem, style]} onPress={onPress}>
        <View style={styles.gridIconContainer}>
          <Image
            source={iconSource}
            style={styles.gridIcon}
            contentFit="contain"
          />
        </View>
        <Text style={styles.gridAppTitle} numberOfLines={2}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={[styles.appItem, style]} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image source={iconSource} style={styles.icon} contentFit="contain" />
      </View>
      <View style={styles.appContent}>
        <Text style={styles.appTitle}>{title}</Text>
        {description ? (
          <Text style={styles.appDescription}>{description}</Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default function AllAppsScreen() {
  const [isGridView, setIsGridView] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const workApps = [
    {
      id: 1,
      iconName: "approve",
      title: "Approve Now",
      description:
        "Notify managers of pending requests and allow managers to approve/reject requests from internal tools",
    },
    {
      id: 2,
      iconName: "reward",
      title: "Reward",
      description:
        "Send colleagues a thank you note or reward Gold for exceptional contribution",
    },
    {
      id: 3,
      iconName: "discipline",
      title: "Discipline",
      description:
        "Send a discipline warning to subordinates for violation of codes of conduct",
    },
    {
      id: 4,
      iconName: "learning",
      title: "Learning",
      description:
        "View a list of mandatory, registered and suggested learning courses; check-in and send feedback for each course",
    },
    {
      id: 5,
      iconName: "tasks",
      title: "My Tasks",
      description: "",
    },
  ];

  const utilityApps = [
    {
      id: 6,
      iconName: "fptCare",
      title: "FPT Care",
      description: "FPT Care",
    },
    {
      id: 7,
      iconName: "events",
      title: "Events",
      description:
        "Register, check-in, check-out, send feedback to company events and programs",
    },
    {
      id: 8,
      iconName: "survey",
      title: "Survey",
      description:
        "Conduct and collect responses for company-wide or department-wide surveys",
    },
    {
      id: 9,
      iconName: "dating",
      title: "FPT Dating",
      description: "Dating feature.",
    },
    {
      id: 10,
      iconName: "payslip",
      title: "Payslip",
      description: "View your monthly payslip",
    },
    {
      id: 11,
      iconName: "birthday",
      title: "Birthday",
      description:
        "Your birthday is a special moment. We're very happy to send the best wishes for you. \nColleagues can send you birthday wishes on myFPT.",
    },
  ];

  const newsApps = [
    {
      id: 12,
      iconName: "news",
      title: "News",
      description:
        "A collection of latest news and notable events around the company",
    },
    {
      id: 13,
      iconName: "starAve",
      title: "Star Ave",
      description:
        "Recognise notable achievements within a business unit or within FPT",
    },
  ];

  const wikiApps = [
    {
      id: 14,
      iconName: "employeeinfo",
      title: "Employee Info",
      description:
        "Basic, non-confidential employee information (name, gender, department, etc.)",
    },
  ];

  const gameApps = [
    {
      id: 15,
      iconName: "game",
      title: "Game",
      description: "Community-engaging games with Gold as rewards",
    },
  ];

  // Filter apps based on search query
  const filterApps = (apps) => {
    if (!searchQuery.trim()) return apps;
    return apps.filter((app) =>
      app.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  };

  const filteredWorkApps = filterApps(workApps);
  const filteredUtilityApps = filterApps(utilityApps);
  const filteredNewsApps = filterApps(newsApps);
  const filteredWikiApps = filterApps(wikiApps);
  const filteredGameApps = filterApps(gameApps);

  const renderGridSection = (apps, sectionTitle) => {
    if (apps.length === 0) return null;

    return (
      <View style={styles.gridSection}>
        <Text style={styles.sectionTitle}>{sectionTitle}</Text>
        <View style={styles.gridContainer}>
          {apps.map((app) => (
            <AppItem
              key={app.id}
              iconName={app.iconName}
              title={app.title}
              description={app.description}
              isGridView={true}
            />
          ))}
        </View>
      </View>
    );
  };

  const renderListSection = (apps, sectionTitle) => {
    if (apps.length === 0) return null;

    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{sectionTitle}</Text>
        {apps.map((app, index) => (
          <AppItem
            key={app.id}
            style={index === 0 ? { borderTopWidth: 0 } : {}}
            iconName={app.iconName}
            title={app.title}
            description={app.description}
            isGridView={false}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} />
          <TextInput
            style={styles.searchInput}
            placeholder="Type feature's name"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity
          style={styles.gridButton}
          onPress={() => setIsGridView(!isGridView)}
        >
          <Icon name={isGridView ? "category" : "grid"} size={22} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.mainTitle}>All Apps</Text>

        {isGridView ? (
          <>
            {renderGridSection(filteredWorkApps, "WORK")}
            {renderGridSection(filteredUtilityApps, "UTILITIES")}
            {renderGridSection(filteredNewsApps, "NEWS")}
            {renderGridSection(filteredWikiApps, "WIKI")}
            {renderGridSection(filteredGameApps, "GAME")}
          </>
        ) : (
          <>
            {renderListSection(filteredWorkApps, "WORK")}
            {renderListSection(filteredUtilityApps, "UTILITIES")}
            {renderListSection(filteredNewsApps, "NEWS")}
            {renderListSection(filteredWikiApps, "WIKI")}
            {renderListSection(filteredGameApps, "GAME")}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8E6E9",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    height: 30,
    padding: 0,
    color: "#333",
  },
  gridButton: {},
  scrollView: {
    flex: 1,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  section: {
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#555",
    paddingHorizontal: 16,
    paddingVertical: 6,
    paddingBottom: 2,
    backgroundColor: "#f5f5f5",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  appItem: {
    marginHorizontal: 10,
    flexDirection: "row",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#e8e8e8",
    backgroundColor: "#fff",
  },
  iconContainer: {
    marginRight: 12,
    alignItems: "center",
  },
  icon: {
    width: 48,
    height: 48,
  },
  appContent: {
    flex: 1,
  },
  appTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 4,
  },
  appDescription: {
    fontSize: 11,
    color: "#666",
    lineHeight: 20,
  },
  // Grid view styles
  gridSection: {
    backgroundColor: "#fff",
    marginBottom: 0,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 16,
  },
  gridAppItem: {
    width: "25%",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  gridIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#E8F0FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  gridIcon: {
    width: "100%",
    height: "100%",
  },
  gridAppTitle: {
    fontSize: 12,
    color: "#333",
    textAlign: "center",
    fontWeight: "500",
  },
});
