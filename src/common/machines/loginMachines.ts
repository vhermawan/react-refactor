import { createMachine } from 'xstate';
export const loginMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QBsD2UCWA7AtAWwEMBjAC2zADoMJkwBiAYQBkBJBgaQGUBVAIQFkWAFV7chQgPIA5ANoAGALqJQAB1SwMAFwyosykAA9EARgAsAZgpyATADZTp63LkAOawE5bAdgCsAGhAAT0QPawp3a0ifaJ9zdzNrAF9EgLRMXEJScgo0AghsKDoIXUpsADdUAGtKNOx8YjIsGtQ8goRy1CICbV15BT79NQ0evSRDRB8XSy93cy9rFwtHc1NjAOCEa2MwuxcvMyX58ySUkFqMhuzc-KxCsAAne9R7ihVkboAzZ7wc9DrMxrNVq3dpYCpdEZ9AZjIZaHSjUBGBDGLy2CjbHxyUw+dyOOTbczrRBTdE+Wx2OReGymFyxczJVJ-C5ZJoUD4EDDIACu93oACUAKJCPkATWhqnUcN0+iRZjRcnM21sxxc+PcXhcRORbgo5hcGKp6pR9mSpywqAgcH053qLNKNDAg0lIxliAsFAccx881sOO9tNsWuskw9K3McQV5gVytMDLOTNtgN+wKgTuG8NdCD1xg9GJRNMVLnVhKCIW2uuMewWKympls7jjNoB2VgXKIRDg8BhzozYyR+ss7jJWy82Os5nsgdLm2MOf11lMqPrs1Mzljpybl1Z7M5PMd3fT0r7busWvzFFik7kEWVNl9jYTzaaaalCPGCBwU42OB8FFV81VFEPEmYwfGMU1EiAA */
createMachine (
  {
  context: {
    userData: {},
  },
  id: "login-machine",
  initial: "idle",
  states: {
    idle: {
      on: {
        CLICKSUBMITBUTTON: {
          target: "loading",
          actions: "submitForm",
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
            target: "failure",
            actions: "showToastError",
          },
        ],
      },
    },
    success: {
      entry: "notifySuccess",
      type: "final",
    },
    failure: {
      on: {
        RETRY: {
          target: "loading",
        },
      },
    },
  },
},{
  actions:{
    redirectDashboardPage:(context, eventData) => {
      console.log('context', context, 'eventData', eventData);
    },
    showToastError:(context, eventData) => {
      console.log('context', context, 'eventData', eventData);
    },
    submitForm:(context, eventData) => {
      console.log('context', context, 'eventData', eventData);
    },
  }
}
)