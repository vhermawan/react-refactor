import routerList from "./router-list";
import { RouterProvider } from "react-router-dom";

export default function Routers(){
  return (
    <>
      <RouterProvider
        router={routerList}
      />
    </>
  )
}
