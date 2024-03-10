import React from 'react';

export const Offer = (props) => {
  return (
    <div className="container">
      <div className="row pb-3">
        <div className="col-xs-12 col-md-12">
          <div className="about-text">
            <h2>AVAILABLE OFFERS IN GHANA</h2>
            <p>
              Buy an MTN bundle offer of 15GB, 600 mins airtime CUG, 150 mins on-net and 300 SMS for only GHS60 per
              quarter.
            </p>
            <p>Buy a Vodafone (Telecel) regular bundle offer of 10GB anytime.</p>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th></th>
                    <th>MTN Quarterly Bundle</th>
                    <th>Vodafone Regular Bundle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data</td>
                    <td>15GB</td>
                    <td rowSpan={5}>10GB</td>
                  </tr>
                  <tr>
                    <td>Airtime CUG</td>
                    <td>600 Mins</td>
                  </tr>
                  <tr>
                    <td>Airtime On-Net</td>
                    <td>150 Mins</td>
                  </tr>
                  <tr>
                    <td>SMS</td>
                    <td>300</td>
                  </tr>
                  <tr>
                    <td>Other</td>
                    <td>
                      <b>MTN provides a free 45GB</b> quarterly data with a daily limit of 500MB to each subscribing
                      student, fresh graduates and faculty staff member for browsing Academic Sites to be whitelisted
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <b>
                {' '}
                Each of the above bundles comes with an annual educational insurance cover (underwritten by OLDMUTUAL)
                of GHS7,500.00
              </b>{' '}
              to be paid to each subscribing student who loses a parent or guardian or whose parents/guardian becomes
              permanently disabled whilst a GHS2,500 will be paid to the parents or guardian of any subscribing student
              who passes on or becomes permanently disabled.
            </p>
            <p>
              Students should click on to{' '}
              <a href="https://mykowri.app.link/k2EqBtBf2Gb" target="_blank">
                https://mykowri.app.link/k2EqBtBf2Gb
              </a>{' '}
              to buy the above bundles.
            </p>

            <p>
              Faculty Staff Members and recent graduates should click on{' '}
              <a href="https://mykowri.app.link/cxYnYhCJjHb" target="_blank">
                https://mykowri.app.link/cxYnYhCJjHb
              </a>{' '}
              to buy the above bundles
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
