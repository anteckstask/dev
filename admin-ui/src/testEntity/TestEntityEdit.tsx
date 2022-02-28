import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TestEntityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="costm" source="costm" />
        <TextInput label="Test" source="test" />
      </SimpleForm>
    </Edit>
  );
};
