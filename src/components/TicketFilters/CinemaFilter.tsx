import { FunctionComponent, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';

import DropDown from '../UI/DropDown/DropDown';

import OptionsContext from '@/contexts/OptionsContext';
import { filtersActions } from '@/redux/features/filters';

const CinemaFilter: FunctionComponent = function () {
  const [placeholder, setPlaceholder] = useState('Выберите кинотеатр');
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();
  const cinemaOptions = useContext(OptionsContext)['cinemas'];
  const handleOnChange = (e) => {
    if (['default', 'reset'].includes(e.target.value)) {
      dispatch(
        filtersActions.removeFilter({
          name: 'cinema',
        })
      );
      setPlaceholder('Выберите кинотеатр');
      setIsSelected(false);
      return;
    }
    dispatch(
      filtersActions.addFilter({
        name: 'cinema',
        value: e.target.value,
      })
    );
    setIsSelected(true);
    setPlaceholder(e.target.textContent);
  };
  return (
    <>
      <label htmlFor="cinema">Кинотеатр</label>
      <DropDown
        isSelected={isSelected}
        placeholder={placeholder}
        onChange={handleOnChange}
      >
        <option value="reset">Не выбран</option>
        {Boolean(cinemaOptions) &&
          Object.entries(cinemaOptions).map(([id, name]) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
      </DropDown>
    </>
  );
};

export default CinemaFilter;
