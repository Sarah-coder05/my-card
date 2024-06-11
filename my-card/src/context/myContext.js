import React, {createContext, useState } from "react";


const contactContext  = createContext() 


const initialContacts = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "456-789-0123",
    },
  ];

const MyProvider = ({children}) => {

    const [Contact] = useState(initialContacts) 


    return(
        <contactContext.Provider value={{Contact}}>
            {children}
        </contactContext.Provider>
    )
}


export{MyProvider, contactContext}