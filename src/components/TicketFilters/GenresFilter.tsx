import { FunctionComponent, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';

import DropDown from '../UI/DropDown/DropDown';

import styles from './filters.module.css';

import OptionsContext from '@/contexts/OptionsContext';
import { filtersActions } from '@/redux/features/filters';

const GenresFilter: FunctionComponent = function () {
  const [placeholder, setPlaceholder] = useState('Выберите жанр');
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();
  const genresOptions = useContext(OptionsContext)['genres'];
  const handleOnChange = (e) => {
    if (['default', 'reset'].includes(e.target.value)) {
      dispatch(
        filtersActions.removeFilter({
          name: 'genre',
        })
      );
      setIsSelected(false);
      setPlaceholder('Выберите жанр');
      return;
    }
    dispatch(
      filtersActions.addFilter({
        name: 'genre',
        value: e.target.value,
      })
    );
    setIsSelected(true);
    setPlaceholder(e.target.textContent);
  };
  return (
    <>
      <label htmlFor="cinema">Жанр</label>
      <DropDown
        isSelected={isSelected}
        placeholder={placeholder}
        onChange={handleOnChange}
      >
        <option value="reset">Не выбран</option>
        {Boolean(genresOptions) &&
          Object.entries(genresOptions).map(([id, name]) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
      </DropDown>
    </>
  );
};

export default GenresFilter;
