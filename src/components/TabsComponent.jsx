// ./src/components/TabsComponent.js

import React, { useState } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react"; // Asegúrate de tener instalado Material Tailwind
import GeneralForm from './GeneralForm';

const TabsComponent = ({ formQuestions, DashboardComponent, label, introductions, subsection}) => {
  const [activeTab, setActiveTab] = useState("Form");

  return (
    <div className="bg-primary bg-opacity-70">
      <div className="w-full max-w-5xl mx-auto p-4">
        <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
          <TabsHeader>
            <Tab value="Form" className='bg-primary_light'>Formulario</Tab>
            <Tab value="dashboard" className='bg-primary_light'>Dashboard</Tab>
          </TabsHeader>
          <TabsBody>
            <TabPanel value="Form">
              <GeneralForm subsection = {subsection} label = {label} formQuestions = {formQuestions} introductions = {introductions}/>
            </TabPanel>
            <TabPanel value="dashboard">
              <DashboardComponent label = {label} subsection = {subsection} formQuestions = {formQuestions}/>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default TabsComponent;
