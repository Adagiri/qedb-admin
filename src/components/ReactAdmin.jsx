import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './admin/Dashboard';
// import authProvider from './admin/authProvider';
import { dataProvider, authProvider } from '../../firebase/firebase';
import { ProductList } from './products/ProductList';

const App = () => {
 (async function () {
    const user =  await authProvider.checkAuth();
    console.log(user)
  })();


  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      dashboard={Dashboard}
    >
      <Resource name='customers' list={ListGuesser} icon={UserIcon} />
      <Resource
        name='products'
        list={ProductList}
        icon={UserIcon}
        edit={EditGuesser}
      />
      {/* <Resource
      name="products"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    /> */}
    </Admin>
  );
};

export default App;
