import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';

const Popular = ({ title, company, salary, location, image }) => {
  return (
    <ScrollView style={styles.popularcard}>
        <View style={styles.populartop}>
        <Image source={image} style={styles.jobpic}/>
        <View>
        <Text style={styles.populartitle}>{title}</Text>
        <Text style={styles.popularcompany}>{company}</Text>
        </View>
        <View>
            <Text style={styles.populartitle}> {salary}</Text>
            <Text style={styles.popularcompany}> {location}</Text>
        </View>
        </View>
  
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  popularcard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 65,
    borderRadius: 25,
    marginTop: 10,
  },
  populartitle: {
    paddingLeft: 20,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 16,
  },
  popularcompany: {
    paddingLeft: 20,
    fontFamily: 'Helvetica',
    fontSize: 16,
    marginTop: 5,
  },
  popularbottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  populartop: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 20,
  },
  jobpic: {
    flexDirection: 'row',
    height: 50,
    width: 50,
    borderRadius: 50,
    paddingLeft: 5,
  },
});

export default Popular;