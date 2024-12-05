// ./src/components/TabsComponent.js

import React, { useState } from 'react';
// eslint-disable-next-line
import Formulario4_1 from '../pages/Sections/Section4/Section4_1';
import { ResponsiveBar } from '@nivo/bar';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react"; // Asegúrate de tener instalado Material Tailwind

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("formulario");

  // Datos de ejemplo para la gráfica de Nivo
  const data = [
    { country: 'AD', burgers: 60 },
    { country: 'AE', burgers: 80 },
    { country: 'AF', burgers: 70 },
    { country: 'AG', burgers: 90 },
    { country: 'AI', burgers: 50 },
  ];

  const keys = ['burgers'];
  const indexBy = 'country';

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
        <TabsHeader>
          <Tab value="formulario" className='bg-primary_light'>Formulario 4.1</Tab>
          <Tab value="dashboard" className='bg-primary_light'>Dashboard</Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel value="formulario">
            <Formulario4_1 />
          </TabPanel>
          <TabPanel value="dashboard">
            <div className="h-96">
              <ResponsiveBar
                data={data}
                keys={keys}
                indexBy={indexBy}
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'País',
                  legendPosition: 'middle',
                  legendOffset: 32,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Cantidad',
                  legendPosition: 'middle',
                  legendOffset: -40,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                legends={[
                  {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
              />
            </div>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
