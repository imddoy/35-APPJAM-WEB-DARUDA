import { BlurLeft, RightBlur } from '@assets/svgs';
import Chip from '@components/chip/Chip';
import { useGetCategoriesQuery } from '@pages/toolList/apis/queries';
import { useRef, useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAnalytics } from 'src/hoc/useAnalytics';

import * as S from './SearchBar.styled';

export interface SearchBarProps {
  isSticky: boolean;
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

const SearchBar = ({ isSticky, onCategoryChange, selectedCategory }: SearchBarProps) => {
  const { trackEvent } = useAnalytics();
  const [activeButton, setActiveButton] = useState<'left' | 'right'>('right');
  const chipContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const categoryFromParams = searchParams.get('category') || 'ALL';

  const { data: categoryData } = useGetCategoriesQuery();

  const handleCategoryClick = async (categoryName: string) => {
    trackEvent('Tool_Category_Click', { Tool_Category: categoryName });
    onCategoryChange(categoryName);
    navigate(`/toollist?category=${categoryName}`);
  };

  // 최상단 헤더 카테고리와 동기화를 위한 로직
  useEffect(() => {
    onCategoryChange(categoryFromParams);
  }, [categoryFromParams]);

  // chip 컨테이너 스크롤 조정
  const handleScroll = (direction: 'start' | 'end') => {
    if (chipContainerRef.current) {
      if (direction === 'end') {
        chipContainerRef.current.scrollTo({
          left: chipContainerRef.current.scrollWidth,
          behavior: 'smooth',
        });
        setActiveButton('left');
      } else {
        chipContainerRef.current.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
        setActiveButton('right');
      }
    }
  };

  // arrow btn 위치 조정함수
  useEffect(() => {
    const handleScrollState = () => {
      if (chipContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = chipContainerRef.current;
        if (scrollLeft === 0) {
          setActiveButton('right');
        } else if (scrollLeft + clientWidth >= scrollWidth) {
          setActiveButton('left');
        }
      }
    };

    chipContainerRef.current?.addEventListener('scroll', handleScrollState);
    return () => chipContainerRef.current?.removeEventListener('scroll', handleScrollState);
  }, []);

  return (
    <S.SearchBarContainer isSticky={isSticky}>
      <S.SearchBarBox isSticky={isSticky}>
        {isSticky || <S.SearchBarTitle>필요한 툴을 쉽고 빠르게 찾아보세요.</S.SearchBarTitle>}
        <S.SearchBar isSticky={isSticky}>
          <S.IcSearchGray />
          <S.Search placeholder="지금은 준비 중이에요" disabled isSticky={isSticky} />
        </S.SearchBar>
        <S.SearchChipWrapper>
          {isSticky && activeButton === 'left' && (
            <S.ScrollButtonLeft onClick={() => handleScroll('start')}>
              <BlurLeft />
            </S.ScrollButtonLeft>
          )}
          <S.SearchChip ref={chipContainerRef} isSticky={isSticky}>
            {categoryData?.data.map((category) => (
              <Chip
                key={category.name}
                size="large"
                active={category.name === selectedCategory}
                onClick={() => {
                  handleCategoryClick(category.name);
                }}
              >
                <Chip.RoundContainer>
                  <Chip.Label>{category.koreanName}</Chip.Label>
                </Chip.RoundContainer>
              </Chip>
            ))}
          </S.SearchChip>
          {isSticky && activeButton === 'right' && (
            <S.ScrollButtonRight onClick={() => handleScroll('end')}>
              <RightBlur />
            </S.ScrollButtonRight>
          )}
        </S.SearchChipWrapper>
      </S.SearchBarBox>
    </S.SearchBarContainer>
  );
};

export default SearchBar;
