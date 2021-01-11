import React, { useEffect, useReducer } from 'react';
const Context = React.createContext();
// import axios from "axios";

const  CORS_KEY = "https://cors-anywhere.herokuapp.com/"
const API = "https://www.metaweather.com/api/location/search/?query=san";

function ContextProvider({children}) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'FETCHING_DATA': {
                return {
                    ...state,
                    data: action.playload,
                }
            }
            default: {
                console.error('No actions defined', action.type);
                break;
            }
        }
        return state;
    }, {
      data: [ ],
      loading: true,
    })

    async function fetchingJobsData() {
        const fetch = await fetch(CORS_KEY + API);
        const res = await fetch.json();
        console.log(res);

        // axios
        //   .get(CORS_KEY + API)
        //   .then(res => {
        //     dispatch({ type: 'FETCHING_DATA', playloads : res.data })
        //   })
        //   .catch(error => {
        //     dispatch({type : "FETCH_FAILED" })
        //   })
      }

      useEffect(() => {
        fetchingJobsData()
      }, [])

    return(
        <Context.Provider 
            value={{state, dispatch}}>
                {children}
        </Context.Provider>
    )
}
export  { Context, ContextProvider }