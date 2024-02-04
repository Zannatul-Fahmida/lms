import Image from 'next/image';
import styles from '../../styles/Dashboard.module.css';
import image from '../../public/card.png'

export default function MyCourseCard() {
  return (
    <div>
    <div className={`${styles.skyBlueBg} card shadow-xl`}>
      <div className="card-body">
        <div className="flex w-full md:mb-4">
          <div className="flex justify-center">
            <Image src={image} width={80} height={80} alt='img' />
          </div>
          <div className='text-white'>
          <h2 className="card-title md:text-start">Web development</h2>
          <p>Starting date:</p>
          <p>Ending date:</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}