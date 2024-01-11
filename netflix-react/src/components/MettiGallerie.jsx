/* import React, { Component } from 'react'
import { Container, Spinner, Alert,} from 'react-bootstrap'
import scrolla from './scrolla';

export default class UsersComponent extends Component {

state = {
    users: [],
    isLoading: false,
    errMsg: false
}



componentDidMount() {
    this.setState({
      isLoading: true
    });

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          this.setState({
            users: data,
            isLoading: false
          });
        }, 2000);
      })
      .catch(error => {
        console.error(error);
        this.setState({
          isLoading: false,
          errMsg: true
        });
      });
  }

  render() {
    return (
      <Container>
      <h1>User List</h1>
      
      {this.state.isLoading && <Spinner animation="border" />}
      
      {this.state.errMsg &&
        <Alert variant="warning">
          Si è verificato un errore nel caricamento dei dati
        </Alert> 
      }

        <div>
          {this.state.users.map(u => (
            <h1 key={u.id} >
              {u.name}
            </h1>
          ))}
        </div>
    </Container>
    )
  }
}
 */

import React, { Component } from 'react'
import { ListGroup, Container, Spinner, Alert,} from 'react-bootstrap'
import scrolla from './scrolla';
import MettiFilm from './MettiFilm'

export default class UsersComponent extends Component {

state = {
    movies: [],
    isLoading: false,
    errMsg: false
}



componentDidMount() {
    this.setState({
      isLoading: true
    });

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.setState({
            movies: json.Search,
            isLoading: false
          });
        }, 2000);
      })
      .catch(error => {
        console.error(error);
        this.setState({
          isLoading: false,
          errMsg: true
        });
      });
  }

  render() {
    return (
      <Container>      
      {this.state.isLoading && <Spinner animation="border" />}      
      {this.state.errMsg &&
        <Alert variant="warning">
          Si è verificato un errore nel caricamento dei dati
        </Alert> 
      }
        <MettiFilm/>
    </Container>
    )
  }
} 