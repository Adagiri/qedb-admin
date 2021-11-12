import { List, Datagrid, TextField, EmailField } from "react-admin";
import CustomUrlField from "./CustomUrlField";

export const UserList = (props) => {
  return (
    <List {...props}>
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
