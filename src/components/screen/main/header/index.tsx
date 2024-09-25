import ProfileImg from '@components/profileImg';
import { useAuthContext } from '@contexts/Auth/useAuthContext';
import TyMoviesLogo from 'assets/svg/TYmovies';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { HeaderMainStyle } from './style';

const HeaderMain = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const top = window.scrollY;
      if (top > 2) {
        headerRef?.current?.classList.add('effectHead');
      } else {
        headerRef?.current?.classList.remove('effectHead');
      }
    });
  }, []);

  return (
    <HeaderMainStyle ref={headerRef}>
      <TyMoviesLogo />
      {user && (
        <button
          type="button"
          className="containerProfile"
          style={{
            backgroundImage: user?.borderColor,
          }}
          onClick={() => router.push('/user')}
        >
          <div className="imgFundo">
            {user?.img && <ProfileImg props={user?.img} />}
          </div>
        </button>
      )}
    </HeaderMainStyle>
  );
};

export default HeaderMain;
