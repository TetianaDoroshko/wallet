import Select from 'react-select';
import './Selektor.css';

const options = [
  { value: 'Main', label: 'Main' },
  { value: 'Food', label: 'Food' },
  { value: 'Auto', label: 'Auto' },
  { value: 'Development', label: 'Development' },
  { value: 'Children', label: 'Children' },
  { value: 'House', label: 'House' },
  { value: 'Education', label: 'Education' },
  { value: 'Reset', label: 'Reset' },
];

const Selektor = ({ onChange }) => {
  const onSelectorChange = e => {
    onChange(e.value);
  };

  return (
    <Select
      onChange={onSelectorChange}
      unstyled={true}
      classNamePrefix="custom-select"
      options={options}
      placeholder="Select a category"
      styles={{
        option: (baseStyle, state) => ({
          ...baseStyle,
          color: state.isFocused ? '#ff6596' : 'black',
          background: state.isFocused ? '#ffffff' : '',
        }),
      }}
    />
  );
};

export default Selektor;
