import { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export const Card: FC = (): JSX.Element => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=815&q=80 815w',
          }}
          style={{ width: '100%', height: 200, resizeMode: 'cover' }}
        />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardHeaderText}>Card Title</Text>
        <Text>
          Officia ea sunt pariatur ut nisi. Consectetur consequat irure deserunt
          irure exercitation quis consectetur. Ullamco veniam in cillum ipsum ex
          Lorem tempor mollit officia excepteur amet quis.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    borderStyle: 'solid',
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 10,
  },
  cardHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardBody: {
    gap: 8,
    padding: 16,
  },
});
