import React, { FC } from 'react';
import { FieldContext } from '../../utils/context/fieldContext';
import { useUniqueId } from '../../utils/hooks/useUniqueId';

import { Input } from './partials/Input.component';
import { Label } from './partials/Label.component';

export interface FieldCompositionT {
  Label: typeof Label;
  Input: typeof Input;
}

export const Field: FC<{ children: React.ReactNode }> & FieldCompositionT = ({
  children,
}) => {
  const id = useUniqueId();

  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
