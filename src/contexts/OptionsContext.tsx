import { createContext } from 'react';

type Options = Record<string, Record<string, string>>;

const OptionsContext = createContext<Options>({});

export default OptionsContext;
