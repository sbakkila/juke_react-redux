import React from 'react';
import {Link} from 'react-router';

export default function Stations (props) {
  console.log(props);

  const stations = Object.keys(props.stations);
  console.log('stations ', stations);

  return (
     <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        stations.map(station => {
          return (
            <div className="list-group-item" key={station}>
              <Link to={'fill/me/in/later'}>{station}</Link>
            </div>
          );
        })
      }
      </div>
    </div>
  );

}
