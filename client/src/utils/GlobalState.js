import React, {createContext, useContext } from "react";
import { useResourceReducer } from './reducers';

const ResourceContext = createContext();
const { Provider } = ResourceContext;

const ResourceProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useResourceReducer({
        name: [],
        shortDescription: [],
        imageURL: '',
    });

return <Provider value={[state, dispatch]} {...props} />;
};

// const defaultGlobalState = {
//     num: 0,
//     text: "foo",
//     bool: false
// };

// const globalStateContext = React.createContext(defaultGlobalState)
// const dispatchStateContext = React.createContext(undefined);

const useResourceContext = () => {
    return useContext(ResourceContext);
};

export { ResourceProvider,useResourceContext };