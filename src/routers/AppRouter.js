import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AboutPage from '../components/About';
import LoginPage from '../components/LoginPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import notFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';




// These are all placeholders for components that haven't been defined yet
const CreateAccountPage = () => (
    <div>
        <p>
            This is from my createAccount page
        </p>
    </div>

);

const ResultsPage = () => (
    <div>
        <p>
            This is from my Results page
        </p>
    </div>

);

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component ={ExpenseDashboardPage}  exact={true}/>
            <Route path="/about" component ={AboutPage} />
            <Route path="/create" component ={AddExpensePage} />
            <Route path="/login" component ={LoginPage} />
            <Route path="/edit/:id" component ={EditExpensePage} />
            <Route component ={notFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;