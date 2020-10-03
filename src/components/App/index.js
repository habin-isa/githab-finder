import React from 'react';
import * as S from './styles';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { API_KEY } from '../../config.json';
// import { string } from 'prop-types';

const App = () => {
  const TOKEN = API_KEY;

  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.github.com/graphql',
      headers: {
        Authorization: `token ${TOKEN}`
      }
    }),
    cache: new InMemoryCache()
  });

  return (
    <S.Wrapper>
      {' '}
      <ApolloProvider client={client}>
        <div>githab-finder</div>
      </ApolloProvider>
    </S.Wrapper>
  );
};

export default App;

// If props were drilled into App component
// E.g. const App = ({ propName, propTwo })

// App.propTypes = {
//   propName: string,
//   propTwo: string.isRequired
// };

// App.defaultProps = {
//   propName: 'Kimmy'
// };
