import { useEffect, useState } from 'react';
import { bowler } from './types/bowlers';

function BowlerList() {
  const [bowlers, setBowlers] = useState<bowler[]>([]);

  useEffect(() => {
    //   Asyncronous call; update the food list
    const fetchBowler = async () => {
      const response = await fetch('http://localhost:4000/Bowler');
      const data = await response.json();
      setBowlers(data);
    };

    fetchBowler();
  }, []);

  return (
    <>
      <h1>Bowler Information</h1>
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
          {bowlers.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {`${b.bowlerFirstName ?? ''} ${b.bowlerMiddleInit ?? ''} ${b.bowlerLastName ?? ''}`.trim()}
              </td>
              <td>{b.teamID ?? ''}</td>
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
