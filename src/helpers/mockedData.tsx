import React from 'react';
import { Tab } from './types';
import { Tabs } from '../components/Tabs';
import { TabButton } from '../components/TabButton/TabButton';
import { Icon } from '../components/Icon';

export const data_1: Tab[] = [
  {
    id: 'test-3',
    tabContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    tabName: 'Tab 1',
  },
  {
    id: 'test-4',
    tabContent:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    tabName: <TabButton />,
  },
  {
    id: 'test-5',
    tabContent: 'Where can I get some?',
    tabName: (
      <>
        <Icon /> {'Tab 3'}{' '}
      </>
    ),
  },
];

export const data_2: Tab[] = [
  {
    id: 'test-1',
    tabContent: 'Ipsum available, but the majority have suffered alteration',
    tabName: 'Tab 1',
  },
  {
    id: 'test-2',
    tabContent:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    tabName: 'Tab 2',
  },
  {
    id: 'test-3',
    tabContent: <Tabs items={data_1} />,
    tabName: 'Tab 3',
  },
];
