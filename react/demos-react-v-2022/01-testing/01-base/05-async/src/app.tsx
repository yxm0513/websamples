import * as React from 'react';
import { getMembers } from './api';
import { mapMemberListFromApiToVm } from './mapper';

export const App: React.FunctionComponent = () => {
  React.useEffect(() => {
    getMembers()
      .then((members) => {
        console.log(mapMemberListFromApiToVm(members));
      })
      .catch((error) => console.log(error));
  }, []);

  return <h1>Look down the dev console 👇</h1>;
};
