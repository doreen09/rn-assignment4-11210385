import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';

const JobCard = ({ title, company, salary, location, image }) => {
  return (
    <View>
    <ScrollView style={styles.card}>
        <View style={styles.top}>
          <Image source={image} style={styles.jobpic}/>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.company}>{company}</Text>
        </View>
        </View>
   
        <View style={styles.bottom}>
            <Text style={styles.salary}> {salary}</Text>
            <Text style={styles.location}> {location}</Text>
        </View>
    </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffd700',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 18,
    elevation: 3,
    width: 300,
    height: 120,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
    flexDirection: 'column'
  },
  company: {
    fontSize: 16,
    color: 'gray',
    paddingLeft: 20,
  },
  salary: {
    fontSize: 20,
    color: 'gray',
  },
  location: {
    fontSize: 20,
    color: 'gray',
  },
  bottom: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-between'
  },
  top: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 10
  },
  jobpic: {
    height: 50,
    width: 50,
    borderRadius: 30
  }
});

export default JobCard;