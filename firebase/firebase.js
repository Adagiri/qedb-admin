import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  FirebaseRealTimeSaga,
} from 'react-admin-firebase';

const config = {
  apiKey: 'AIzaSyCtT8s3jAGhx7eUq-2X0rb5Rg_-KmjQTiU',
  authDomain: 'm-fawzaan.firebaseapp.com',
  projectId: 'm-fawzaan',
  storageBucket: 'm-fawzaan.appspot.com',
  messagingSenderId: '926994513119',
  appId: '1:926994513119:web:ae4248936ac72253cfbd6a',
};

// All options are optional
const options = {
  // Enable logging of react-admin-firebase
  logging: false,
  // Resources to watch for realtime updates, will implicitly watch all resources by default, if not set.
  watch: ['customers', 'products'],
  // Authentication persistence, defaults to 'session', options are 'session' | 'local' | 'none'
  persistence: 'session',
  // Disable the metadata; 'createdate', 'lastupdate', 'createdby', 'updatedby'
  disableMeta: false,

  // Changes meta fields like 'createdby' and 'updatedby' to store user IDs instead of email addresses
  associateUsersById: true,
  // Casing for meta fields like 'createdby' and 'updatedby', defaults to 'lower', options are 'lower' | 'camel' | 'snake' | 'pascal' | 'kebab'
  metaFieldCasing: 'camel',

  // Use firebase sdk queries for pagination, filtering and sorting
  lazyLoading: {
    enabled: false,
  },
  // Logging of all reads performed by app (additional feature, for lazy-loading testing)
  firestoreCostsLogger: {
    enabled: false,
  },
};

export const dataProvider = FirebaseDataProvider(config, options);
export const authProvider = FirebaseAuthProvider(config, options);
// export const firebaseRealtime = FirebaseRealTimeSaga(dataProvider, options);
