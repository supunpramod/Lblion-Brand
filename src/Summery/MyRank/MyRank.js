import React from 'react';
import './myrank.css';

const rankData = [
  {
    id: 1,
    status: 'Locked',
    title: '01. Team Leader',
    requirements:
      'Have 12 direct referrals, USDT 6000 team investment, and USDT 1000 personal investment to become a Team Leader.',
    benefits:
      'To achieve the Team Leader rank, you need to have 12 direct referrals, with a total team investment of USDT 6000 and a personal investment of USDT 1000. Once these conditions are met, you will be promoted to the Team Leader rank and will be eligible for rewards accordingly. Reward: A Smartphone',
  },
  {
    id: 2,
    status: 'Locked',
    title: '02. Team Supervisor',
    requirements:
      'Have 6 Team Leaders and a USDT 2500 team investment to become a Team Supervisor.',
    benefits:
      'To become a Team Supervisor, you need to have 6 Team Leaders and a USDT 2500 team investment. Once these conditions are met, you will be eligible for higher rewards.',
  },
];

const MyRank = () => {
  return (
    <div className="rank-container">
      <h2 className="rank-title">My Rank Summary</h2>

      {rankData.map((rank) => (
        <div className="rank-card" key={rank.id}>
          <div className="locked-badge">Locked</div>
          <h3>{rank.title}</h3>
          <div className="requirement">{rank.requirements}</div>
          <div className="benefits-section">
            <div className="benefit-tag">Benefits</div>
            <p>{rank.benefits}</p>
          </div>
          <div className="rank-icon">🟧</div>
        </div>
      ))}
    </div>
  );
};

export default MyRank;
