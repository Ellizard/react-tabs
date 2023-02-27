import { useState, useTransition } from 'react';
import { TabsProps } from '../../helpers/types';
import { TabInnerContent } from './TabInnerContent';
import { TabsHeader } from './TabsHeader';
import { Spinner } from '../Spinner';
import * as S from './styles';

export const Tabs = ({ items = [], activeTabId }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string | null>(activeTabId || null);
  const [isPending, startTransition] = useTransition();

  const headers = items.map(({ tabName, id }) => ({ tabName, id }));
  const firstItem = items[0];
  const content = activeTab ? items.find((item) => item.id === activeTab) || firstItem : firstItem;

  const handleTabClick = (id: string): void => {
    startTransition(() => {
      setActiveTab(id);
    });
  };

  return (
    <S.Tabs>
      {isPending && (
        <S.Spinner>
          <Spinner />
        </S.Spinner>
      )}
      <TabsHeader headers={headers} idActiveTab={activeTab || firstItem.id} onTabHeaderClick={handleTabClick} />
      {content && <TabInnerContent tabContent={content.tabContent} />}
    </S.Tabs>
  );
};
