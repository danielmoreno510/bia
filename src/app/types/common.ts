interface ILabelValue {
    label: string;
    value: string;
  }
  
  interface Input {
    Icon: any;
    placeholder: string;
    value: string;
    searchByInput: (value: string) => void;
  }
  
  interface Select {
    placeholder: string;
    options: ILabelValue[];
    value: string;
    onChange: (value: string) => void;
  }
  