import { useEffect, useState } from 'react';
import { bowler } from './types/bowlers';

function BowlerList() {
  const [bowlers, setBowlers] = useState<bowler[]>([]);

  //   Make it so it doesn't overload the server
  useEffect(() => {
    //   Asyncronous call; update the food list
    const fetchBowler = async () => {
      const response = await fetch('http://localhost:4000/Bowler');
      const data = await response.json();
      setBowlers(data);
    };

    fetchBowler();
  }, []);

  //   Home page info
  return (
    <>
      <h1>Bowler Information</h1>
      <h2>Here is a list of all members on the Marlins and Sharks teams!</h2>
      <h3>Made by Emma Helquist, Section 4</h3>
      <table>
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {/* Grab all the bowler information */}
          {bowlers.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {`${b.bowlerFirstName ?? ''} ${b.bowlerMiddleInit ?? ''} ${b.bowlerLastName ?? ''}`.trim()}
              </td>
              <td>{b.team?.teamName ?? 'No Team Assigned'}</td>
              <td>{b.bowlerAddress ?? ''}</td>
              <td>{b.bowlerCity ?? ''}</td>
              <td>{b.bowlerState ?? ''}</td>
              <td>{b.bowlerZip ?? ''}</td>
              <td>{b.bowlerPhoneNumber ?? ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
