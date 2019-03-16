import React from 'react';

const About = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-9 mx-auto">
          <div className="card bg-dark text-white">
            <div className="card-header">
              <h2>
                How to use <i className="fas fa-question-circle" />
              </h2>
            </div>
            <div className="card-body">
              You have to signup for create a user and then signin to use this
              web application, You can ADD/EDIT/DELETE your customer also update
              sale target in this month.
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-9 mx-auto mt-5">
          <div className="card bg-dark text-white">
            <div className="card-header">
              <h2>
                Information <i className="fas fa-exclamation-circle" />
              </h2>
            </div>
            <div className="card-body">
              This application buit and developed by Paphob
              Aneakpoonsinsuk.Using React and Redux and Firebase to
              developped.This aplication have a full CRUD operation by making
              request on Firestore, In this aplication I used Firebase to manage
              Authorization.
            </div>
            <div className="card-footer">
              <a
                href="https://github.com/PaphobGun/clientmanager"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info"
              >
                Repository
              </a>{' '}
              Here is link to github repository.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
