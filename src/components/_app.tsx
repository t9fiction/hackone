"use client"
import { Provider } from 'react-redux';
import { store } from "@/store/store";

function ReduxWrapper({ children }:any) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxWrapper