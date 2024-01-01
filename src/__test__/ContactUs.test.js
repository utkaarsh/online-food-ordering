import ContactUs from "../components/ContactUs";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test('Should Load Contact us Component', () => {
     render(<ContactUs />)
     
     const heading=screen.getAllByRole("heading");
     
     //Assertion
     heading.forEach((heading) => {
        expect(heading).toBeInTheDocument();
      });
    })

    test('Should Load Buttons present in Contact us Component', () => {
        render(<ContactUs />)
        
        const buttons=screen.getByRole("button");
        
        //Assertion
        expect(buttons).toBeInTheDocument();

       })    