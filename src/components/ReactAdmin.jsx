import * as React from 'react';
import {
  Admin,
  Resource,
  fetchUtils,
  ListGuesser,
  List,
  Datagrid,
  ArrayField,
  SingleFieldList,
  ChipField,
  DateField,
  TextField,
  ShowGuesser,
} from 'react-admin';
import Dashboard from './admin/Dashboard';
// import authProvider from './admin/authProvider';
import { dataProvider, authProvider } from '../../firebase/firebase';
import jsonServerProvider from 'ra-data-json-server';
import users from "./users/index";
import categories from './categories/index';
import questions from './questions/index';
import myDataProvider from '../../providers/dataProvider';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGNlY2ZiMmJmZTE0NjAwMGM1NjM1MiIsInJvbGUiOiJBZG1pbiIsImlzQWRtaW4iOnRydWUsImlzTW9kZXJhdG9yIjpmYWxzZSwiaWF0IjoxNjQ1MTgxMjU5LCJleHAiOjE2NTI5NTcyNTl9.IpT25KcpDgRU0MnjmJdJVBt-bVanJ-k2GWRPuaopu7c'
  );
  return fetchUtils.fetchJson(url, options);
};

// export const QuestionList = (props) => (
//   <List {...props}>
//     <Datagrid rowClick='edit'>
//       <TextField source='author.id' />
//       {/* <ReferenceField source='_id' reference='s'>
//         <TextField source='id' />
//       </ReferenceField> */}
//       <TextField source='type' />
//       <TextField source='id' />
//       <TextField source='difficulty' />
//       <TextField source='text' />
//       <ArrayField source='options'>
//         <SingleFieldList>
//           <ChipField source='id' />
//         </SingleFieldList>
//       </ArrayField>
//       <DateField source='answer' />
//       <TextField source='images' />
//       <ArrayField source='credits'>
//         <SingleFieldList>
//           <ChipField source='title' />
//         </SingleFieldList>
//       </ArrayField>
//       <TextField source='status' />
//       <TextField source='category' />
//       <DateField source='createdAt' />
//     </Datagrid>
//   </List>
// );


const App = () => {
  // (async function () {
  //   const user = await authProvider.checkAuth();
  //   console.log(user);
  // })();

  return (
    <Admin
      // dataProvider={dataProvider}
      // authProvider={authProvider}
      dataProvider={myDataProvider}
      dashboard={Dashboard}
    >
      <Resource name='users' {...users} />
      <Resource name='categories' {...categories} />
      <Resource name='questions' show={ShowGuesser} {...questions} />
      {/* <Resource
        name='products'
        list={ProductList}
        create={ProductCreate}
        edit={EditGuesser}
      />
      <Resource name='categories' /> */}
    </Admin>
  );
};

export default App;
