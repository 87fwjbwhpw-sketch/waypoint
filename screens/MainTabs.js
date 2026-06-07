import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {
  useEffect,
  useState,
} from 'react';

import { Ionicons } from '@expo/vector-icons';

import { FINNHUB_API_KEY } from '../config.js';

const Tab = createBottomTabNavigator();

function HomeScreen() {

  const [stocks, setStocks] = useState([]);

  useEffect(() => {

    async function fetchStocks() {

      const tickers = [
        'AAPL',
        'NVDA',
        'TSLA',
        'AMZN',
        'META',
      ];

      try {

        const stockData = await Promise.all(

          tickers.map(async (ticker) => {

            const response = await fetch(
              `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${FINNHUB_API_KEY}`
            );

            const data = await response.json();

            return {
              symbol: ticker,
              price: data.c,
              change: data.dp,
            };

          })

        );

        setStocks(stockData);

      } catch (error) {
        console.log(error);
      }

    }

    fetchStocks();

  }, []);

  return (
    <ScrollView style={styles.homeContainer}>

      {/* Header */}
      <View style={styles.headerContainer}>

        <Text style={styles.welcome}>
          Welcome Back, Kyle
        </Text>

        <Text style={styles.portfolioValue}>
          $124,892.14
        </Text>

        <Text style={styles.dailyChange}>
          +2.14% Today
        </Text>

      </View>

      {/* Live Watchlist */}
      <View style={styles.liveCard}>

        <Text style={styles.sectionTitle}>
          Live Watchlist
        </Text>

        {stocks.map((stock, index) => (

          <View
            key={index}
            style={styles.stockRow}
          >

            <View>

              <Text style={styles.liveTicker}>
                {stock.symbol}
              </Text>

              <Text style={styles.livePrice}>
                ${stock.price}
              </Text>

            </View>

            <Text
              style={[
                styles.liveChange,
                {
                  color:
                    stock.change >= 0
                      ? '#22C55E'
                      : '#EF4444',
                },
              ]}
            >
              {stock.change}%
            </Text>

          </View>

        ))}

      </View>

      {/* AI Insight Card */}
      <View style={styles.insightCard}>

       <Text style={styles.insightLabel}>
  WAYPOINT INSIGHT
</Text>

<View style={styles.confidenceContainer}>
  <View style={styles.confidenceBar}>
    <View
      style={[
        styles.confidenceFill,
        { width: '82%' }
      ]}
    />
  </View>

  <Text style={styles.confidenceText}>
    Confidence: 82% • HIGH
  </Text>
</View>

<Text style={styles.insightText}>
  Semiconductor momentum remains elevated as institutional inflows continue accelerating across major AI equities.
</Text>

      </View>

    </ScrollView>
  );
}
function generateInsight(headline) {

  const text = headline.toLowerCase();

  if (
    text.includes('ai') ||
    text.includes('nvidia') ||
    text.includes('semiconductor')
  ) {
    return 'AI infrastructure demand continues supporting semiconductor and data-center related equities.';
  }

  if (
    text.includes('oil') ||
    text.includes('energy')
  ) {
    return 'Energy markets may experience increased volatility as supply and demand expectations shift.';
  }

  if (
    text.includes('fed') ||
    text.includes('inflation') ||
    text.includes('rates')
  ) {
    return 'Interest rate expectations may impact equity valuations and broader market sentiment.';
  }

  if (
    text.includes('tesla') ||
    text.includes('ev')
  ) {
    return 'Electric vehicle equities may experience elevated volatility as growth expectations change.';
  }

  return 'Market participants may adjust positioning as new information becomes available.';
}
function getConfidence(headline) {

  const text = headline.toLowerCase();

  if (
    text.includes('ai') ||
    text.includes('nvidia') ||
    text.includes('semiconductor')
  ) {
    return {
      score: 85,
      label: 'HIGH',
    };
  }

  if (
    text.includes('fed') ||
    text.includes('inflation') ||
    text.includes('rates')
  ) {
    return {
      score: 72,
      label: 'MODERATE',
    };
  }

  if (
    text.includes('oil') ||
    text.includes('energy')
  ) {
    return {
      score: 68,
      label: 'MODERATE',
    };
  }

  return {
    score: 58,
    label: 'LOW',
  };
}
function FeedScreen() {

  const [news, setNews] = useState([]);

  useEffect(() => {

    async function fetchNews() {

      try {

        const response = await fetch(
          `https://finnhub.io/api/v1/news?category=general&token=${FINNHUB_API_KEY}`
        );

        const data = await response.json();

        setNews(data.slice(0, 5));

      } catch (error) {
        console.log(error);
      }

    }

    fetchNews();

  }, []);

  return (

    <ScrollView style={styles.feedContainer}>

      <Text style={styles.feedTitle}>
        Market Intelligence
      </Text>

      {news.map((article, index) => {

        const confidence = getConfidence(article.headline);
        console.log(article.headline, confidence);

        return (

          <View
            key={index}
            style={styles.feedCard}
          >

            <Text style={styles.feedLabel}>
              LIVE MARKET NEWS
            </Text>

            <Text style={styles.feedHeadline}>
              {article.headline}
            </Text>

            <Text style={styles.feedSource}>
              Source: {article.source}
            </Text>

            <Text style={styles.feedBody}>
              {article.summary}
            </Text>

            <Text style={styles.feedLabel}>
              WHY IT MATTERS
            </Text>

            <Text style={styles.feedBody}>
              {generateInsight(article.headline)}
            </Text>

            <View style={styles.confidenceContainer}>
              <View style={styles.confidenceBar}>
                <View
                  style={[
                    styles.confidenceFill,
                    { width: `${confidence.score}%` }
                  ]}
                />
              </View>

              <Text style={styles.confidenceText}>
                Confidence: {confidence.score}% • {confidence.label}
              </Text>
            </View>

          </View>

        );

      })}

    </ScrollView>

  );
}

