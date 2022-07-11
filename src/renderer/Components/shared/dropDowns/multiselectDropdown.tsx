/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useDarkMode } from 'renderer/Hooks/useDarkMode';

import Select, { StylesConfig } from 'react-select';
import makeAnimated from 'react-select/animated';

// interface DropdownOptions {
//   name: string;
//   clickAction?: () => void;
//   icon?: any;
// }
// interface DropdownSections extends Array<DropdownOptions> {}

// interface DropdownProps {
//   toggleButton: any;
//   options: DropdownSections[];
//   children?: any;
// }

export const MultiselectDropdown: React.FC<any> = (props) => {
  const { options } = props;
  const [darkMode] = useDarkMode();

  const animatedComponents = makeAnimated();

  return (
    <Select
      defaultValue={[]}
      options={options}
      isMulti
      className="networks-select"
      classNamePrefix="networks-select"
      closeMenuOnSelect={false}
      components={animatedComponents}
      styles={{
        multiValue: (base) => ({
          ...base,
          backgroundColor: darkMode ? `#6c6c6c` : '#c1c1c1',
        }),
        multiValueLabel: (base) => ({
          ...base,
          color: darkMode ? 'white' : `black`,
        }),
        multiValueRemove: (base) => ({
          ...base,
          color: darkMode ? 'white' : `black`,
        }),
        option: (base) => ({
          ...base,
          backgroundColor: darkMode ? `#6c6c6c` : `#F9FBFD`,
          border: `1px solid white`,
          cursor: `pointer`,
        }),
      }}
    />
  );
};
