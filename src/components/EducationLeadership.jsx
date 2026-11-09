import React from 'react';
import Experience from './Experience';
import Education from './Education';

// Composite view alias for EducationLeadership
const EducationLeadership = () => (
  <div className="space-y-12">
    <Experience />
    <Education />
  </div>
);

export default EducationLeadership;
