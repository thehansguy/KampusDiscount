import React from 'react';

export const Brand = (props) => {
  return (
    <div className="container">
      <div className="row pb-3">
        <div className="col-xs-12 col-md-12">
          <div className="about-text">
            <h2>{props.data ? props.data.title : 'loading...'}</h2>
            <p>{props.data ? props.data.p1 : 'loading...'}</p>
            <p>{props.data ? props.data.p2 : 'loading...'}</p>
            <p>{props.data ? props.data.p3 : 'loading...'}</p>
            <p>{props.data ? props.data.p4 : 'loading...'}</p>
            <p>{props.data ? props.data.p5 : 'loading...'}</p>
            <p>{props.data ? props.data.p6 : 'loading...'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
