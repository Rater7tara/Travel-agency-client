import React, { useState, useEffect } from 'react';
import './MyBarChart.css'



const MyBarChart = ({ percentage }) => {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const targetWidth = (percentage / 100) * 100;

    const animateBar = () => {
      let animationFrameId;

      const updateBar = () => {
        const newWidth = barWidth + (targetWidth - barWidth) * 0.1;
        setBarWidth(newWidth);

        if (newWidth < targetWidth) {
          animationFrameId = requestAnimationFrame(updateBar);
        }
      };

      updateBar();

      return () => cancelAnimationFrame(animationFrameId);
    };

    animateBar();
  }, [percentage, barWidth]);

  return (
    <div className="bar" style={{ width: `${barWidth}%`, backgroundColor: '#3498db' }}>
    </div>
  );
};



export default MyBarChart;