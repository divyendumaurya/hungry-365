import Header from "../Header"
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../Utils/store"
import {StaticRouter} from "react-router-dom/server"

test("Logo Should load on render of header",()=>{
    //load header
    const header = render(
        <StaticRouter>
    <Provider store={store}><Header/></Provider>
    </StaticRouter>
    );  

    const logo = header.getAllByTestId("logo")

    console.log(logo[0])

    expect (logo[0].src).toBe("https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj")


    // check if logo loaded
} )




test("Caet should have zero item",()=>{
    //load header
    const header = render(
        <StaticRouter>
    <Provider store={store}><Header/></Provider>
    </StaticRouter>
    );  

    const cart = header.getByTestId("cart")

   

    expect (cart.innerHTML).toBe("<li class=\"px-3\">Cart - 0 </li>")


    // check if logo loaded
} )