import ContentLoader from 'react-content-loader';

const Skeleton = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="136" cy="124" r="119" />
      <rect x="158" y="191" rx="0" ry="0" width="2" height="2" />
      <rect x="159" y="192" rx="0" ry="0" width="0" height="2" />
      <rect x="5" y="315" rx="11" ry="11" width="265" height="62" />
      <rect x="134" y="436" rx="0" ry="0" width="0" height="1" />
      <rect x="2" y="256" rx="11" ry="11" width="268" height="24" />
      <rect x="4" y="409" rx="12" ry="12" width="118" height="28" />
      <rect x="134" y="403" rx="23" ry="23" width="131" height="42" />
    </ContentLoader>
  );
};

export default Skeleton;
