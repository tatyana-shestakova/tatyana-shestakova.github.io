import React, { useCallback, useContext, useRef, useState } from 'react';
import { CardList } from '../../components/CardList/CardList';
import { useOnScreen } from '../../components/LazyLoad/lazyload';
import { addRandomCards } from '../../composable/addRandomCards';
import { mockList } from '../../dto/mockCardsData';
import '../../styles/styles.sass';
import { Icon, IconProps } from 'src/components/Icon/Icon';
import { Collapse } from '../../components/Collapse/Collapse';
import { Tip } from '../../components/Tip/Tip';
import { RangeSlider } from 'src/components/RangeSlider/RangeSlider';
import { I18nContext } from 'src/providers/LanguageProvider';

interface MainCardListProps {
  /**
   * Включена ли автоматиеская загрузка товаров
   */
  automaticLoad?: boolean;
}

const newMockArray = [...addRandomCards(30)];

export function MainCardList({ automaticLoad }: MainCardListProps) {
  const { language, i18n } = useContext(I18nContext);

  const iconParam: IconProps = {
    src: 'https://images.icon-icons.com/1993/PNG/512/filter_filters_funnel_list_navigation_sort_sorting_icon_123212.png',
    theme: 'ghost',
    size: 'm',
  };

  const elementRef = useRef<HTMLDivElement>(null);

  const [mockArray, setMockArray] = useState(mockList);

  const [openedFilter, setStatusFilter] = useState<boolean>(false);

  const handleSetMockArray = useCallback(() => {
    setMockArray((prev) => [...prev, ...addRandomCards(6)]);
  }, []);

  const filterCards = (min: number, max: number) => {
    setMockArray(() =>
      newMockArray.filter((item) => {
        return item.price >= min && item.price <= max;
      })
    );
  };

  const isElementOnScreen = useOnScreen(elementRef, !automaticLoad);

  if (isElementOnScreen) {
    mockArray.push(...addRandomCards(3));
  }

  const openFilter = () => setStatusFilter(!openedFilter);

  return (
    <CardList buttonRef={elementRef} list={mockArray} onClick={handleSetMockArray}>
      <div className="container">
        <div className="card-title typography xl bold">{i18n[language].offers}</div>
        <div className="icon-filter" onClick={() => openFilter()}>
          <Tip className="absolute-tip" title={i18n[language].filter}>
            <div>
              <Icon size={iconParam.size} src={iconParam.src} theme={iconParam.theme} />
            </div>
          </Tip>
        </div>
        <Collapse opened={openedFilter}>
          <RangeSlider min={0} max={10000} step={100} onChange={({ min, max }) => filterCards(min, max)} />
        </Collapse>
      </div>
    </CardList>
  );
}
