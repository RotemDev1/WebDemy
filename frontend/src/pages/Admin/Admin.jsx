import React from 'react'
import { Panel } from '../../components/Admin/Panel.jsx';
import { Details } from '../../components/Admin/Details.jsx';

export const Admin = () => {
    return (
        <div className="admin">
            <header>
                <h4>Panel Admin</h4>
            </header>
            <main>
                <Details />
                <Panel />
            </main>
        </div>
    )
}
