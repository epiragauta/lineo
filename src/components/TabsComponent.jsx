// ./src/components/TabsComponent.js

import React, { useState } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react"; // Asegúrate de tener instalado Material Tailwind

const TabsComponent = ({ FormComponent, DashboardComponent, label, subsection}) => {
  const [activeTab, setActiveTab] = useState("Form");

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
        <TabsHeader>
          <Tab value="Form" className='bg-primary_light'>Formulario</Tab>
          <Tab value="dashboard" className='bg-primary_light'>Dashboard</Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel value="Form">
            <FormComponent subsection = {subsection} label = {label} />
          </TabPanel>
          <TabPanel value="dashboard">
            <DashboardComponent label = {label} subsection = {subsection}/>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
