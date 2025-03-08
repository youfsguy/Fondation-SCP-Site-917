
import React from 'react';

interface RedactedTextProps {
  width?: string;
  className?: string;
}

const RedactedText: React.FC<RedactedTextProps> = ({ width = '40px', className = '' }) => {
  return (
    <span 
      className={`bg-scp-red/90 text-transparent rounded-sm select-none inline-block ${className}`} 
      style={{ width, height: '1em', display: 'inline-block' }}
      aria-label="redacted text"
    >
      redacted
    </span>
  );
};

export default RedactedText;
