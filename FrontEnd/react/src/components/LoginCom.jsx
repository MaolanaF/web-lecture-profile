import React, { useEffect, useState } from "react";
// import axios from "axios";

function LoginCom() {
  return (
    <form>
      {/* Email input */}
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form2Example1">
          Email address
        </label>
        <input type="email" id="form2Example1" className="form-control" />
      </div>
      {/* Password input */}
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form2Example2">
          Password
        </label>
        <input type="password" id="form2Example2" className="form-control" />
      </div>
      {/* 2 column grid layout for inline styling */}
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
        </div>
        <div className="col">
          {/* Simple link */}
          <a href="#!">Forgot password?</a>
        </div>
      </div>
      {/* Submit button */}
      <button type="submit" className="btn btn-primary btn-block mb-4">
        Sign in
      </button>
    </form>
  );
}

export default LoginCom;
