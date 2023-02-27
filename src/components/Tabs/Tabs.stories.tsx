// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { data_1, data_2 } from '../../helpers/mockedData';
import { Tabs } from './index';

export default {
  title: 'Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const SingleTab: ComponentStory<typeof Tabs> = () => <Tabs items={data_1} />;
export const MultipleTabs: ComponentStory<typeof Tabs> = () => <Tabs items={data_2} />;
export const PreselectedTab: ComponentStory<typeof Tabs> = () => <Tabs items={data_1} activeTabId="test-5" />;

SingleTab.storyName = 'Default tab';
MultipleTabs.storyName = 'Tabs with tabs inside';
PreselectedTab.storyName = 'Tabs with preselected by default';
