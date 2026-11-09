# Little Lemon Web Application Instructions

This document outlines the step-by-step instructions for building the semantic structure, React components, navigation, and HTML metadata for the Little Lemon restaurant application.

---

## Part 1: Setting up the HTML document

Step 1: Set up the initial semantic structure
Open your project in Visual Studio Code.

Open the App.js file.

The App component’s root element uses a div element. As this is not a semantic tag, replace it with a React fragment.

Tip: Remember, a fragment starts with a <> tag and ends with a </> tag.

Review your UI/UX and decide how each of the sections of the design will be represented using semantic tags.

Tip: Use the header, nav, main and footer semantic tags.

Inside the fragment, add the semantic tags.

Step 2: Break the sections down into React components
Now that you have planned your semantic structure, it is important to decide which sections will be dynamically updated and if those sections should be child components of the App component.

Tip: For simplicity, you can create a component for each semantic element you added to App.js.

Create a JavaScript file for each semantic element that will be a React component, for example, Header.js, Nav.js, Main.js and Footer.js.

In each component, return the semantic HTML element.

In App.js, replace the semantic tags with the corresponding child components, for example <header></header> will be replaced with <Header/>.

Step 3: Add the logo and navigation elements
The initial components are now set up. You will now add the details for the logo and navigation.

Add the Little Lemon logo to the appropriate React component using the <img> tag.

Add the website navigation to the Nav component. It is important to add a hyperlink for each key page of the website based on your mockup.

Tip: Use a <ul> element and add an <li> element for each <a> hyperlink.

Step 4: Add the footer content
Review your design and add the necessary HTML elements to the footer component.

## Part 2: Adding meta tags and setting up OGP

You will apply the following to the index.html file in your project.

Step 1: Add the appropriate description (meta tag)
Add your own description for your Little Lemon restaurant application:

<meta name="description" content="your text goes here"/>
Step 2: Add the og:title meta tag
Add the Open Graph's title for your Little Lemon restaurant application, inside the double quotes in the content HTML attribute:
<meta name="og:title" content=""/>
Step 3: Add the og:description meta tag
Add your own description for your Little Lemon restaurant application, inside the double quotes in the content HTML attribute:
<meta name="og:description" content=""/>
Step 4: Add the og:image meta tag
Add your own Open Graph image for your Little Lemon restaurant application, inside the double quotes in the content HTML attribute:
<meta name="og:image" content=""/>

## Part 3 :Setting up the CSS layout

Step 1: Set up the CSS rules
Based on the mockup, decide if you will use a CSS Grid or Flexbox Layout

Open the app.

Based on the mockup, add the required CSS Grid or Flexbox rules to the file.

Tip: If you are unsure which rules to add, refer to the
Grids and Flexbox cheat sheet
lesson item.

Step 2: Apply the CSS rules to HTML elements
Open the index.html file and apply the CSS rules to the HTML elements.

Open your previously created component files and apply the CSS rules to the HTML elements.

## Part 4 : Styling elements

Step 1: Consider your Figma design and wireframe
Inspect the design and mockup for your app. During your evaluation, you may consider:

What is the common theme across your site?

What are the colors?

What are the font sizes?

What are the responsive design considerations?

Will your HTML elements (including images) have the border radius set to 0 or will it be somewhat rounded?

Will your divs, articles, asides and other tags have a CSS shadow?

What other CSS properties you can think of?

Step 2: Style the HTML headings, paragraphs and spans
Bearing in mind design considerations, style your headings, paragraphs and spans, namely, the following elements:

h1, h2, h3, h4, h5 and h6

p

span

Step 3: Style the navigation elements
Bearing in mind design considerations, style your navigation elements, namely:

nav

ul

li

Step 4: Style your images
Bearing in mind design considerations, style your images, that is, the img tag.

Note: You might need to come back to this task again and again as you develop the app and fine-tune the styling.

Step 5: Apply the rules to existing HTML elements
Open your previously created component files and apply the CSS rules to the HTML elements.

Step 6 : Git commit -m "...."

## Part 5 : Setting up the app components

Step 1: Recognize components to build, using your design
Map, 1-to-1, the components you have in Figma. Here is an example of the components that could be built for the web app's homepage layout:

Nav (the top-level navigation of the website, sometimes referred to as the navbar)

CallToAction (sometimes referred to as the jumbotron or the hero, this component is the call-to-action section that guides the user to click a call-to-action button while enticing them to do so in as few words as possible)

Homepage (the component for the homepage)

Specials (the component that loops over the specials that come from a data source)

