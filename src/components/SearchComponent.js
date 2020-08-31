import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import {Feather}from '@expo/vector-icons';

const SearchComponents= ({term, onTermChange, onTermSubmit}) =>{
    return(
    <View style={styles.searchBar}>
        <Feather 
        name="search"
        style={styles.iconStyle}
        />
       <TextInput
       autoCapitalize="none"
       autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={newTerm=> onTermChange(newTerm)}
        onEndEditing={()=>onTermSubmit() }
      />
    </View>
    );
};

const styles= StyleSheet.create({
    searchBar:{
        flexDirection:"row",
        backgroundColor: '#F0EEEE',
        height:50,
        marginHorizontal:15,
        marginTop:10
    },
    iconStyle:{
        fontSize: 35,
        alignSelf:'center',
        marginHorizontal:15,
    },
    inputStyle:{
         flex:1,
         fontSize:20
     }    
});
export default SearchComponents;