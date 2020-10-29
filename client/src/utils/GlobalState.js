import React, {createContext, useContext } from "react";
import { useResourceReducer } from './reducers';

const ResourceContext = createContext();
const { Provider } = ResourceContext;

const ResourceProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useResourceReducer({
        cart: [],
        cartOpen: false
    });

    console.log("Global State:");    
    console.log(state);

    return <Provider value={[state, dispatch]} {...props} />;
};

const useResourceContext = () => {
    return useContext(ResourceContext);
};

export { ResourceProvider, useResourceContext };