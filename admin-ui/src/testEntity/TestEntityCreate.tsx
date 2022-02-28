import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TestEntityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="costm" source="costm" />
        <TextInput label="Test" source="test" />
      </SimpleForm>
    </Create>
  );
};
