#Instructions 
Step 1: Set up the initial semantic structure

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



Instructions
You will apply the following to the index.html file in your project.

Step 5: Add the appropriate description (meta tag)
Add your own description for your Little Lemon restaurant application:


<meta name="description" content="your text goes here"/>
Step 6: Add the og:title meta tag
Add the Open Graph's title for your Little Lemon restaurant application, inside the double quotes in the content HTML attribute:


<meta name="og:title" content=""/>
Step 7: Add the og:description meta tag
Add your own description for your Little Lemon restaurant application, inside the double quotes in the content HTML attribute:


<meta name="og:description" content=""/>
Step 8: Add the og:image meta tag
Add your own Open Graph image for your Little Lemon restaurant application, inside the double quotes in the content HTML attribute:
<meta name="og:image" content=""/>