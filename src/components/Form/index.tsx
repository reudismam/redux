import React, { FormEvent, useState } from 'react';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {loadUsersError, loadUsersSuccess} from '../../redux/actions';
import { ApplicationState, User } from '../../redux/types';

export default function Form() {
    const users:User[] = useSelector((state:ApplicationState) => state.users);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const dispatch = useDispatch();

    function handleSubmit(event:FormEvent) {
        alert("cadastrando um novo usuário!!");
        event.preventDefault();
        if (Number(age) < 0) {
            dispatch(loadUsersError("Não é possível cadastrar um usuário com idade de negativa."));
        }
        else {
            const data:User = {
                name,
                age: Number(age)
            };
            dispatch(loadUsersSuccess([...users, data]));
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
            <input 
                type="number" 
                value={age}
                onChange={(e) => setAge(e.target.value)}/>
            <button type="submit">
                Adicionar
            </button>
        </form>
    );
}