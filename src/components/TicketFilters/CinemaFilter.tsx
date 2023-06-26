import { FunctionComponent, useContext } from 'react';
import { useDispatch } from 'react-redux';

import styles from './filters.module.css';

import OptionsContext from '@/contexts/OptionsContext';
import { filtersActions } from '@/redux/features/filters';

const CinemaFilter: FunctionComponent = function () {
  const dispatch = useDispatch();
  const cinemaOptions = useContext(OptionsContext)['cinemas'];
  return (
    <>
      <label htmlFor="cinema">Кинотеатр</label>
      <select
        onChange={(e) =>
          dispatch(
            filtersActions.addFilter({ name: 'cinema', value: e.target.value })
          )
        }
        className={styles['filter-input']}
        name="cinema"
        id="cinema"
        defaultValue="default"
      >
        <option value="default" disabled hidden>
          Выберите кинотеатр
        </option>
        {Boolean(cinemaOptions) &&
          Object.entries(cinemaOptions).map(([id, name]) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
      </select>
    </>
  );
};

export default CinemaFilter;
