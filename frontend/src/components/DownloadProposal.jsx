import React from 'react';
import { Download, FileText } from 'lucide-react';
import { Button } from './ui/button';

const DownloadProposal = () => {
  const handleDownload = () => {
    // Create a link to download the proposal
    const link = document.createElement('a');
    link.href = '/Business_Proposal_Template.txt';
    link.download = 'Business_Proposal_Template.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={handleDownload}
        size="lg"
        className="bg-amber-600 hover:bg-amber-700 text-white shadow-2xl flex items-center gap-2"
      >
        <FileText className="w-5 h-5" />
        Download Business Proposal
        <Download className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default DownloadProposal;