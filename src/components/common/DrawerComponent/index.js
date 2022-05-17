import React from 'react';
import {View} from 'react-native';
import fuctionsDrawer from './functions';
import stylesDrawer from './styles.js';
import IsLogedContext from '../../../context/IsLogedContext.js';
import ButtonDrawerComponent from './ButtonDrawerComponent';
import DrawerScroll from './DrawerScroll';

export default function DrawerComponent(props) {
  const {isLoged} = React.useContext(IsLogedContext);
  return (
    <View style={stylesDrawer.container}>
      <DrawerScroll props={props} isLoged={isLoged} />
      <View style={stylesDrawer.bottomButtons}>
        {fuctionsDrawer
          .typeList(isLoged)
          .iconsdraweraccount.map((item, index) => (
            <ButtonDrawerComponent
              key={index}
              navigation={props.navigation}
              route={fuctionsDrawer.typeList(isLoged).routes[index]}
              coloricon={fuctionsDrawer.typeList(isLoged).colorsicon[index]}
              nameicon={item}
              textButton={
                fuctionsDrawer.typeList(isLoged).textbuttonsdraweraccount[index]
              }
            />
          ))}
      </View>
    </View>
  );
}
