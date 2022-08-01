import React, { useState } from "react";
import {GlobalContext} from './GlobalContext'


export default function GlobalState(props) {

    const value = {

    }

    const Provider = GlobalContext.Provider

    return <Provider value={value}>{props.children}</Provider>
}