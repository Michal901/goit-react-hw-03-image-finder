import { DNA } from 'react-loader-spinner';

export default function Loader() {
  return (
    <DNA
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{
        position: 'absolute',
        left: '50%',
        top: '10%',
        transform: 'translateX(-50%)',
      }}
      wrapperClass="dna-wrapper"
    />
  );
}
