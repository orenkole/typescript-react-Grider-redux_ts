import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
// import { useDispatch } from 'react-redux';
// import { actionCreators } from '../state';


const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("")
  // const dispatch = useDispatch();
  const {searchRepositories} = useActions();
  const {data, error, loading} = useSelector((state) => state.repositories);

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
    </div>
  )
}

export {RepositoriesList}