CustomersSay (testimonials, including star ratings, customer images and customer details)

Chicago (the component that describes the Little Lemon Chicago restaurant and gives a short backstory for it)

BookingPage (the component for the table reservations page)

Step 2: Set up the Navigation
Now that your components are set up, the next step is to add the navigation and routes.

Update the hyperlinks in your navbar to use the Link component.

In the Main component you created in the previous exercise, add the Routes component and define a route for each page. For example:

1234
<Routes> 
<Route path="/" element={<HomePage />}></Route>
<Route path="/booking" element={<BookingPage />}></Route>
</Routes>
 Step 3: Code the first version of the homepage's components
Now that you've identified the components that your homepage needs to have, code some simple components for the page.

Note: At this point, all that you need to have are the images and text.

Step 4: Style the homepage components
Style the components that you've coded for the homepage using the style guide. You may choose to style the following using CSS rules that you’ve previously created, or, update the rules as necessary.

Font size

Color

Background

Line-height

Letter-spacing

Grid

Flex

Display

Border

Border radius

Note: Keep in mind that you may need to set aside sufficient time for styling. Styling these components will take some time, maybe even a few hours.

Step 5 : git commit -m "...."

## Part 6 : Defining the Bookings page

Step 1: Check the component and routes
If you haven’t done so already, create the BookingForm and BookingPage components. The BookingPage will contain the BookingForm component, in addition to any additional content before and after the form.

Note: Before proceeding to the next step, check that your routes and navigation bar are set up to allow navigation to the booking page.

Step 2: Code the form structure
Next, you’ll need to build the form structure in the BookingForm component. You can use the following plain HTML5 implementation as a starting point, however, you should convert it to JSX so that you can later connect the input to the React state.

<form style="display: grid; max-width: 200px; gap: 20px">
   <label for="res-date">Choose date</label>
   <input type="date" id="res-date">
   <label for="res-time">Choose time</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests">
   <label for="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation">
</form>

Note: Keep in mind the difference between the for attribute in HTML and htmlFor in JSX. Also, remember to self-close all tags in JSX.

Step 3: Code the form behavior
Using what you already know about events, effects and state in React, update your form's code to keep track of its own state.

Define a state variable for field in the form.

Connect each state variable to the form fields using the value and onChange form element attributes.

The options in the booking time field should be displayed from a list of available times. For now, create a stateful array in the component named availableTimes and use this state variable to populate the time select field options.

Tip: Use the useState function to declare the variable.

Now that the state is connected to the input elements, the form is ready to communicate with an API, a task you may complete in future.

## Part 7 : Adding table booking state

Step 1: Life state up to the Main component
As you added the table booking state to the BookingForm component in the previous exercise, in this exercise, you need to lift the state up to the Main component. This is the preferred approach in this case, as your app is relatively simple.

Move the availableTimes useState hook from the BookingForm component into the Main component

Pass down the state and state changing functions from the Main component to the BookingForm component using props in order to make state work across different components.

Step 2: Update BookingForm to display available times based on the selected date
The next step is to prepare the available times to be updated based on the date the user has selected. To do this, you will change the availableTimes state to a reducer.

In the Main component, create a function named updateTimes which will handle the state change. This function will change the availableTimes based on the selected date. For now, the function can return the same available times regardless of the date.

Next, create a function called initializeTimes which will create the initial state for the availableTimes.

Then, change availableTimes to a reducer using the useReducer function and provide the two previous functions as parameters.

Update the BookingForm component to dispatch the state change when the date form field is changed.

Tip: Include the newly selected date in the dispatch parameter.

## Part 8: Adding unit tests

Step 1: Test for some static text being rendered in the BookingForm component
Using your mockups, pick a part of the BookingForm component that has some static text, such as a heading or label.

In preparation for coding a test of this static test, review the following starting code for a test, based on an example in the
Writing the first test for your form
lesson referenced earlier:
import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
render(<BookingForm />);
const headingElement = screen.getByText("Book Now");
expect(headingElement).toBeInTheDocument();
})

Keeping in mind the above example, code a test for the static text being rendered in the BookingForm component, using code like this:
screen.getByText("BookingForm");

Note: You will need to adjust the code based on what you've decided your Bookings component should render.

Step 2: Test the updateTimes and initializeTimes functions
The next step is to validate the behavior of the updateTimes and initializeTimes reducer functions.

Write a unit test for the initializeTimes function to validate that it returns the correct expected value.

