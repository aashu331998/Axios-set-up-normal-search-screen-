import React from 'react';
import{createAppContainer} from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen';
//import React from 'react';

const navigator = createStackNavigator({
  Search: SearchScreen, 
  },
  { initialRouteName: 'Search',
      defaultNavigationOptions: {
          title:'searchscreen'
      }
  });
  
  export default createAppContainer(navigator);