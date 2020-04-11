import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Calendrier from '../Component/Calendrier.js';
import Boutique from '../Component/Boutique.js';


const DrawerNavigator = createDrawerNavigator({
    Calendrier: {
        screen: Calendrier,
        navigationOptions: {
            title: "Calendrier"
        }
    },

    Boutique: {
        screen: Calendrier,
        navigationOptions: {
            title: "Boutique"
        }
    }

},

    {
        drawerPosition: 'right',
        drawerType: 'slide',
        drawerBackgroundColor: '#232531',
        drawerWidth: 170,
        contentOptions:{
            activeTintColor: '#c70039',
            inactiveTintColor: '#fff',
            activeBackgroundColor :'#4B4C56',
        }
    }
);

export default createAppContainer(DrawerNavigator);