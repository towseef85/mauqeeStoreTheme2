import React,{useState} from 'react'
import SettingContext from './SettingContext';

export default function SettingProvider(props) {
    const [layoutState, setLayoutState] = useState("RTL")

    const changeLayout=(item)=>{
        if(item === "RTL"){
            document.body.classList.remove("ltr");
            document.body.classList.add("rtl");
            setLayoutState("LTR");
        }else{
            document.body.classList.remove("rtl");
        document.body.classList.add("ltr");
        setLayoutState("RTL");
        }
    }
  return (
    <SettingContext.Provider 
      value={{
        ...props,
        state: layoutState,
        layoutFun:changeLayout
      }}
      >
        {props.children}
      </SettingContext.Provider>
  )
}
