import React from 'react';

const Stats = () => {
  return (
    <section className="stats" id="education">
      <div className="stats-container">
        <div className="stats-heading">
          <h1>EDUCATION</h1>
        </div>
        <div className="stats-cards">
          <div className="stats-card">
            <h3>BACHELOR OF ENGG (AI&amp;DS)</h3>
            <p>CHAITANYA BHARATHI INSTITUTE OF TECHNOLOGY</p>
            <p><mark>C.G.P.A : 9.17</mark></p>
          </div>
          <div className="stats-card">
            <h3>DIPLOMA IN COMPUTER ENGG</h3>
            <p>GOVERNMENT POLYTECHNIC - GADWAL</p>
            <p><mark>C.G.P.A : 9.03</mark></p>
          </div>
          <div className="stats-card">
            <h3>SECONDARY EDUCATION</h3>
            <p>ABHYUDAYA PATASHALA - DOMAKONDA</p>
            <p><mark>G.P.A : 9.50</mark></p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .stats {
          text-align: center;
          padding: 50px 0;
          background-color: #f0f0f0;
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .stats-heading {
          margin-bottom: 20px;
        }

        .stats-cards {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }

        .stats-card {
          width: calc(33.33% - 20px);
          margin: 10px;
          padding: 25px;
          border: 1px solid #ccc;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .stats-card h3 {
          font-size: 1.3rem;
          margin-top: 0;
        }

        .stats-card p {
          font-size: 0.9rem;
          margin-bottom: 14px;
        }

        .stats-card mark {
          background-color: #d4d4d2;
          padding: 2px 5px;
          border-radius: 3px;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .stats-card {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Stats;
