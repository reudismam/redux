import React from 'react';
import {useSelector} from 'react-redux';
import {ApplicationState, LoadingState, User} from '../../redux/types';

export function List() {
    const users: User[] = useSelector((state:ApplicationState) => state.users);
    const loading: LoadingState = useSelector((state:ApplicationState) => state.loading);
    const error:string = useSelector((state:ApplicationState) => state.error);

    if (loading.users) {
        return (
            <h1>Nenhum usuário cadastrado</h1>
        );
    } else {
            return (
                <div>
                    {error && <h2 style={{color: "red"}}>{error}</h2>}
                    <h2>Usuários Cadastrados</h2>
                {
                    users.map(v => {
                        return (
                            <div>
                                <div>{`${v.name} - ${v.age}`}</div>
                            </div>
                        )
                    })
                }
                </div>
            )
    }
    
}