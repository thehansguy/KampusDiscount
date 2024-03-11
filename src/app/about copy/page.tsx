import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.mt + ' container'}>
      <div className="row py-4">
        <div className="col">
          <Image className="img-fluid" src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
        </div>
      </div>
    </div>
  );
}
