import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';

import { Welcome } from './src/pages/Welcome';
import { UserIdentification } from './src/pages/UserIdentification';
import Routes from './src/routes';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import { PlantProps } from './src/libs/storage';

export default function App() {

  const [fonstLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect( () => {

    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      });

      return () => subscription.remove();

      /*async function notifications() {
        const data = await Notifications.getAllScheduledNotificationsAsync();

        console.log('######## NOTIFICAÇÕES AGENDADAS ##########');
        console.log(data);
      }*/

  });

  if(!fonstLoaded) { //Se a fonte não foi carregada
    return <AppLoading/>
  }

  return (
    <Routes/>
  );
}

//Start server
//json-server .\src\services\server.json --host 10.0.0.2 --port 3333 --deley 700