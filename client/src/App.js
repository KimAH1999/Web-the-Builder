//imports from pages
import Home from './pages/Home';
import Login from './pages/LogIn';
import Products from './pages/products';
import Success from './pages/Success';
import Contact from './pages/contact';
import NavLink from './components/Nav';
import OrderHistory from './pages/OrderHistory';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import store from './utils/store';
import Profile from './pages/profile';
import { Provider } from 'react-redux';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

  // Construct our main GraphQL API endpoint
  const httpLink = createHttpLink({
    uri: '/graphql',
  });

  // Construct request middleware that will attach the JWT token to every request as an `authorization` header
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  function App() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <Navbar />
            <div className="flex-column justify-flex-start min-100-vh backgroundGradient">
            <div className="flex-column justify-flex-start">
            <Provider store={store}>
              <NavLink />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path= "/products" component={Products} />
                <Route exact path= "/Contact" component={Contact} />
                <Route exact path="/success" component={Success} />
                <Route exact path="/orderHistory" component={OrderHistory} />
                <Route exact path="/products/:id" component={Detail} />
                <Route exact path= "/profile" component={Profile} />
                <Route component={NoMatch} />
              </Switch>
            </Provider>
            </div>
          </div>
        </>
      </Router>
    </ApolloProvider>
    );
  }

export default App;