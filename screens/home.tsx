import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn/dist';

const Home = () => {
  const style = useTailwind();

  return (
    <SafeAreaView>
      <Text>Teste vini</Text>
    </SafeAreaView>
  );
};

export default Home;
