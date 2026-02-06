import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/countries'

const fetchCountries = async () => {
  const resp = await fetch("https://openapi.programming-hero.com/api/all");
  return resp.json();
}

function App() {
  const promiseCountries = fetchCountries();
  return (
    <>
      <h1>Country List</h1>
      <Suspense fallback={<h3>Countries coming..</h3>}>
        <Countries promiseCountries={promiseCountries} />
      </Suspense>
    </>
  );
}

export default App
