import { BallTriangle, Oval } from 'react-loader-spinner';
import { Box } from 'components/Box/Box';

export const Loader = () => {
  return (
    <Box display="flex" justifyContent="center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#07bad2"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </Box>
  );
};


export const LoaderButton = () => {
  return (
    <Oval
      height={20}
      width={20}
      color="#fff"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#fff"
      strokeWidth={4}
      strokeWidthSecondary={2}
    />
  );
}
