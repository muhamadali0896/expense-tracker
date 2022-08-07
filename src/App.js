import React,{useState, useContext, useEffect, useCallback} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

import Login from './components/Login/Login';

import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

const App = () => {
  
  const ctx = useContext(AuthContext);
  const [expenses, setExpenses] = useState([]);

  const fetchMoviesHandler = useCallback(async () => {
    try {
      const response = await fetch('https://myexpensetracker-6eddb-default-rtdb.firebaseio.com/my_expenses.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedExpenses = [];

      for (const key in data) {
        loadedExpenses.push({
          id: key,
          title: data[key].title,
          category: data[key].category,
          amount: data[key].amount,
          date: new Date(data[key].date),
        });
      }

      setExpenses(loadedExpenses);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);



  



  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const updateExpenseHandler=(updatedExpenses)=>{
    setExpenses(updatedExpenses);
  }

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
      <React.Fragment>
      <MainHeader onLogout={ctx.onLogout} />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onUpdatedItems={updateExpenseHandler} />
    </div>}
      </main>
      </React.Fragment>

    
  );
};

export default App;
