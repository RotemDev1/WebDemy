import React, { useState, useEffect } from 'react'
import { entityList } from '../../data/system';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { adminRoutes } from "../../routes";
import { useHistory } from "react-router";

export const Panel = () => {
    const history = useHistory();

    const [selectedEntity, setSelectedEntity] = useState(entityList[0].title);
    let initialBlock = true;

    useEffect(() => {
        if (initialBlock) {
            const url = `/admin/${selectedEntity}`;
            console.log(url);
            history.push(url)
        }
        // initialBlock = false
    }, [selectedEntity]);


    return (
        <div className="panel">
            <div className="header">
                <h4>
                    {selectedEntity.title}
                </h4>
            </div>
            <div className="leftPanel">
                <ul>
                    {entityList.map((entity, index) => <li key={index} onClick={(entity) => { setSelectedEntity(entity.target.textContent) }}>{entity.title}</li>)}
                </ul>
            </div>
            <div className="rightPanel">
                <Router>
                    <Switch>
                        {adminRoutes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                            />
                        ))}
                    </Switch>
                </Router>
            </div>
        </div>
    )
}
