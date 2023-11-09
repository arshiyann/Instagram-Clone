import { View, Text, StyleSheet, Image } from 'react-native'
import React, {useState} from 'react'

import { Divider } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: require('../../assets/Home.png'),
        inactive: require('../../assets/Home.png'),
    },
    {
        name: 'Search',
        active: require('../../assets/search.png'),
        inactive: require('../../assets/search.png'),
    },
    {
        name: 'Plus',
        active: require('../../assets/plus.png'),
        inactive: require('../../assets/plus.png'),
    },
    {      

        name: 'Reels',
        active: require('../../assets/reel.png'),
        inactive: require('../../assets/reel.png'),
    },
    {
        name: 'user',
        active: require('../../userphoto/user1.jpg'),
        inactive: require('../../userphoto/user1.jpg'),
    },

]
const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab]= useState('Home')

    const Icon = ({icon})=>(
        
        <TouchableOpacity onPress={()=> setActiveTab(icon.name)}>
            
        <Image 
        source = {activeTab == icon.name ? icon.active: icon.inactive} 
        style= {[
            styles.icon, 
            icon.name == 'Profile' ? styles.profilePic() : null,
            activeTab == 'Profile' && icon.name == activeTab 
            ? styles.profilePic(activeTab)
            : null,
        ]}
        />

        </TouchableOpacity>
    )
  return (
    <View style = {styles.wrapper}>
        <Divider width = {1} orientation='vertical'/>
    <View style={styles.container}>
        {icons.map((icon,index)=>(

    <Icon key={index} icon={icon}/>

    ))}   

    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
  position:'absolute',
     width:'100%',
     bottom:'0%',
     zIndex: 999,
     backgroundColor:'white',

    },
    
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        margin:2,
        height:50,
        paddingTop:2,
    },
    
    icon: {
        width:30,
        height:30,
       margin:10,
       
    },

profilePic: (activeTab='')=>({
borderRadius:50,
borderWidth: activeTab == 'Profile' ? 2 : 0,
borderColor:'black',

}),

})
export default BottomTabs