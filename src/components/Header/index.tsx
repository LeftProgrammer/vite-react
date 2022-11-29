// import styles from './index.module.scss';
import { devDependencies } from '../../../package.json';

export function Header() {
  // return <p className={styles.header}>This is Header</p>
  return (
    <div className="p-20px text-center">
      <h1 className="font-bold text-2xl mb-2">
        vite version: {devDependencies.vite}
      </h1>

      {/* <button
        bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
        text="sm white"
        font="mono light"
        p="y-2 x-4"
        border="2 rounded blue-200"
      >
        Burron
      </button> */}

      <div className="flex-c">div</div>
    </div>
  );
}
