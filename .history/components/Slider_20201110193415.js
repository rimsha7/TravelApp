import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Dimensions, Text, ScrollView, View, Button, Image } from 'react-native';

// import { StackNavigator } from 'react-navigation';

const { width } = Dimensions.get("window");
const height = width * 0.6;


export default class Slider extends Component {
   scrollRef = React.createRef();
   constructor(props) {
      super(props);

   this.state = {
      active: 0
      }
   }
  
   componentDidMount = () => {
      setInterval(() => {
         this.setState(prev => ({ active: prev.active + 1 }),
            () => {
               this.scrollRef.current.scrollTo[{
                  animated: true,
                  y: 0,
                  x: width * this.state.active
               }]
            })
      }, 3000)
   }
   change = ({nativeEvent}) => {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide !== this.state.active) {
         this.setState({ active: slide });
   }
   }


   render()
 {
    return (
       <View style={styles.container}>
          <ScrollView
             pagingEnabled
             horizontal
            //  onScroll= {this.change}
            //  showsHorizontalScrollIndicator={false}
             onMomentumScrollEnd={this.change}
             ref =  {this.scrollRef}
             style={styles.container}
             onMomentumScrollEnd
          > 
          {
             this.props.images.map((image, index) => (
                <Image
                   key={index}
             source={{uri:image}}
             style={styles.image} />
             ))
             }
          </ScrollView>
          <View style={styles.pagination}>
             {
                this.props.images.map((i, k) => (
                   <Text key={k} style={k==this.state.active ? styles.pagingActiveText : styles.pagingText}> ⬤ </Text>
                ))
             }
             
          </View>

        </View>
    );
 }
}

const styles = StyleSheet.create({
  container: {
      width,
      height
   },
   image: {
      width,
      height,
      resizeMode: "cover"
   },
   pagination: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center'
   },
   pagingText: {
      fontSize: (width / 20),
      color: "#888",
      margin: 3
   },
   pagingActiveText: {
      fontSize: (width / 20),
      color: "#fff",
      margin: 3
   }
});
