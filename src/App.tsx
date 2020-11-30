import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { List } from './components/List';
import { getUsers } from './data/users';
import {useDispatch} from 'react-redux';
import {loadUsersSuccess, loadUsersRequest, loadUsersError} from './redux/actions';

function App() {
  const dispath = useDispatch();
  useEffect(()=> {
    dispath(loadUsersRequest());
    const users = getUsers()
    .then((users) => {
      dispath(loadUsersSuccess(users));
    })
    .catch(error => {
      dispath(loadUsersError("Erro ao tentar carregar os usuários"));
    });
  }, []);
  return (
    <div className="App">
        <Form />
        <List />
    </div>
  );
}

export default App;
