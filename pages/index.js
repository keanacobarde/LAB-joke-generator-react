import { useState } from 'react';
import Joke from '../components/Joke';
import getJoke from '../api/jokeData';

function Home() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get A Joke');

  const getAJoke = () => {
    getJoke().then((obj) => setJoke({
      setup: obj.setup,
      delivery: obj.delivery,
    }));
    setBtnText('Get a Punchline');
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Get a Joke!</h1>
      <Joke joker={joke} btnText={btnText} />
      {btnText === 'Get A Joke' || btnText === 'Get A New Joke' ? (<button type="button" onClick={getAJoke}> {btnText} </button>) : (<button type="button" onClick={() => setBtnText('Get A New Joke')}> {btnText} </button>) }
    </div>
  );
}

export default Home;
