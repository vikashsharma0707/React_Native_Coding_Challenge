import React from 'react';
import { SectionList, Text, View } from 'react-native';

const SectionListData = () => {
  const Data = [
    {
      title: "Fruits",
      data: ["Apple", "Banana"]
    },
    {
      title: "Vegetables",
      data: ["Carrot", "Broccoli"]
    }
  ];

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item}</Text>
      </View>
    );
  };

  const renderSectionHeader = ({ section }) => {
    return (
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{section.title}</Text>
      </View>
    );
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>SectionList</Text>

      <SectionList
        sections={Data}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default SectionListData;
