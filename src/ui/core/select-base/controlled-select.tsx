import * as React from 'react';
import type { FieldValues } from 'react-hook-form';
import { useController } from 'react-hook-form';

import type { InputControllerType } from '../input';
import { SelectBase, SelectBaseProps } from './select-base';

interface ControlledSelectProps<T extends FieldValues>
  extends SelectBaseProps,
    InputControllerType<T> {}

// only used with react-hook-form
export function ControlledSelectBase<T extends FieldValues>(
  props: ControlledSelectProps<T>
) {
  const { name, control, rules, ...selectProps } = props;

  const { field, fieldState } = useController({ control, name, rules });
  return (
    <SelectBase
      onSelect={field.onChange}
      value={field.value}
      error={fieldState.error?.message}
      {...selectProps}
    />
  );
}
