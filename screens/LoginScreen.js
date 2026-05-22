import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/waypoint-bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Dark Overlay */}
      <View style={styles.overlay} />

      <SafeAreaView style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>WAYPOINT</Text>

          <Text style={styles.tagline}>
            INVESTING GUIDED BY INTELLIGENCE.
          </Text>
        </View>

        {/* Login Form */}
        <View style={styles.form}>

          {/* Apple Login */}
          <TouchableOpacity style={styles.oauthButton}>
            <Ionicons
              name="logo-apple"
              size={22}
              color="white"
            />

            <Text style={styles.oauthText}>
              Continue with Apple
            </Text>
          </TouchableOpacity>

          {/* Google Login */}
          <TouchableOpacity style={styles.oauthButton}>
            <Ionicons
              name="logo-google"
              size={20}
              color="white"
            />

            <Text style={styles.oauthText}>
              Continue with Google
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />

            <Text style={styles.dividerText}>
              or continue with email
            </Text>

            <View style={styles.dividerLine} />
          </View>

          {/* Email */}
          <TextInput
            placeholder="Email"
            placeholderTextColor="#7E8BA3"
            style={styles.input}
          />

          {/* Password */}
          <TextInput
            placeholder="Password"
            placeholderTextColor="#7E8BA3"
            secureTextEntry
            style={styles.input}
          />

          {/* Sign In */}
          <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('MainTabs')}
>
            <Text style={styles.buttonText}>
              SIGN IN
            </Text>
          </TouchableOpacity>

          {/* Forgot Password */}
          <TouchableOpacity>
            <Text style={styles.forgot}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

        </View>

        {/* Footer */}
        <TouchableOpacity>
          <Text style={styles.createAccount}>
            CREATE ACCOUNT →
          </Text>
        </TouchableOpacity>

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingTop: 120,
    paddingBottom: 50,
  },

  header: {
    alignItems: 'center',
  },

  logo: {
    color: 'white',
    fontSize: 52,
    fontWeight: '300',
    letterSpacing: 12,
  },

  tagline: {
    color: '#B3BED1',
    marginTop: 18,
    fontSize: 13,
    letterSpacing: 2,
  },

  form: {
    width: '100%',
  },

  oauthButton: {
    backgroundColor: 'rgba(8,12,20,0.55)',
    borderColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },

  oauthText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 28,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },

  dividerText: {
    color: '#7E8BA3',
    marginHorizontal: 12,
    fontSize: 13,
  },

  input: {
    backgroundColor: 'rgba(8,12,20,0.55)',
    borderColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderRadius: 18,
    paddingVertical: 22,
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 17,
    marginBottom: 18,
  },

  button: {
    backgroundColor: '#2E5BFF',
    borderRadius: 18,
    paddingVertical: 22,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 4,
  },

  forgot: {
    color: '#9BA7BE',
    textAlign: 'center',
    marginTop: 24,
    fontSize: 15,
  },

  createAccount: {
    color: '#9CB2E3',
    textAlign: 'center',
    fontSize: 16,
    letterSpacing: 3,
  },
});