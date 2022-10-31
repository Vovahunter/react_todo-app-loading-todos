import classNames from 'classnames';
import React from 'react';
import { FilterValues } from '../../types/FilterValues';

interface Props {
  activeTodosTotal: number,
  filterType: FilterValues;
  change: (value: FilterValues) => void;
}

export const TodoFooter: React.FC<Props> = ({
  filterType,
  change,
  activeTodosTotal,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="todosCounter">
        {`${activeTodosTotal} items left`}
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          data-cy="FilterLinkAll"
          href="#/"
          className={classNames(
            'filter__link', { selected: filterType === FilterValues.ALL },
          )}
          onClick={() => change(FilterValues.ALL)}
        >
          All
        </a>

        <a
          data-cy="FilterLinkActive"
          href="#/active"
          className={classNames(
            'filter__link', { selected: filterType === FilterValues.ACTIVE },
          )}
          onClick={() => change(FilterValues.ACTIVE)}
        >
          Active
        </a>
        <a
          data-cy="FilterLinkCompleted"
          href="#/completed"
          className={classNames(
            'filter__link', { selected: filterType === FilterValues.COMPLETED },
          )}
          onClick={() => change(FilterValues.COMPLETED)}
        >
          Completed
        </a>
      </nav>

      <button
        data-cy="ClearCompletedButton"
        type="button"
        className="todoapp__clear-completed"
      >
        Clear completed
      </button>
    </footer>
  );
};
