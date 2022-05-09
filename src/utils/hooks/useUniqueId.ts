import { customAlphabet } from 'nanoid';
import { useState } from 'react';

const nanoId = customAlphabet('123456789abcdef', 10);

export const useUniqueId = () => {
  const [id] = useState(nanoId());

  return id;
};
