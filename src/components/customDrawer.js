import React,{useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FirebaseContext} from '../firebase/index';
import firebase from "../firebase/firebase";

export default function DrawerContent({navigation}) {
    const paperTheme = useTheme();
    const { datosUsuario,usuario } = useContext(FirebaseContext);
    //const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                {usuario ? <Title style={styles.title}>{usuario.displayName}</Title>:null}
                                {usuario ? <Caption style={styles.caption}>{usuario.email}</Caption>:null}
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={() => (
                                <Icon 
                                name="home" 
                                size={20}
                                />
                            )}
                            label="Hiffel"
                            onPress={() => {navigation.navigate('Hiffel')}}
                        />
                        <DrawerItem 
                            icon={() => (
                                <Icon 
                                name="account-question-outline" 
                                size={20}
                                />
                            )}
                            label="Consultas"
                            onPress={() => {navigation.navigate('Consultas')}}
                        />
                        <DrawerItem 
                            icon={() => (
                                <Icon 
                                name="account-heart-outline" 
                                size={20}
                                />
                            )}
                            label="Nosotros"
                            onPress={() => {navigation.navigate('Nosotros')}}
                        />
                        <DrawerItem 
                            icon={() => (
                                <Icon 
                                name="desktop-mac-dashboard" 
                                size={20}
                                />
                            )}
                            label="Servicios"
                            onPress={() => {navigation.navigate('Servicios')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={() => (
                        <Icon 
                        name="exit-to-app" 
                        
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {firebase.cerrarSesion();}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });