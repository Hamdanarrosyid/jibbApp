import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  newsWrapper: {
    paddingVertical: 15,
    borderBottomColor: '#707070',
    borderBottomWidth: 0.5,
  },
  newsContent: {
    height: 80,
    alignSelf: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  newsTitleContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingRight: 13,
    paddingBottom: 5,
  },
  tagNews: {
    fontSize: 12,
    color: '#450BBB',
    fontWeight: 'bold',
  },
  timeNews: {
    fontSize: 12,
    color: '#707070',
    marginLeft: 10,
  },
  newsImage: {
    height: 80,
    width: 80,
    borderRadius: 8,
  },
});

export default styles;
