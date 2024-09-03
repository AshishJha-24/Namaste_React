import { render ,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Conatact Us Page test case",()=>{

  beforeAll(()=>{
    console.log("Before all");
  })
  afterAll(()=>{
    console.log("Before all");
  })
  
  beforeEach(()=>{
  console.log("Each test case")
})
  afterEach(()=>{
  console.log("Each test case")
})
it("should load contact us Component", ()=>{
 

    render (<Contact/>)
  const heading =  screen.getByRole("heading");
  // Assertion 
    expect(heading).toBeInTheDocument();
});

it("should load Button inside contact Component", ()=>{
 
 render (<Contact/>)
  const button =  screen.getByRole("button");
  // Assertion 
    expect(button).toBeInTheDocument();
});


it("should load input name  inside contact Component", ()=>{
 

    render (<Contact/>)
  const inputName =  screen.getByPlaceholderText("Name");
  // Assertion 
    expect(inputName).toBeInTheDocument();
});


it("Should load 2 input boxes on the contact Component ", ()=>{
    render(<Contact/>);
    const inputBoxes = screen.getAllByRole("textbox");


    expect(inputBoxes.length).toBe(2);
})





})

