import Image from 'next/image'
import { useContext } from 'react'
import { MediumContext } from '../context/WriteCon'
import Logo from '../static/akbanner.png'

const styles = {
  wrapper: `h-max-[10rem] flex items-center justify-center border-y border-black bg-[#2E8B57]`,
  content: `max-w-7xl flex-1 flex items-center justify-between`,
  accentedButton: `bg-black text-white py-2 px-4 rounded-full`,
}

const Banner = () => {
  const { user, handleUserAuth } = useContext(MediumContext)

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className='space-y-5 px-10 flex-[3]'>
          <h1 className='max-w-xl text-[5rem] font-mediumSerif'>
          Keep it groovy.
          </h1>
          <h3 className='text-2xl'>
          Explore stories, ideas, and insights from authors on any subject.
          </h3>
          {user ? (
            <button className={styles.accentedButton}>
              Get unlimited access
            </button>
          ) : (
            <button onClick={handleUserAuth} className={styles.accentedButton}>
              Start Reading
            </button>
          )}
        </div>

        <Image
          className='hidden h-32 md:inline-flex object-contain flex-1'
          src={Logo.src}
          height={400}
          width={500}
          alt='logo'
        />
      </div>
    </div>
  )
}

export default Banner
