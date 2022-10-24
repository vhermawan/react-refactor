import { assign, createMachine } from 'xstate';
import { API } from '../../common/api/api';
import toast from 'react-hot-toast/headless';
export const loginMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QBsD2UCWA7AtAWwEMBjAC2zADoMJkwBiASQDkAFAVQBUB9AUQFkAggwAyAbQAMAXUSgADqlgYALhlRYZIAB6IAbOIoB2HQA4DAVgMAWAEzjxARmtnrAGhABPRNes6K1gJxmxtb2xg4GxpZmlgC+MW5omLiEpORUNPTM7NwsAgDKeQDqAPIASgAiEtJIIPKKKmoa2gghAMx+FsHWBq09OtEGbp4IOvYUOv7G-q3+5satZvb2BnEJ6Nj4xGRYlNS0dADCwgwHANJceWwAQnwM3FecHMVMVRp1yqrqNc3WrdYUrXEOm6jja-UsxiGiHs-jGYUBgWslnE-nExn6qxAiQ2KW2lDQBAg2CgdAgal2WAAbqgANb49bJLZpAlErBQBDYalEAgNLBVV41d68pqICK+ebmZzWSKtHQTKEIebjRwQgzeYz2GwGeyY7GM1I7Cgs4l0MAAJzNqDNFFkyB5ADMrXgjQzNgb6YTiRyqahubz+VI3goPo1vqL0RQJWYpTK5f4FaF-hLLP4JnLNTo-rrXbi0vaCBhkABXM30Uo8DilACaArkweFYYQQX0KIhKYM-ksOgh8Y8iFasoooQsnR6C0srTi8RAWFQEDgGj1brx6VoQfqnxFiuMALM03R00sBhR9jMCoH+mcaNap5mEQ12aSy+ZqE9bPXIa+oGaQUsFCimYOMYpgomiCYmEO-hQaiUQdmi8yPjiTKGrARZEEQcDwIK9abo29jhBQdh2AYHYag4SIKkqp7Akep7iK0xgWDq05Lrmhr5oWJZgB+DbftCBFEeIJGTPhKrntKhG2MEQKRE4lgToh+p4jxuF8QgjiGCY5hWLY5HOAqODdP+Fh-LpgJmHoNhTjEQA */
createMachine (
  {
  context: {
    userData: {},
    email: undefined,
    password: undefined,
    isEmailError: false,
    isPasswordError: false,
  },
  id: "login-machine",
  initial: "idle",
  states: {
    idle: {
      on: {
        INPUT_EMAIL: {
          target: "idle",
          actions: "setEmail",
          internal: false,
        },
        INPUT_PASSWORD: {
          target: "idle",
          actions: ["setPassword", "verifyEmail"],
          internal: false,
        },
        CLICK_SUBMIT_BUTTON: {
          target: "loading",
          cond: "isFormValid",
        },
      },
    },
    loading: {
      invoke: {
        src: "submitForm",
        onDone: [
          {
            target: "success",
            actions: "redirectDashboardPage",
          },
        ],
        onError: [
          {
            target: "idle",
            actions: "showToastError",
          },
        ],
      },
    },
    success: {
      entry: "notifySuccess",
      type: "final",
    },
  },
},{
  actions:{ /*to set state*/
    verifyEmail: assign({
      isEmailError(context: any){
        if(context.email){
          let isEmailError =  (/^\S+@\S+$/.test(context.email as string))
          return !isEmailError;
        }else{
          return context.isEmailError;
        }
      }
    }),
    setEmail: assign({
      email: (_, event: any) => event.value,
    }),
    setPassword: assign({
      password: (_, event: any) => event.value
    }),
    redirectDashboardPage:(context, eventData) => {
      console.log('context', context, 'eventData', eventData);
    },
    showToastError:(_, eventData) => {
      console.log('eventData', eventData.data);
      // toast.error("This didn't work.")
      alert("error")
    },
  },
  services:{ /*to make fetch data return in promise*/
    submitForm: async (context, eventData) => {
      return await API.post("/auth/login",{
        email: context.email,
        password: context.password,
      })
    },
  },
  guards:{ /*to make condition*/
    isFormValid: (context, event) => {
      return true
    }
  }
}
)