'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { Card } from '@/app/ui/dashboard/cards';

const IdPage = () => {
  const param = useParams();

  return <Card title='test' type='collected' value={123} key={11}/>;
};

export default IdPage;
