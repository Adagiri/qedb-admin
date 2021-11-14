import { List, Datagrid, TextField, EmailField } from "react-admin";
import CustomUrlField from "./CustomUrlField";

import { TextInput} from "react-admin";

const usersFilters  = [
<TextInput source="name" label="Search a name" alwaysOn  />
]

export const UserList = (props) => {
  return (
    <List filters={usersFilters} {...props}>
      <Datagrid rowClick="edit">
        {/* <TextField source="id" /> */}
        <TextField source="name" />
        {/* <TextField source="username" /> */}
        <EmailField source="email" />
        {/* <TextField source="address.street" /> */}
        <TextField source="phone" />
        <CustomUrlField source="website" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
  );
};