function PortfolioScreen() {

  const portfolio = [
    {
      symbol: 'AAPL',
      shares: 42,
      value: '$9,842',
      change: '+3.2%',
      positive: true,
    },
    {
      symbol: 'NVDA',
      shares: 18,
      value: '$14,220',
      change: '+7.8%',
      positive: true,
    },
    {
      symbol: 'TSLA',
      shares: 12,
      value: '$2,984',
      change: '-2.1%',
      positive: false,
    },
    {
      symbol: 'AMZN',
      shares: 9,
      value: '$3,118',
      change: '+1.4%',
      positive: true,
    },
  ];

  return (

    <ScrollView style={styles.portfolioContainer}>

      <View style={styles.portfolioHeader}>

        <Text style={styles.portfolioLabel}>
          TOTAL PORTFOLIO
        </Text>

        <Text style={styles.portfolioTotal}>
          $248,492
        </Text>

        <Text style={styles.portfolioGain}>
          +3.82% This Month
        </Text>

      </View>

      <View style={styles.portfolioCard}>

        <Text style={styles.sectionTitle}>
          Holdings
        </Text>

        {portfolio.map((stock, index) => (

          <View
            key={index}
            style={styles.stockRow}
          >

            <View>

              <Text style={styles.liveTicker}>
                {stock.symbol}
              </Text>

              <Text style={styles.holdingShares}>
                {stock.shares} Shares
              </Text>

            </View>

            <View style={{ alignItems: 'flex-end' }}>

              <Text style={styles.holdingValue}>
                {stock.value}
              </Text>

              <Text
                style={[
                  styles.liveChange,
                  {
                    color:
                      stock.positive
                        ? '#22C55E'
                        : '#EF4444',
                  },
                ]}
              >
                {stock.change}
              </Text>

            </View>

          </View>

        ))}

      </View>

      <View style={styles.insightCard}>

        <Text style={styles.insightLabel}>
          PORTFOLIO ANALYSIS
        </Text>

        <Text style={styles.insightText}>
          Technology exposure remains elevated, with semiconductor equities driving the majority of portfolio growth this quarter.
        </Text>

      </View>

    </ScrollView>

  );
}
function DiscoverScreen() {

  const trendingStocks = [
    'NVDA',
    'AMD',
    'AAPL',
    'META',
    'TSLA',
  ];

  const themes = [
    'Artificial Intelligence',
    'Cybersecurity',
    'Robotics',
    'Cloud Infrastructure',
    'Energy',
    'Biotech',
  ];

  return (

    <ScrollView style={styles.discoverContainer}>

      <Text style={styles.discoverTitle}>
        Discover
      </Text>

      {/* Trending Stocks */}
      <View style={styles.discoverCard}>

        <Text style={styles.sectionTitle}>
          Trending Stocks
        </Text>

        {trendingStocks.map((stock, index) => (
          <Text
            key={index}
            style={styles.discoverItem}
          >
            {stock}
          </Text>
        ))}

      </View>

      {/* Emerging Themes */}
      <View style={styles.discoverCard}>

        <Text style={styles.sectionTitle}>
          Emerging Themes
        </Text>

        {themes.map((theme, index) => (
          <Text
            key={index}
            style={styles.discoverItem}
          >
            {theme}
          </Text>
        ))}

      </View>

      {/* Waypoint Opportunity */}
      <View style={styles.insightCard}>

        <Text style={styles.insightLabel}>
          WAYPOINT OPPORTUNITY
        </Text>

        <Text style={styles.insightText}>
          AI infrastructure demand continues supporting semiconductor and cloud-computing equities as enterprise adoption accelerates.
        </Text>

      </View>

    </ScrollView>

  );
}

