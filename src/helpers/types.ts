export interface Tab extends TabHeader, TabContent {}

export interface TabHeader {
  id: string;
  tabName: React.ReactElement | string;
}

export interface TabContent {
  tabContent: React.ReactElement | string;
}

export interface TabHeaderProps {
  headers: TabHeader[];
  onTabHeaderClick: (id: string) => void;
  idActiveTab: string;
}

export interface TabsProps {
  items: Tab[];
  activeTabId?: string;
}
