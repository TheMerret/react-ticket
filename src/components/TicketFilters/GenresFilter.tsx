import { FunctionComponent, useContext } from 'react';
import { useDispatch } from 'react-redux';

import styles from './filters.module.css';

import OptionsContext from '@/contexts/OptionsContext';
import { filtersActions } from '@/redux/features/filters';

const GenresFilter: FunctionComponent = function () {
  const dispatch = useDispatch();
  const genresOptions = useContext(OptionsContext)['genres'];
  console.log(genresOptions);
  return (
    <>
      <label htmlFor="cinema">Жанр</label>
      <select
        onChange={(e) =>
          dispatch(
            filtersActions.addFilter({ name: 'genre', value: e.target.value })
          )
        }
        className={styles['filter-input']}
        name="cinema"
        id="cinema"
        defaultValue="default"
      >
        <option value="default" disabled hidden>
          Выберите жанр
        </option>
        {Boolean(genresOptions) &&
          Object.entries(genresOptions).map(([id, name]) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
      </select>
    </>
  );
};

export default GenresFilter;
