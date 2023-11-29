import React, { useEffect } from 'react';
import Plotly from 'plotly.js-dist';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import ganttData from 'C:\Users\Luna-Vincent\ppractice\seasonal_produce.json'; 

const GanttChart = () => {
  useEffect(() => {
    const processData = ganttData.map(item => {
      return {
        x: [item.Start, item.Finish],
        y: [item.Task],
        type: 'bar',
        orientation: 'h',
        // additional configuration if needed
      };
    });

    const layout = {
      // layout configuration
    };

    Plotly.newPlot('ganttChart', processData, layout);
  }, []);

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Gantt Chart</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Seasonal Produce Schedule
        </CardSubtitle>
        <div id="ganttChart" style={{ width: '100%', height: '390px' }} />
      </CardBody>
    </Card>
  );
};

export default GanttChart;
