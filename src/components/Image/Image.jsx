const Image = ({ webp, fallback, alt = "image", ...props }) => {
  return (
    <picture className="mt-10 px-3 md:px-0">
      <source srcSet={webp} type="image/webp" />
      <source srcSet={fallback} type="image/jpeg" />
      <img src={fallback} alt={alt} {...props} />
    </picture>
  );
};

export default Image;
