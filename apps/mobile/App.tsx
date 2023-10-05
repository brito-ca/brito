import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, Logo, Footer } from './components';
import { button } from '@brito/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.header}>
        <Logo size='md' />
      </View>
      <ScrollView>
        <View style={styles.content}>
          <Text>Test</Text>
          <Card />
          <Card />
          <Card />
          <Footer />
        </View>
      </ScrollView>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  content: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 32,
    paddingHorizontal: 24,
  },
});
