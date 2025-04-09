import React from 'react';
import './Logo.css';
import { FaSun } from 'react-icons/fa';
import { GiElectric } from 'react-icons/gi';
import { MdOutlineEnergySavingsLeaf } from 'react-icons/md';

const SolarLogo = () => {
  return (
    <div className="solar-logo upgraded">
      <div className="sun-panel-container">
        <div className="sun-animation">
          <FaSun className="sun-icon" />
          <div className="sun-rays"></div>
        </div>

        <div className="ray-to-panel">
          <div className="ray-line"></div>
        </div>

        <div className="solar-panel">
          <div className="panel-grid">
            <div className="panel-cell"></div>
            <div className="panel-cell"></div>
            <div className="panel-cell"></div>
            <div className="panel-cell"></div>
          </div>
        </div>

        <div className="electric-flow">
          <GiElectric className="electric-icon" />
          <MdOutlineEnergySavingsLeaf className="energy-icon" />
        </div>
      </div>

      <div className="logo-text">
        <span className="brand">Miraj</span>
        <span className="solar-grid">$olar</span>
        <span className="dotcom">.com</span>
      </div>
    </div>
  );
};

export default SolarLogo;