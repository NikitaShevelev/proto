import { Layout } from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';


const store = setupStore()

export const App = () => {

  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
