import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://avatars2.githubusercontent.com/u/18452687?s=460&u=82ab455fa548c81bd4bb9918ae1ae5bee3824d7d&v=4"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Carlos Henrique Kruger</h1>
        <h2>Freelancer</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
