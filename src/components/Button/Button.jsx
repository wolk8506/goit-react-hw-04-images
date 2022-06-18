import s from 'components/Button/Button.module.css';

export function Button({ onClick }) {
  return (
    <button className={s.button} type="button" onClick={onClick}>
      Load more
    </button>
  );
}
