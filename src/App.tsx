import React, {FunctionComponent} from 'react';
import PokemonList from "./Pages/pokemon-list";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import PokemonDetails from "./Pages/pokemon-details";
import PageNotFound from "./Pages/page-not-found";
import PokemonEdit from "./Pages/pokemon-edit";

const App: FunctionComponent = () => {

    return (
        <Router>
            <div>
                <nav>
                    <div className="nav-wrapper teal">
                        <Link to="/" className="brand-logo center">Pokédex</Link>
                    </div>
                </nav>
            </div>
            <Switch>
                <Route exact path="/" component={PokemonList}/>
                <Route exact path="/pokemons" component={PokemonList}/>
                <Route exact path="/pokemons/edit/:id" component={PokemonEdit}/>
                <Route path="/pokemons/:id" component={PokemonDetails}/>

                <Route component={PageNotFound}/>
            </Switch>
        </Router>
    )
}

export default App;

// ComponentDidMount
// componentDidUpdate
// componentWillUnmount
