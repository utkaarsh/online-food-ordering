import { render,screen,fireEvent,act } from "@testing-library/react";
import { Provider } from "react-redux"
import appStore from "../utils/store/AppStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

import Header from "../components/Header"
it("Should load header component with login button",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    )
const loginButton=screen.getByRole("heading",{name:"Hi Default User"})

expect(loginButton).toBeInTheDocument()

})

test("Should render header component with a cart in the tab",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
        )   
    
        const cart=screen.getByText(/Cart/);
        expect(cart).toBeInTheDocument();
})

test("Should check if logout buttons loads on click of profile button",()=>{
    act(()=>{
       let component;
       act(()=>{
        component= render(
            <BrowserRouter>
            <Provider store={appStore}>
            <Header />
            </Provider>
            </BrowserRouter>
            )
       })
    }) 
        const loginButton=screen.getByRole("heading",{name:"Hi Default User"})
        fireEvent.click(loginButton)

        const logOutButton=screen.getByText("Sign out");
        expect(logOutButton).toBeInTheDocument();
})
