import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import SearchComponent from '../components/SearchComponent';
import yelp from '../api/yelp';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen=() =>{
    const[term, setTerm]= useState('');
    const[results, setResults]= useState([]);
    const searchApi= async ()=>{
      
        const response= await yelp.get('/search', {
        params: {
            limit: 50,
            term,
            location:'san jose' 
        }
       });
       setResults(response.data.businesses)
    };
    
    
    return(
<View>
    <ScrollView>
    <SearchComponent 
    term={term}
    onTermChange={newTerm=>setTerm(newTerm)}
    onTermSubmit={()=> searchApi()}
    />
    <Text>{JSON.stringify(results)}</Text> 
    </ScrollView>
</View>
) 
};
export default SearchScreen;