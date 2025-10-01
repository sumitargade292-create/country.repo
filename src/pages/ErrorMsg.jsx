import {  NavLink,useRouteError } from "react-router-dom"


export const ErrorMsg=()=>{
  const error=useRouteError();
  return (
      <div>
        <h1> OOPS ERROR IS BACK</h1>
        {error && <p>{error.data}</p>}
        <NavLink to="/">
          <button> Go home</button>
        </NavLink>

      </div>
  );
};