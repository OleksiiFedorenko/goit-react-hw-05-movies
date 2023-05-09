import { Oval } from 'react-loader-spinner';
import { LoaderConainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderConainer>
      <Oval
        height={80}
        width={80}
        color="#362d62"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ceccf4"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </LoaderConainer>
  );
};

export default Loader;
