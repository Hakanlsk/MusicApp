import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react'
import music_data from './src/music-data.json'
import { FlatList } from 'react-native';
import SongCard from './src/components/SongCard/SongCard';
import SearchBar from './src/components/SearchBar/SearchBar';

export default function App() {

  const [list, setList] = useState(music_data);

  const renderSong = ({item}) => <SongCard song={item} />

  const songSeperator = () => <View style={styles.seperator}/>

  const onSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    })
    setList(filteredList);
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={onSearch}/>
        <FlatList
        data={list}
        keyExtractor={ item => item.id}
        renderItem={renderSong}
        ItemSeparatorComponent={songSeperator}//en tepe en son hariç araya eklenen component
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  seperator: {
    borderWidth:1,
    borderColor: '#e0e0e0'
  }
});
