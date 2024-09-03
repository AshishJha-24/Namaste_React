import { render,screen } from "@testing-library/react";
import RestoCard from "../RestoCard";
import MOCK_DATA from "../mocks/restoCardmock.json"
import "@testing-library/jest-dom"
import withPromotedLabel from "../RestoCard";

it("should render Restaurant Card Componenet with props data",()=>{
    render(<RestoCard resData={MOCK_DATA}/>);
    const name =screen.getByText("La Pino'z Pizza");

    expect(name).toBeInTheDocument();
})


// it("should render Restaurant Card Componenet with promoted Label",()=>{
//     const PromotedRestoCard=withPromotedLabel(RestoCard);
//     console.log(PromotedRestoCard);
//     render(<PromotedRestoCard  resData={MOCK_DATA} />)
//     const promoted=screen.getByText("Promoted");
//      expect(promoted).toBeInTheDocument();

// })

