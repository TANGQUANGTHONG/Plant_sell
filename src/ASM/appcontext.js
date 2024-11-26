import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react';


export const appcontext = createContext();

 export const AppConTextProvider = props => {
    const {children} = props;
    const [Email, setEmail] = useState("")
  return (
    <appcontext.Provider value={{Email: Email, setEmail: setEmail}}>
        {children}
    </appcontext.Provider>
  )
}

export default appcontext

const styles = StyleSheet.create({})