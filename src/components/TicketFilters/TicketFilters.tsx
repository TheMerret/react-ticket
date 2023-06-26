import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import styles from './filters.module.css';
import CinemaFilter from './CinemaFilter';
import GenresFilter from './GenresFilter';

import { filtersActions } from '@/redux/features/filters';
import { CinemasProvider, GenresProvider } from '@/contexts/OptionsProvider';

const TicketFilters: FunctionComponent = function ({}) {
  const dispatch = useDispatch();

  let debounceTimer;
  const handleInputChange = (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      dispatch(
        filtersActions.addFilter({ name: 'title', value: e.target.value })
      );
    }, 500);
  };

  return (
    <aside className={styles.filters}>
      <h1>Фильтры поиска</h1>
      <div className={styles.filter}>
        <label htmlFor="title">Название</label>
        <input
          className={styles['filter-input']}
          type="text"
          id="title"
          placeholder="Введите название"
          onChange={handleInputChange}
        />
      </div>
      <GenresProvider>
        <div className={styles.filter}>
          <GenresFilter></GenresFilter>
        </div>
      </GenresProvider>
      <CinemasProvider>
        <div className={styles.filter}>
          <CinemaFilter></CinemaFilter>
        </div>
      </CinemasProvider>
    </aside>
  );
};

export default TicketFilters;
