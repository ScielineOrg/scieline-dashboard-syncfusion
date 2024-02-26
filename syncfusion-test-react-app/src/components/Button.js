import React from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const Button = (props) => {
  return (
    <div>
      <h1>Syncfusion Component 1</h1>
      <ButtonComponent>{props.text}</ButtonComponent>
    </div>
  );
};

export default Button;