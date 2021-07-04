import React, {useState} from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
// import { useDispatch } from 'react-redux';
// import { actionCreators } from '../state';


const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("")
  // const dispatch = useDispatch();
  const {searchRepositories} = useActions();
  const {data, error, loading} = useTypedSelector((state) => state.repositories);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(actionCreators.searchRepositories(term));
    searchRepositories(term);
  }

  return (
    <div>
      <form
        onSubmit={onSubmit}
      >
        <input 
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading 
      && data.map(name => <div key={name}>{name}</div>)}
    </div>
  )
}

export {RepositoriesList}