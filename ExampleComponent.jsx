import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// fetchUsers лежит в asyncActions, clearUsers экспортируется из слайса
import { fetchUsers as fetchUsersAction } from '../redux/asyncActions/fetchData';
import { clearUsers as clearUsersAction } from '../redux/slices/exampleSlice';

// Компонент списка пользователей
const UserList = () => {
  const dispatch = useDispatch();
  const { entities, loading, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, [dispatch]);

  if (loading) return <div style={styles.center}>Загрузка пользователей...</div>;
  if (error) return <div style={styles.error}>Ошибка: {error}</div>;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Список пользователей</h2>
        <button onClick={() => dispatch(clearUsersAction())} style={styles.button}>Очистить</button>
      </div>
      <ul style={styles.list}>
        {entities.map(user => (
          <li key={user.id} style={styles.listItem}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: { maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' },
  button: { padding: '8px 16px', cursor: 'pointer', backgroundColor: '#444', color: 'white', border: 'none', borderRadius: '4px' },
  list: { listStyle: 'none', padding: 0 },
  listItem: { padding: '10px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' },
  center: { textAlign: 'center', marginTop: '50px', fontSize: '1.2rem' },
  error: { color: '#444', textAlign: 'center', marginTop: '50px' }
};

export default UserList;
