import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render ,screen} from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


it("should loead Header Component with a login button ", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button",{name:"Login"});
// const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});


it("should loead Header Component with a cart item 0 ", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText("Cart 0");
// const loginButton = screen.getByText("Login");
  expect(cartItem).toBeInTheDocument();
});

it("should loead Header Component with a cart ", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText(/Cart/);
// const loginButton = screen.getByText("Login");
  expect(cartItem).toBeInTheDocument();
});
it("should change login  Button to Logout on click ", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button",{name:"Login"});
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button",{namem:"Log Out"});
  expect(logoutButton).toBeInTheDocument();
});
