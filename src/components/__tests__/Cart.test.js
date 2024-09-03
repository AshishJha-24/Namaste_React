import { render } from "@testing-library/react";
import {act} from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import restorentData from "../mocks/restorentData.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


global.fetch=jest.fn(async ()=>{
    return Promise.resolve({
      json:()=>{
          return Promise.resolve(restorentData);
      }
    })   
  })



it("should load Resturant menu component",async ()=>{
      await act(async () =>render(
      <BrowserRouter>
       <Provider store={appStore}>
      <RestaurantMenu/>
      </Provider>
      </BrowserRouter>
    
    ))
})