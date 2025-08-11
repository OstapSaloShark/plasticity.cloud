import { onScrollToSection } from '../../utils/scroll';
import { Button } from '../button';
import './index.scss';

export const NavLinks = ({
  colorText = '#f7f6f9',
  vertical = false,
  onClickToItem = undefined,
}) => {
  const onClickToBtn = (sectionName) => {
    onScrollToSection(sectionName);
    if (onClickToItem) {
      onClickToItem();
    }
  };
  return (
    <nav className="nav-links">
      <ul
        className="nav-links__list"
        style={{ flexDirection: vertical ? 'column' : 'row' }}
      >
        <li className="nav-links__item">
          <Button
            style={{ color: colorText }}
            onClick={() =>   onClickToBtn('our-service')}
            variant="secondary"
          >
            Our service
          </Button>
        </li>
        <li className="nav-links__item">
          <Button
            style={{ color: colorText }}
            onClick={() => onClickToBtn('solutions')}
            variant="secondary"
          >
            Solutions
          </Button>
        </li>
        <li className="nav-links__item">
          <Button
            style={{ color: colorText }}
            onClick={() => onClickToBtn('partners')}
            variant="secondary"
          >
            Partners
          </Button>
        </li>
      </ul>
    </nav>
  );
}