Write a unit test for the updateTimes function to validate that it returns the same value that is provided in the state. This unit test is important as it will be updated later when the logic of changing the available times based on the selected date is implemented.

## Part 9 : Connecting the bookings page to the API

Step 1: Set up the API library
To prepare for the completion of this exercise, you need to include the API JavaScript file in your code.

Add the following code to your index.html.

<script src="https://raw.githubusercontent.com/courseraap/capstone/main/api.js"></script>

The API has two functions that you can use in your code:

fetchAPI(date) - This function accepts a date as a parameter and returns an array of available reservation times for the provided date

submitAPI(formData) - This function accepts the booking form data as a parameter and will return true if the data was successfully submitted.

Step 2: Update the booking form to display the available times from the API
Update the initializeTimes function that you previously created to use the fetchData API function to return the available times for today’s date.

Tip: You can create a Date object to represent today’s date.

Update the updateTimes function that you previously created to use the fetchData API function. Remember, you dispatched the selected date to the updateTimes function. This should be passed to the fetchData function as a parameter.

Step 3: Test the behavior

Run your web app and check that the available times on the booking form change when you select a different date.

## Part 10 : Submitting the new booking page to the API

Step 1: Set up a booking confirmation page
Create a component named ConfirmedBooking that will represent the booking confirmation page.

Add JSX to display a message that the booking has been confirmed.

Add a route that will allow navigation to the booking confirmation page.

Step 2: Set up the function for submitting the form
In the Main component, set up a function named submitForm that accepts the form data as a parameter and will submit it to the submitAPI (formData) API set up in the previous exercise.

If the submitAPI(formData) API call returns true, navigate to the booking confirmed page.

Tip: You can use the
useNavigate() hook
to navigate via code.

Step 3: Update the submit event handler
Pass the submitForm function to the BookingForm component via props.

Update the button submit event handler to call the submitForm function, passing the form data as a parameter.

## Part 11 : Update the unit tests for the API queries

Step 1: Update the test for initializeTimes
Now that the initializeTimes function calls the fetchAPI function, the unit tests need to be updated. In fact, if you run the tests now, you will discover that the existing test is failing. For testing purposes, the fetchAPI function will return a non-empty array of available booking times.

Step 2: Update the test for updateTimes
Similar to the previous step, the test you previously created for updateTimes will fail. You will need to update the test to include a pre-selected date as part of the dispatch data.

Step 3 : git commit -m "..."

## Part 12 : Adding form validation

Step 1: Implement HTML5 validation
For each form input field, consider what HTML5 validation can be applied. For example, the user should not be able to reserve a table for less than one person.

Apply the validation to each form input field in BookingForm.

Step 2: Implement client-side validation using React
After applying the HTML5 validation, consider which input fields could use further validation via JavaScript and React. For example, the submit button should be disabled if the form input fields are invalid.

Tip: Use events to detect field changes and submit button clicks.

## Part 13 : Adding unit tests for the form validation and submission

Step 1: Validate the HTML5 validation is applied
In a previous exercise, you implemented unit tests to test that the HTML content returned from a component was correct.

Review the previous exercise and the HTML validation you added to the form input fields.

For each input field, add a unit test to validate that the correct attributes are applied to the HTML element.

Step 2: Add unit tests for JavaScript validation functions

In the previous exercise, you implemented JavaScript functions to validate the form input fields.

Using the React testing library, implement unit tests to verify both the valid and invalid states for these functions.

It is important to add a unit test for both valid and invalid states to ensure good test coverage of your code. Without this, there is a risk of a bug existing in a code path that is not tested.

## Part 14 : Ensuring your application is accessible to users

Step 1: Improving the semantic markup you're using
Improve your app accessibility by improving the semantic markup you’re using.

Note: This step's completion will depend on how much work you've already done on making your app's code semantic in the previous lesson items that were dedicated to this specific goal.

Step 2: Use ARIA attributes
Improve app accessibility by using ARIA attributes

Add at least the aria-label attribute and set it to On Click, as follows:

aria-label="On Click"

Tip: Remember, the aria-\* attributes are an exception to the rule that all JSX properties and attributes use camelCase. In the case of ARIA attributes, it's proper JSX syntax to use the hyphen-cased syntax, just like in plain HTML.

Note: This step's completion will also depend on how much attention you've paid to the semantic structure of your app in the previous exercises.

Step 3: Labeling forms
To improve the accessibility of your forms, use the label element and the HTML For attribute, which maps to the id attribute of the actual form item, such as an input.

Note: This is important because it allows users to click on a specific form input label, and it will automatically focus into the given form input.
