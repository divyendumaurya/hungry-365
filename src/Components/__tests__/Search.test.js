import Body from "../Body"
import { render,waitFor, fireEvent } from "@testing-library/react"
import store from "../../Utils/store";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import {RESTAURANT_DATA} from "../../mocks/data"
import '@testing-library/jest-dom';



test("Shimmer should load on Homepage" ,()=>{

    global.fetch = jest.fn(()=>{
       return Promise.resolve({
            json: ()=>{
                return Promise.resolve(RESTAURANT_DATA)
            } });
    })

   const body= render (<StaticRouter>
    <Provider 
        store={store}>
            <Body/>
            </Provider>
            </StaticRouter>);


  expect (body.getByTestId("shimmer"))

const shimmer = body.getByTestId("shimmer")

expect(shimmer.children.length).toBe(10);

console.log(shimmer);

})
;


test("Restaurants should load on Homepage" , async()=>{

   

   const body= render (<StaticRouter>
    <Provider 
        store={store}>
            <Body/>
            </Provider>
            </StaticRouter>);


await waitFor(()=> expect (body.getByTestId("search-btn")))

const resList = body.getByTestId("res-list")

expect(resList.children.length).toBe(0);

console.log(resList);
})
test("Search for string(food) on Homepage" , async()=>{

   

   const body= render (<StaticRouter>
    <Provider 
        store={store}>
            <Body/>
            </Provider>
            </StaticRouter>);


await waitFor(()=> expect (body.getByTestId("search-btn")))


const input =body.getByTestId("search-input");

fireEvent.change(input, {
    target :{
        value: "nation",
    }
});

const searchBtn =body.getByTestId("search-btn");

fireEvent.click(searchBtn)

const resList = body.getByTestId("res-list")

expect(resList.children.length).toBe(2);

console.log(resList);
})