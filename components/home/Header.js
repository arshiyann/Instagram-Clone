import React from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'


const Header = () => {
  return (
    <View style={styles.container}> 
    <TouchableOpacity>
    <Image 
      style={styles.logo1} 
      source={require('../../assets/instagram-colored.jpg')} 
    />
    </TouchableOpacity>
        <TouchableOpacity >
            
      <Image 
      style={styles.instagram} 
      source={require('../../assets/insta-logo.png')} 
      />
      
       </TouchableOpacity> 
       
<View style={ styles.iconsConatiner}></View>
<TouchableOpacity>
    <Image
     source={require('../../assets/friend.png')} 
    style={styles.icon}
    />
    </TouchableOpacity> 
<TouchableOpacity>
    <Image
     source={require('../../assets/Like.png')} 
    style={styles.icon}
    />
    </TouchableOpacity> 
<TouchableOpacity>
   <View style={styles.unreadBadge}>
    <Text style={styles.unreadBadgeText}>90</Text>
   </View>
    <Image
     source={require('../../assets/massege2.png')} 
    style={styles.icon}
    />
    </TouchableOpacity> 
       
</View>
  )
}
const styles = StyleSheet.create({
    container:{
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',
      marginHorizontal:20,
    },
    iconsContainer:{
        width:40,
        height:10,
        resizeMode:'contain',
        flexDirection:'row',

    },
    instagram: {
        top:10,
        width:100,
        height:50,
        resizeMode:'contain',
    },
    logo1: {
        top:10,
        width:30,
        height:30,
        resizeMode:'contain',
    },
    icon:{
        top:10,
        width:27,
        height:30,
        marginLeft:-30,
        resizeMode:'contain'
    },
     unreadBadge:{
              backgroundColor:'#FF3250',
              position: 'absolute',
              left:-19,
              bottom:6,
             width:24,
             height:18,
             borderRadius:25,
             alignItems:'center',
             justifyContent:'center',
             zIndex: 100, 
     },
     unreadBadgeText:{
              color:'white',
              fontWeight:'600',
     },
})

export default Header