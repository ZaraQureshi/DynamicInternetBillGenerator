import { createContext, ReactNode, useContext, useState } from 'react';
import { InvoiceFormValues } from './lib/InvoiceSchema';
interface DataContextType {
    data: InvoiceFormValues;
    setData: (values: InvoiceFormValues) => void;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<InvoiceFormValues>({} as InvoiceFormValues);
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}

//custom hook
export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("Context not set")
    }
    return context
}