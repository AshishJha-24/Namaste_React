
import Body from "../Body"
import { screen,render, fireEvent } from "@testing-library/react"
import MOCK_DATA from "../mocks/mockResListData.json"
import {act} from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});


test('should search res list for burger text input ', async () => {

    await act(async ()=>{
        render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
        );
    })

    const searchBtn= screen.getByRole("button",{name:"Search"});


const cardsBeforeSearch=screen.getAllByTestId("resCard");

expect(cardsBeforeSearch.length).toBe(20)
    
   const searchInput=screen.getByTestId("searchInput");
   fireEvent.change(searchInput,{target:{value:"burger"}});
   fireEvent.click(searchBtn);
   //screen should load 2 cards

   const cardsAfterSearch = screen.getAllByTestId("resCard");
   expect(cardsAfterSearch.length).toBe(2);

    
    
})




test('should filter top rated Restuarant  ', async () => {

    await act(async ()=>{
        render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
        );
    })

   

const cardsBeforefilter=screen.getAllByTestId("resCard");

expect(cardsBeforefilter.length).toBe(20)
const topRatedButton= screen.getByRole("button",{name:"Top Rated Restaurant"});

  fireEvent.click(topRatedButton);


 

   const cardsafterfilter = screen.getAllByTestId("resCard");
   expect(cardsafterfilter.length).toBe(15);

    
    
})
