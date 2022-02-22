import {
  Edit,
  DateInput,
  SimpleForm,
  TextInput,
  SelectInput,
  TopToolbar,
  ListButton,
  ShowButton,
} from 'react-admin';

import ChevronLeft from '@material-ui/icons/ChevronLeft';


const UserEditActions = ({ basePath, data }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label='Back' icon={<ChevronLeft />} />
    <ShowButton basePath={basePath} record={data} />
  </TopToolbar>
);


const PostTitle = ({ record }) => {
  return <span>Editing {record ? `${record.username}'s record` : ''}</span>;
};

export const UserEdit = (props) => (
  <Edit actions={<UserEditActions />} title={<PostTitle />} {...props}>
    <SimpleForm>
      {/* <TextInput source='id' disabled />
      <TextInput source='username' disabled /> */}
      <SelectInput
        source='role'
        choices={[
          { id: 'Admin', name: 'Admin' },
          { id: 'Moderator', name: 'Moderator' },
          { id: 'User', name: 'User' },
        ]}
      />
      {/* <TextInput source='email' disabled />
      <TextInput label='Posted' source='qposted' disabled />
      <TextInput label='Rejected' source='qrejected' disabled />
      <TextInput label='Approved' source='qapproved' disabled />
      <DateInput label='Signup date' source='createdAt' disabled /> */}
    </SimpleForm>
  </Edit>
);