function ProfileScreen() {

  return (

    <ScrollView style={styles.profileContainer}>

      <Text style={styles.profileTitle}>
        Profile
      </Text>

      <View style={styles.profileCard}>
        <Text style={styles.profileLabel}>ACCOUNT</Text>
        <Text style={styles.profileItem}>Kyle</Text>
      </View>

      <View style={styles.profileCard}>
        <Text style={styles.profileLabel}>WATCHLISTS</Text>
        <Text style={styles.profileItem}>Technology</Text>
        <Text style={styles.profileItem}>Artificial Intelligence</Text>
        <Text style={styles.profileItem}>Semiconductors</Text>
      </View>

      <View style={styles.profileCard}>
        <Text style={styles.profileLabel}>RISK PROFILE</Text>
        <Text style={styles.profileItem}>Moderate Growth</Text>
      </View>

      <View style={styles.profileCard}>
        <Text style={styles.profileLabel}>NOTIFICATIONS</Text>
        <Text style={styles.profileItem}>Market Alerts Enabled</Text>
      </View>

      <View style={styles.insightCard}>
        <Text style={styles.insightLabel}>
          WAYPOINT PROFILE INSIGHT
        </Text>

        <Text style={styles.insightText}>
          Your interests currently align most closely with technology, AI infrastructure, and high-growth equities.
        </Text>
      </View>

    </ScrollView>

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

        tabBarActiveTintColor: '#2E5BFF',
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

  screen: {
    flex: 1,
    backgroundColor: '#050816',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
  },

  homeContainer: {
    flex: 1,
    backgroundColor: '#050816',
    paddingTop: 100,
    paddingHorizontal: 24,
  },

  headerContainer: {
    marginBottom: 30,
  },

  welcome: {
    color: '#8B9BB8',
    fontSize: 18,
  },

  portfolioValue: {
    color: 'white',
    fontSize: 42,
    fontWeight: '700',
    marginTop: 12,
  },

  dailyChange: {
    color: '#3B82F6',
    fontSize: 18,
    marginTop: 8,
  },

  liveCard: {
    backgroundColor: '#0D1320',
    borderRadius: 24,
    padding: 24,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
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
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },

  liveTicker: {
    color: '#3B82F6',
    fontSize: 18,
  },

  livePrice: {
    color: 'white',
    fontSize: 26,
    fontWeight: '700',
    marginTop: 6,
  },

  liveChange: {
    fontSize: 18,
    fontWeight: '600',
  },

  insightCard: {
    backgroundColor: '#0D1320',
    borderRadius: 24,
    padding: 24,
    marginTop: 24,
    marginBottom: 120,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },

  insightLabel: {
    color: '#3B82F6',
    fontSize: 13,
    letterSpacing: 2,
    marginBottom: 18,
  },

  insightText: {
    color: 'white',
    fontSize: 20,
    lineHeight: 32,
  },

  feedContainer: {
    flex: 1,
    backgroundColor: '#050816',
    paddingTop: 100,
    paddingHorizontal: 24,
  },

  feedTitle: {
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

  feedLabel: {
    color: '#3B82F6',
    fontSize: 13,
    letterSpacing: 2,
    marginBottom: 16,
  },

  feedHeadline: {
    color: 'white',
    fontSize: 24,
    lineHeight: 34,
    fontWeight: '600',
  },

  feedBody: {
    color: '#B8C2D6',
    fontSize: 17,
    lineHeight: 30,
    marginTop: 18,
  },

  feedSource: {
  color: '#8B9BB8',
  fontSize: 14,
  marginTop: 10,
  marginBottom: 10,
},

  portfolioContainer: {
    flex: 1,
    backgroundColor: '#050816',
    paddingTop: 100,
    paddingHorizontal: 24,
  },

  portfolioHeader: {
    marginBottom: 30,
  },

  portfolioLabel: {
    color: '#8B9BB8',
    fontSize: 14,
    letterSpacing: 2,
  },

  portfolioTotal: {
    color: 'white',
    fontSize: 48,
    fontWeight: '700',
    marginTop: 14,
  },

  portfolioGain: {
    color: '#22C55E',
    fontSize: 18,
    marginTop: 10,
  },

  portfolioCard: {
    backgroundColor: '#0D1320',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    marginBottom: 24,
  },

  holdingShares: {
    color: '#8B9BB8',
    fontSize: 15,
    marginTop: 6,
  },

holdingValue: {
  color: 'white',
  fontSize: 20,
  fontWeight: '600',
},

discoverContainer: {
  flex: 1,
  backgroundColor: '#050816',
  paddingTop: 100,
  paddingHorizontal: 24,
},

discoverTitle: {
  color: 'white',
  fontSize: 34,
  fontWeight: '700',
  marginBottom: 30,
},

discoverCard: {
  backgroundColor: '#0D1320',
  borderRadius: 24,
  padding: 24,
  marginBottom: 24,
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.05)',
},

discoverItem: {
  color: 'white',
  fontSize: 18,
  marginBottom: 14,
},
profileContainer: {
  flex: 1,
  backgroundColor: '#050816',
  paddingTop: 100,
  paddingHorizontal: 24,
},

profileTitle: {
  color: 'white',
  fontSize: 34,
  fontWeight: '700',
  marginBottom: 30,
},

profileCard: {
  backgroundColor: '#0D1320',
  borderRadius: 24,
  padding: 24,
  marginBottom: 24,
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.05)',
},

profileLabel: {
  color: '#3B82F6',
  fontSize: 13,
  letterSpacing: 2,
  marginBottom: 14,
},

profileItem: {
  color: 'white',
  fontSize: 18,
  marginBottom: 10,
},
confidenceContainer: {
  marginBottom: 20,
},

confidenceBar: {
  height: 10,
  backgroundColor: '#1E293B',
  borderRadius: 10,
  overflow: 'hidden',
  marginBottom: 10,
},

confidenceFill: {
  height: '100%',
  backgroundColor: '#3B82F6',
  borderRadius: 10,
},

confidenceText: {
  color: '#8B9BB8',
  fontSize: 14,
},

});
