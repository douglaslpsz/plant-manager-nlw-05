import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSave } from '../pages/PlantSave';

import colors from '../styles/colors';
import AuthRoutes from './tab.routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const stackRoutes = createStackNavigator();

export default function AppRoutes() {

  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    async function loadUserName() {

      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(user || '');
    }

    loadUserName();
  }, [userName]);

  return (
    
    <stackRoutes.Navigator 
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white//Cor de fundo padrão
        }
      }}
    >

      {
        userName == '' ? (
        <>
          <stackRoutes.Screen 
            name="Welcome"
            component={Welcome}            
          />

          <stackRoutes.Screen 
            name="UserIdentification"
            component={UserIdentification}
          />

          <stackRoutes.Screen 
            name="Confirmation"
            component={Confirmation}
          />
        </>
        ) : (<></>)
      }
            
      <stackRoutes.Screen 
        name="PlantSelect"
        component={AuthRoutes}
      />

      <stackRoutes.Screen 
        name="PlantSave"
        component={PlantSave}
      />

      <stackRoutes.Screen 
        name="MyPlants"
        component={AuthRoutes}
      />

      {
        userName != '' ? (
        <>
          <stackRoutes.Screen 
            name="Confirmation"
            component={Confirmation}
          />
        </>
        ) : (<></>)
      }
      
    </stackRoutes.Navigator>
  );

}


/* VERSÃO DESENVOLVIDA NO CURSO*/
/*
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSave } from '../pages/PlantSave';
import { MyPlants } from '../pages/MyPlants';

import colors from '../styles/colors';
import AuthRoutes from './tab.routes';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator 
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white//Cor de fundo padrão
      }
    }}
  >
    <stackRoutes.Screen 
      name="Welcome"
      component={Welcome}
    />

    <stackRoutes.Screen 
      name="UserIdentification"
      component={UserIdentification}
    />

    <stackRoutes.Screen 
      name="Confirmation"
      component={Confirmation}
    />

    <stackRoutes.Screen 
      name="PlantSelect"
      component={AuthRoutes}
    />

    <stackRoutes.Screen 
      name="PlantSave"
      component={PlantSave}
    />

  <stackRoutes.Screen 
      name="MyPlants"
      component={AuthRoutes}
    />
    
  </stackRoutes.Navigator>
)

export default AppRoutes;
*/