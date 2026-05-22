import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcome}>
          Welcome Back, Kyle
        </Text>

        <Text style={styles.balance}>
          $124,892.14
        </Text>

        <Text style={styles.change}>
          +2.14% Today
        </Text>
      </View>

      {/* Fake Performance Graph */}
      <View style={styles.graphCard}>

        <View style={styles.timeTabs}>
          <Text style={styles.activeTab}>1D</Text>
          <Text style={styles.tab}>1W</Text>
          <Text style={styles.tab}>1M</Text>
          <Text style={styles.tab}>1Y</Text>
          <Text style={styles.tab}>ALL</Text>
        </View>

        <View style={styles.graph}>
          <View style={styles.line1} />
          <View style={styles.line2} />
          <View style={styles.line3} />
          <View style={styles.line4} />
        </View>

      </View>

      {/* AI Insight */}
      <View style={styles.card}>
        <Text style={styles.cardLabel}>
          WAYPOINT INSIGHT
        </Text>

        <Text style={styles.cardText}>
          Institutional buying pressure remains elevated across AI infrastructure and semiconductor sectors.
        </Text>
      </View>

      {/* Watchlist */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Watchlist
        </Text>

        <View style={styles.stockRow}>
          <Text style={styles.stockName}>AAPL</Text>
          <Text style={styles.stockGreen}>+1.21%</Text>
        </View>

        <View style={styles.stockRow}>
          <Text style={styles.stockName}>NVDA</Text>
          <Text style={styles.stockGreen}>+4.83%</Text>
        </View>

        <View style={styles.stockRow}>
          <Text style={styles.stockName}>TSLA</Text>
          <Text style={styles.stockRed}>-0.91%</Text>
        </View>
      </View>

      {/* Market Sentiment */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Market Sentiment
        </Text>

        <Text style={styles.sentiment}>
          Bullish Momentum
        </Text>

        <Text style={styles.sentimentText}>
          Institutional accumulation continues accelerating across major growth sectors.
        </Text>
      </View>

      {/* Trending */}
      <View style={styles.cardBottom}>
        <Text style={styles.sectionTitle}>
          Trending
        </Text>

        <Text style={styles.news}>
          Apple preparing major AI ecosystem announcement
        </Text>

        <Text style={styles.news}>
          NVIDIA reaches new institutional accumulation highs
        </Text>

        <Text style={styles.news}>
          Tesla volatility increases following earnings guidance
        </Text>
      </View>

    </ScrollView>
  );
}

function FeedScreen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.feedHeader}>
        Waypoint Intelligence
      </Text>

      {/* Insight Card */}
      <View style={styles.feedCard}>
        <Text style={styles.feedTag}>
          AI MARKET SIGNAL
        </Text>

        <Text style={styles.feedTitle}>
          Semiconductor momentum accelerating
        </Text>

        <Text style={styles.feedBody}>
          Institutional capital continues rotating aggressively into AI infrastructure and chip manufacturers following increased enterprise demand projections.
        </Text>
      </View>

      {/* Earnings Alert */}
      <View style={styles.feedCard}>
        <Text style={styles.feedTag}>
          EARNINGS ALERT
        </Text>

        <Text style={styles.feedTitle}>
          Tesla volatility increasing
        </Text>

        <Text style={styles.feedBody}>
          Options activity and analyst revisions suggest elevated movement ahead of earnings guidance updates.
        </Text>
      </View>

      {/* Macro Signal */}
      <View style={styles.feedCard}>
        <Text style={styles.feedTag}>
          MACRO SIGNAL
        </Text>

        <Text style={styles.feedTitle}>
          Treasury yields stabilizing
        </Text>

        <Text style={styles.feedBody}>
          Equity markets may experience temporary relief as bond volatility slows following recent inflation data releases.
        </Text>
      </View>

      {/* Sector Rotation */}
      <View style={styles.feedCardBottom}>
        <Text style={styles.feedTag}>
          SECTOR ROTATION
        </Text>

        <Text style={styles.feedTitle}>
          Energy sector weakening
        </Text>

        <Text style={styles.feedBody}>
          Capital flow indicators show declining institutional positioning across traditional energy sectors while growth equities regain momentum.
        </Text>
      </View>

    </ScrollView>
  );
}

function PortfolioScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle}>Portfolio</Text>
    </View>
  );
}

function DiscoverScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle}>Discover</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle}>Profile</Text>
    </View>
  );
}

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          backgroundColor: '#050816',
          borderTopWidth: 0,
          height: 90,
          paddingBottom: 18,
          paddingTop: 12,
        },

        tabBarActiveTintColor: '#3B82F6',
        tabBarInactiveTintColor: '#6B7280',

        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Feed') {
            iconName = 'newspaper';
          } else if (route.name === 'Portfolio') {
            iconName = 'briefcase';
          } else if (route.name === 'Discover') {
            iconName = 'compass';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return (
            <Ionicons
              name={iconName}
              size={24}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050816',
    paddingTop: 90,
    paddingHorizontal: 24,
  },

  header: {
    marginBottom: 30,
  },

  welcome: {
    color: '#8B9BB8',
    fontSize: 18,
  },

  balance: {
    color: 'white',
    fontSize: 44,
    fontWeight: '700',
    marginTop: 10,
  },

  change: {
    color: '#3B82F6',
    fontSize: 18,
    marginTop: 8,
  },

  graphCard: {
    backgroundColor: '#0D1320',
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },

  timeTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },

  activeTab: {
    color: '#3B82F6',
    fontWeight: '700',
    fontSize: 15,
  },

  tab: {
    color: '#7E8BA3',
    fontSize: 15,
  },

  graph: {
    height: 160,
    justifyContent: 'center',
  },

  line1: {
    height: 3,
    width: '60%',
    backgroundColor: '#2563EB',
    borderRadius: 20,
    marginBottom: 18,
    transform: [{ rotate: '4deg' }],
  },

  line2: {
    height: 3,
    width: '82%',
    backgroundColor: '#3B82F6',
    borderRadius: 20,
    marginBottom: 18,
    transform: [{ rotate: '-2deg' }],
  },

  line3: {
    height: 3,
    width: '75%',
    backgroundColor: '#60A5FA',
    borderRadius: 20,
    marginBottom: 18,
    transform: [{ rotate: '3deg' }],
  },

  line4: {
    height: 3,
    width: '95%',
    backgroundColor: '#93C5FD',
    borderRadius: 20,
    transform: [{ rotate: '-4deg' }],
  },

  card: {
    backgroundColor: '#0D1320',
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },

  cardBottom: {
    backgroundColor: '#0D1320',
    borderRadius: 24,
    padding: 24,
    marginBottom: 120,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },

  cardLabel: {
    color: '#3B82F6',
    fontSize: 13,
    letterSpacing: 2,
    marginBottom: 16,
  },

  cardText: {
    color: 'white',
    fontSize: 18,
    lineHeight: 28,
  },

  sectionTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 18,
  },

  stockRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  stockName: {
    color: 'white',
    fontSize: 18,
  },

  stockGreen: {
    color: '#22C55E',
    fontSize: 18,
  },

  stockRed: {
    color: '#EF4444',
    fontSize: 18,
  },

  sentiment: {
    color: '#3B82F6',
    fontSize: 28,
    fontWeight: '700',
  },

  sentimentText: {
    color: '#B8C2D6',
    fontSize: 16,
    lineHeight: 26,
    marginTop: 14,
  },

  news: {
    color: '#D6DEED',
    fontSize: 17,
    lineHeight: 28,
    marginTop: 18,
  },

  feedHeader: {
    color: 'white',
    fontSize: 34,
    fontWeight: '700',
    marginBottom: 30,
  },

  feedCard: {
    backgroundColor: '#0D1320',
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },

  feedCardBottom: {
    backgroundColor: '#0D1320',
    borderRadius: 24,
    padding: 24,
    marginBottom: 120,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },

  feedTag: {
    color: '#3B82F6',
    fontSize: 12,
    letterSpacing: 2,
    marginBottom: 14,
  },

  feedTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 14,
  },

  feedBody: {
    color: '#C7D0E0',
    fontSize: 16,
    lineHeight: 28,
  },

  screen: {
    flex: 1,
    backgroundColor: '#050816',
    justifyContent: 'center',
    alignItems: 'center',
  },

  screenTitle: {
    color: 'white',
    fontSize: 32,
    fontWeight: '600',
  },
});