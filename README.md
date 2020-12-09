# Objective

The idea of this app is to simulate an authorization use case using context api.

# Note

Wheneaver we have a change in the `useContext` props, whoever is using it, will receive this change by a re-render.

# App

The app consists of 2 main routes for navigation.

The `SignIn` page, which is going to appear once the user is not logged in the app.

And the `Dashboard`, which should appear once the user clicks on the `SignIn` button.

Keep in mind that the state of the app is being handled by the Context API and the LocalStorage.

# Local Storage

Once the user clicks on the `SignIn` button, we are storing in the `localStorage`, the `user: {}` prop.

On it, it has the value which is a stringfied response comming from the `/service/auth.js` file.

# Dependencies

- `react-router-dom`: for navigation.
- `axios`: for requests.
