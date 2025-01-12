import React,{createContext,useState,useContext,ReactNode} from 'react';
interface DataContextType{
    data:string;
    setData:(value:string)=>void;
}

export const DataContext=createContext<DataContextType|undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> =({children})=>{
    const [data, setData] = useState({
        userId:"",
        recievedFrom: "",
    phone: "",
    email: "",
    address: "",
    providerName:"",
    providerAddress:"",
    providerPhone:"",
    providerEmail:"",
    subscriptionType:"",
    renewalDate:"",
    speed:"",
    totalAmount:""
    });    
    return (
        <DataContext.Provider value={{data,setData}}>
            {children}
        </DataContext.Provider>
    )
}

//custom hook
export const useData=()=>{
    const context = useContext(DataContext);
    if(!context){
        throw new Error("Context not set")
    }
    return context
}