import React from 'react'
import { View,Text,StyleSheet} from 'react-native'
//import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'

import { ScrollView } from 'react-native'
import { POSTS } from '../data/posts'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'

import { SafeAreaView } from 'react-native'


const HomeScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <Header />
      <Stories/>
      <ScrollView> 
        {POSTS.map((post,index)=> (
         <Post post={post} key={index}/>
        ))}
           
      </ScrollView> 
      <BottomTabs icons={bottomTabIcons}/>

    </SafeAreaView> 
  )
} 
const styles = StyleSheet.create({
container: {
  backgroundColor:'white',
  flex: 1,
},

})

export default HomeScreen
