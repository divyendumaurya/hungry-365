import Body from "../Body"
import { render } from "@testing-library/react"
import store from "../../Utils/store";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";


test("Seqarcg results on Homepage" , ()=>{

   const body= render (<StaticRouter>
    <Provider 
        store={store}>
            <Body/>
            </Provider>
            </StaticRouter>)

console.log(body);
})