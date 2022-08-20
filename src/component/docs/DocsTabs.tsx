import React from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

interface Props {
  tabs: Array<any>;
  children: any; // TODO:
}

function DocsTabs({tabs, children}: Props) {
  if (tabs.length === 0) return <div></div>;

  return (
    <Tabs>
      <TabList>
        {tabs.map((t) => (
          <Tab key={t.properties.language}>
            {t.properties.language}
          </Tab>
        ))}
      </TabList>

      {tabs.map((t, i) => (
        <TabPanel key={t.properties.language}>
          {children[i]}
        </TabPanel>
      ))}
    </Tabs>
  )
}

export default DocsTabs;