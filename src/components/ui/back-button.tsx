'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onClick: () => void;
  label?: string;
  className?: string;
}

export function BackButton({ onClick, label = 'Back', className = '' }: BackButtonProps) {
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={onClick}
      className={`flex items-center gap-1 text-gray-600 hover:text-gray-900 px-2 py-1 h-auto ${className}`}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="font-medium text-sm">{label}</span>
    </Button>
  );
}