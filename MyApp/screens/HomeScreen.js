import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import JobCard from '../components/jobCard';
import Popular from '../components/Popular'

const jobData = [
  // 8 popular job cards
  { id: '1', title: 'Software Engineer', company: 'Tech Corp', salary: '$530,000', location: 'New York', image: require('../components/facebook.png')},
  { id: '2', title: 'Product Manager', company: 'Business Inc', salary: '$920,000', location: 'Iraq', image: require('../components/kfc.png')},
  { id: '3', title: 'UI/UX Designer', company: 'Design Studio', salary: '$200,000', location: 'Canada', image: require('../components/instagram.png')},
  { id: '4', title: 'Data Scientist', company: 'Data Labs', salary: '$177,000', location: 'France', image: require('../components/unilever.jpg')},
];
const popular = [
  // 8 featured job cards
  { id: '1', title: 'Backend Developer', company: 'Tech Solutions', salary: '$890,000', location: 'Paris, France', image: require('../components/google1.png')},
  { id: '2', title: 'Frontend Developer', company: 'Web Innovators', salary: '$200,000', location: 'Abuja, Nigeria', image: require('../components/beats.png')},
  { id: '3', title: 'Marketing Manager', company: 'Marketing Pros', salary: '$120,000', location: 'Korea, Shangai', image: require('../components/burger.png')},
  { id: '4', title: 'Sales Executive', company: 'Sales Experts', salary: '$530,000', location: 'Dubai. UAE', },
];

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <View>
        <Text style={styles.welcome}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
        </View>
      <View style={styles.profilePic}>
        <View>
            <Image source={require('../components/marks.png')} style={styles.marks} />
        </View>
      </View>
     </View>

      <View style={styles.search}>
      <View style={styles.searchbox}>
        <View style={styles.search1}>
          <Image source={require('../components/search.png')} style={styles.searchpic} />
          <Text style={styles.searchtext}>Search a job or position </Text>
        </View>
      </View>
      <View style={styles.filter}>
        <Image source={require('../components/Filter.png')} style={styles.filterpic}/>
      </View>
     </View>

      <View style={styles.top1}>
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <Text style={styles.see}>See all</Text>
      </View>
      <FlatList
        data={jobData.slice(0, 4)}
        renderItem={({ item }) => <JobCard title={item.title} image={item.image}
        company={item.company} salary={item.salary} location={item.location}/>}
        keyExtractor={item => item.id}
        horizontal
      />

     <View style={styles.top1}>
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <Text style={styles.see}>See all</Text>
     </View>
        <FlatList
        data={popular.slice(0, 4)}
        renderItem={({ item }) => <Popular title={item.title} image={item.image}
        company={item.company} salary={item.salary} location={item.location} />}
        keyExtractor={item => item.id}
        vertical showsVerticalScrollIndicator={false}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fafafd'
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginRight: 20
  },
  search: {
    backgroundColor: '#fafafd',
    height: 49,
    width: 353,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchbox: {
    backgroundColor: '#f2f2f3',
    height: 48,
    width: 280,
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  search1: {
    height: 24,
    width: 280,
    marginTop: 12,
    marginLeft: 10,
    flexDirection: 'row',
  },
  searchpic: {
    marginTop: 2.5,
  },
  filter: {
    backgroundColor: '#f2f2f3',
    width: 50,
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  filterpic: {
    width: 20.33,
    height: 20.5,
  },
  searchtext: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: '700',
    paddingLeft: 10,
    color: '#afb0b6'
  },
  marks: {
    width: 46,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  first: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profilePic: {
    width: 50,
    height: 52,
  },
  top1: {
    flexDirection: 'row',
    alignContent: 'flex-end'
  },
  see: {
    marginTop: 18,
    paddingLeft: 150,
    textAlign: 'right'
  },
  company: {
    paddingLeft: 20,
    fontFamily: 'Helvetica',
    fontSize: 16,
    marginTop: 5,
  },
  title: {
    paddingLeft: 20,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 75,
  },
});

export default HomeScreen;