import React from "react";

const UserContext = React.createContext()

const UserProvier = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvier, UserConsumer }