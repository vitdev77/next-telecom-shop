import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={'/'} className='logo'>
      <img className='logo__img' src='/img/logo.svg' alt='Nexttelecom logo' />
    </Link>
  )
}

export default Logo
