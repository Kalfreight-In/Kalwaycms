import React from 'react';
import { FormField } from '@sanity/base/components';
import { TextInput, Stack, Text } from '@sanity/ui';
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent';
import { useId } from '@reach/auto-id'; // hook to generate unique IDs

const StringWithLimits = React.forwardRef((props, ref) => {
  const {
    type, // Schema information
    value, // Current field value
    // readOnly, // Boolean if field is not editable
    // placeholder, // Placeholder text from the schema
    // markers, // Markers including validation rules
    // presence, // Presence information for collaborative avatars
    // compareValue, // Value to check for "edited" functionality
    // onFocus, // Method to handle focus state
    // onBlur, // Method to handle blur state
    // onChange, // Method to handle patch events
  } = props;

  // Creates a unique ID for our input
  // const inputId = useId();

  // const handleChange = React.useCallback(
  //   (event) => {
  //     const inputValue = event.currentTarget.value;
  //     onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()));
  //   },
  //   [onChange]
  // );
  return (
    <Stack space={1}>
      <FormField
      // Allows the label to connect to the input field
      >
        <TextInput
          // A function to call when the input value changes
          value={value} // Current field value
        />
      </FormField>
      <Text muted size={1}>
        {value ? value.length : '0'} / {MaxConstraint}
      </Text>
    </Stack>
  );
});

export default StringWithLimits;
