import React from "react";

const UserContext = React.createContext() // We could add a default value as theparameter when creating the context.
// The default value will be used when no value is used in the userprovider.

const UserProvier = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvier, UserConsumer }