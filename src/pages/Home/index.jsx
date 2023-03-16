import { useEffect, useState } from 'react';
import '../../App.css';
import ListItem from '../../components/ListItem';


export default function App() {
  const [candidates, setCandidates] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/candidates`)
      .then((response) => response.json()
      .then((res)=>setCandidates(res))
      .catch(error=>console.log(error)))
  },[])

  return (
    <div className="App">
      {candidates?.map(candidate => (
        <ListItem
          key={candidate.id}
          lastName={candidate.lastName}
          firstName={candidate.firstName}
          profileTitle={candidate.profileTitle}
        />
      ))}
    </div>
  );
}
