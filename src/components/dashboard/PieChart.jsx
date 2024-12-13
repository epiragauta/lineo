// src/components/PieChart.jsx

import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import PropTypes from 'prop-types';
import { customBlueGreenPalette } from './colorConfig';

const PieChart = ({ data, label }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{label}</h2>
      <div style={{ height: 400 }}>
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={customBlueGreenPalette}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          enableRadialLabels={true}
          radialLabelsSkipAngle={10}
          radialLabelsTextColor="#333333"
          radialLabelsLinkColor={{ from: 'color' }}
          sliceLabelsSkipAngle={10}
          sliceLabelsTextColor="#333333"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              translateY: 56,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#999',
              symbolSize: 18,
              symbolShape: 'circle',
            },
          ]}
          theme={{ legends: { text: { fontSize: 30 } } }}
        />
      </div>
    </div>
  );
};

PieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // "Si" or "No"
      label: PropTypes.string.isRequired, // "Si" or "No"
      value: PropTypes.number.isRequired, // Count
    })
  ).isRequired,
};

export default PieChart;
