import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';
// gives 10 seconds allowance to process requests before it declares failure
// this does not apply to cases like no internet connection
// Let say you've requested the URL through axios
// and SERVER is taking long time to respond, in this case the axios timeout will work.
const responseTimeout = 10000;

const Http = axios.create({

  timeout: responseTimeout,
});

// Http.interceptors.request.use(
//   async config => {
//     const token = await AsyncStorage.getItem(Config.ACCESS_TOKEN);
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   },
// );
export default Http;
