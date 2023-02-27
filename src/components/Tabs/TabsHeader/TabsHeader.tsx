import { TabHeaderProps } from '../../../helpers/types';
import * as S from './styles';

export const TabsHeader = ({ headers, onTabHeaderClick, idActiveTab }: TabHeaderProps) => {
  return (
    <S.Ul>
      {headers.map(({ id, tabName }) => {
        const tabIsActive = idActiveTab === id;
        return (
          <S.Li key={id}>
            <S.Button
              isActiveTab={tabIsActive}
              onClick={() => onTabHeaderClick(id)}
              onKeyDown={() => onTabHeaderClick(id)}
            >
              {tabName}
            </S.Button>
          </S.Li>
        )
      })}
    </S.Ul>
  );
};