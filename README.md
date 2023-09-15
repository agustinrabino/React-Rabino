# App designed for the course React JS from Coderhouse

**This project was created using Create react app and the dependencies intalled include react-bootstrap, react-dom, react-router-dom, react-toastify and firebase.**

**The goal was to learn and apply react-js library into a comprehensive app.**

## Layout of the App

The app has 6 main views, 4 of them present in the nav bar, plus a Checkout view and an Item details view.

These views are mounted to the main 'App.js' thorugh the react-router dependency. 

#### *All Components were optimized to avoid monolithic components.*

-The Home page (link in logo) directs you to the main hero section showing a carousel with the most important product and 2 call to action buttons.

-The Products page requests data from firestore database and maps the collection into the component 'Item.jsx'. 

-The component 'Item.jsx' is a card which displays an image of the product, can add the item to the cart, and is as a button for mounting the 'ItemDetailsContainer.jsx' using 'useParams()'.

-The categories page maps the firestore database by category using a react-bootstrap accordions style menu.

-Lastly, the 'ShoppingCartWidget.jsx' displays a react-bootstrap Modal which is interactive. You can modify the 'shoppingCartContext.jsx' by adding or removing items, and mounts the last view 'ShoppingCartCheckout.jsx' using the checkout button. This view is in charge of sending the order to firebase and updating the stock in the collection. 