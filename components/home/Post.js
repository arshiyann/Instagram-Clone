import React from 'react'
import {View, Image, Text,StyleSheet, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
const postFooterIcons =[
   {  name : 'Like',
    image: require('../../assets/Like.png'),
},
{
    name : 'Comment',
    image: require('../../assets/Comment.png'),
},
{
    name : 'Share',
    image: require('../../assets/Share.png'),
},
{
    name : 'Save',
    image: require('../../assets/Save.png'),
},

]
const Post = ({post}) => {
    return(
        <View style = {{ marginBottom: 30}}>
            <Divider width = {1} orientation='vertical' />
            <PostHeader post={post}/>
            <PostImage post={post}/>
           <View style ={{marginHorizontal:15, marginTop:10}}>
            <PostFooter/>
            <Likes post={post}/>
            <Caption post={post}/>
            <CommentsSection post={post}/>
            <Comments post = {post}/>
            </View>
        </View>
    )
}
const PostHeader = ({post}) =>(
<View
style ={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center',
    
}}
>
    <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image source =  {post.profile_picture} style = {styles.story}/>
       <Text style={{color:'black',marginLeft:5,fontWeight:'700',}}>{post.user}</Text>
    </View>
    <Text style ={{color:'black',fontWeight:'900'}}>...</Text>
</View>

)   
const PostImage = ({post})=> ( 

<View style={{
    width:'100%',
    height:450,
}}>   
     <Image 
      source = {post.profile_picture}
      style={{height:'100%', resizeMode:'cover'}}

/>
</View>
)
const PostFooter=()=>(
<View style ={{flexDirection: 'row',justifyContent:'space-between'}}>
 <View style = {styles.leftFooterIconsContainer}>
   <Icon imgStyle = {styles.footerIcon} image={postFooterIcons[0].image}/>
   <Icon imgStyle = {styles.footerIcon} image={postFooterIcons[1].image}/>
   <Icon imgStyle = {styles.footerIcon} image={postFooterIcons[2].image}/>
 </View>
 <View>
 <Icon 
 imgStyle = {[styles.footerIcon, styles.saveIcon]} 
 image={postFooterIcons[3].image}
 />
 </View>
</View>
)
const Icon =({imgStyle, image})=>(
    <TouchableOpacity>
        <Image style =  {imgStyle} source= {image}/>
    </TouchableOpacity>
) 
const Likes = ({post})=>(
    <View style={{flexDirection:'row',marginLeft:4, marginTop:4}}>
    <Text style={{color:'black', fontWeight:'600'}}>
        {post.likes.toLocaleString('en')} likes
    </Text>
    </View>
)
const Caption=({post})=>(
    <View style = {{marginTop:5, marginLeft:3}}>
<Text style = {{color:'black',}}>
    <Text style = {{fontWeight:'600'}}>{post.user}</Text>
    <Text>{post.caption}</Text>

</Text>
</View>
)

const CommentsSection = ({post})=>(
    <View style = {{marginTop:5,marginLeft:3}}>
        {!!post.comments.length &&( 
     <Text style= {{color:'gray'}}>
        View {post.comments.length > 1 ? 'all ':''}{post.comments.length}{' '}
        {post.comments.length > 1 ? 'comments':'comment'}
     </Text>
        )}
    </View>
)
const Comments = ({post})=> (

    <>
    {post.comments.map((comment, index)=>(
<View key = {index} style = {{flexDirection: 'row', marginTop:5}}>
   <Text style={{color:'black'}}>
    <Text style = {{fontWeight:'600'}}>{comment.user}</Text>{' '}
   {comment.comment}
   </Text>

</View> 
    ))}
 </>
)
const styles = StyleSheet.create({
    story:{
     width:35,
     height:35,
     borderRadius:50,
     marginLeft:6, 
     borderWidth:1.6,
     borderColor:'#ff8501',
     
    },
    footerIcon:{
        width: 28,
        height: 25,
       
        marginLeft:2,
        marginTop:2,
        borderWidth:3,
    },
    saveIcon:{
         height:28,
    },

    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent:'space-between',
    },

})

export default Post 